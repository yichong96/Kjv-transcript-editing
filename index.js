const fs = require('fs');
const xml2js = require('xml2js');
const natural = require('natural');
const path = require('path');

const { IPA_PRONUNCIATIONS } = require('./data');

const tokenizer = new natural.WordPunctTokenizer();

const phonmeTemplate = (ipa, word) => `\<phoneme alphabet='ipa' ph="${ipa}"\>${word}\</phoneme\>`

// Use a regular expression to check if the string consists only of letters
const isWord = (str) => /^[a-zA-Z]+$/.test(str); 
const isPhoneme = (str) => /^<.*>$/.test(str);

const combinePunctuationsAndWords = (wordsPunctPhoneme) => {
    const result = [];
    wordsPunctPhoneme.forEach((wordPunctPhoneme) => {
        if (isWord(wordPunctPhoneme) || isPhoneme(wordPunctPhoneme)) {
            result.push(wordPunctPhoneme)
        } else {
            const lastWord = result.pop();
            const combined = lastWord + wordPunctPhoneme;
            result.push(combined);
        }
    })
    return result.join(' ');
} 

const correctPronunciationInXML = (xmlFilePath, outputFilePath) => {
  // Read the XML file
  const xmlData = fs.readFileSync(xmlFilePath, 'utf8');

  // Parse the XML data
  xml2js.parseString(xmlData, (err, result) => {
    if (err) {
      console.error('Error parsing XML:', err);
      return;
    }

    // Traverse the parsed XML and replace the specified word
    traverseAndReplace(result);

    // Convert the modified XML back to a string
    let modifiedXml = `<?xml version="1.0" encoding="UTF-8"?>\n${new xml2js.Builder().buildObject(result)}`;

    // Hack as all the < and > from the template gets converted to &lt and &gt
    modifiedXml = modifiedXml.replace(new RegExp('&lt;', 'g'), '<');
    modifiedXml = modifiedXml.replace(new RegExp('&gt;', 'g'), '>');

    // Save the modified XML to a new file
    fs.writeFileSync(outputFilePath, modifiedXml, 'utf8');
  });
}

const traverseAndReplace = (obj) => {
  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      traverseAndReplace(obj[key]);
      // replace only on tag content
    } else if (key === '_') {
        console.log(tokenizer.tokenize(obj[key]).map((wordOrPunct) => wordOrPunct in IPA_PRONUNCIATIONS ? phonmeTemplate(IPA_PRONUNCIATIONS[wordOrPunct], wordOrPunct) : wordOrPunct));
        obj[key] = combinePunctuationsAndWords(
            tokenizer.tokenize(obj[key])
                .map((wordOrPunct) => wordOrPunct in IPA_PRONUNCIATIONS ? phonmeTemplate(IPA_PRONUNCIATIONS[wordOrPunct], wordOrPunct) : wordOrPunct)
        )
    }
  }
}

const main = () => {
  const arguments = process.argv.slice(2);
  const xmlInputPath = arguments[0];
  const xmlOutputPath = arguments[1];
  correctPronunciationInXML(path.resolve(xmlInputPath), path.resolve(xmlOutputPath));
}

main();
