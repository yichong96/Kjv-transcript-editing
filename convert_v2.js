const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');

function parseCSVtoJSON(filePath) {
    return new Promise((resolve, reject) => {
        const jsonObject = {};
        fs.createReadStream(path.resolve(filePath))
            .pipe(csv.parse({ ignoreEmpty: true }))
            .on('error', (error) => reject(error))
            .on('data', (row) => jsonObject[row[0].trim()] = row[1].trim())
            .on('end', () => resolve(jsonObject));
    })
}


// Define a function to replace words with their IPA pronunciation
function replaceWordsWithIPA(text, db) {
    // Define replacements
    // Replace each word with its IPA pronunciation
    Object.keys(db).forEach(function(word) {
        var ipa = db[word];
        var wordRegex = new RegExp(`(?<!<phoneme[^>]*\\bph="[^"]*">\\s*)\\b${word}\\b(?!<\\/phoneme>)`, 'g');
        var existingWordRegex = new RegExp(`<phoneme[^>]*>.*?${word}.*?<\/phoneme>`, 'g');
        // console.log(existingWordRegex)
        text = text.replace(existingWordRegex, function(match) {
            return match.replace(/ph="[^"]*"/, `ph="${ipa}"`);
        })
        text = text.replace(wordRegex, function(match) {
                // Enclose the word in a new <phoneme> tag with the correct 'ph' attribute
                return `<phoneme alphabet="ipa" ph="${ipa}">${match}</phoneme>`;
            })
    });
    return text;
}

// Define a regular expression to match content within <prosody> tag
var prosodyRegex = /(<prosody[^>]*>)(.*?)(<\/prosody>)/s;

const main = async () => {
    const [xmlInputPath, xmlOutputPath] = process.argv.slice(2);
    const xmlData = fs.readFileSync(path.resolve(xmlInputPath), 'utf8');

    const filePath = path.join(__dirname, 'KJV Bible Reading Plan - Pronunciation Fix.csv');
    const IPA_PRONUNCIATIONS = await parseCSVtoJSON(filePath);    // backup original file from server
    
    fs.writeFileSync(path.resolve(xmlInputPath.split('.')[0] + 'backup.xml'), xmlData, 'utf8');

    // Replace occurrences within the <prosody> tag
    var updatedXmlString = xmlData.replace(prosodyRegex, function(match, startTag, content, endTag) {
        // Replace words with their IPA pronunciations
        return startTag + replaceWordsWithIPA(content, IPA_PRONUNCIATIONS) + endTag;
    });
    console.log(updatedXmlString);

    fs.writeFileSync(path.resolve(xmlOutputPath), updatedXmlString, 'utf8');
}

main();