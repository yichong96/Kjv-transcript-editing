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

const traverseAndReplace = (obj) => {
  console.log(JSON.stringify(obj, null, 2))
  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      traverseAndReplace(obj[key]);
      // replace only on tag content
    } else if (key === '_') {
        console.log("key: " + key);
        console.log(obj[key])
        console.log(tokenizer.tokenize(obj[key]))
        obj[key] = combinePunctuationsAndWords(
            tokenizer.tokenize(obj[key])
                .map((wordOrPunct) => wordOrPunct in IPA_PRONUNCIATIONS ? phonmeTemplate(IPA_PRONUNCIATIONS[wordOrPunct], wordOrPunct) : wordOrPunct)
        )
    }
  }
}

const main = () => {
  const [xmlInputPath, xmlOutputPath] = process.argv.slice(2);
  const xmlData = fs.readFileSync(path.resolve(xmlInputPath), 'utf8');

  // Parse the XML data
  xml2js.parseString(xmlData, (err, result) => {
    if (err) {
      console.error('Error parsing XML:', err);
      return;
    }

    // Traverse the parsed XML and replace the specified word
    traverseAndReplace(result);

    // Convert the modified XML back to a string
    let modifiedXml = new xml2js.Builder().buildObject(result);

    // Hack as all the < and > from the template gets converted to &lt and &gt
    modifiedXml = modifiedXml.replace(new RegExp('&lt;', 'g'), '<');
    modifiedXml = modifiedXml.replace(new RegExp('&gt;', 'g'), '>');

    // Save the modified XML to a new file
    fs.writeFileSync(path.resolve(xmlOutputPath), modifiedXml, 'utf8');
  });
}

main();
