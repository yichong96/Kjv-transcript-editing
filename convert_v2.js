const { IPA_PRONUNCIATIONS } = require('./csv_to_json');
const fs = require('fs');
const path = require('path');


// Define a function to replace words with their IPA pronunciation
function replaceWordsWithIPA(text) {
    // Define replacements

    // Replace each word with its IPA pronunciation
    Object.keys(IPA_PRONUNCIATIONS).forEach(function(word) {
        var ipa = IPA_PRONUNCIATIONS[word];
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

const main = () => {
    const [xmlInputPath, xmlOutputPath] = process.argv.slice(2);
    const xmlData = fs.readFileSync(path.resolve(xmlInputPath), 'utf8');
    
    // Replace occurrences within the <prosody> tag
    var updatedXmlString = xmlData.replace(prosodyRegex, function(match, startTag, content, endTag) {
        // Replace words with their IPA pronunciations
        return startTag + replaceWordsWithIPA(content) + endTag;
    });    

    fs.writeFileSync(path.resolve(xmlOutputPath), updatedXmlString, 'utf8');
}

main();