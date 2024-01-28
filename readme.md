# KJV Audio Transcript Correction Tool

Tired of manually editing IPA pronunciations for each word that appears multiple times in different verses ? Use this script to automatically generate an XML file with the corrected IPA pronunciations.

## Prerequisites
- Node version >= v16.15.1

Run `npm install` to install dependencies.

## Usage
On command line or bash, run
```bash
node index.js <input.xml> <output.xml>
```
where `<input.xml>` and `<output.xml` are the relative XML paths from the project directory.


### Example
The AI reads the word `Laban` incorrectly. This is an example from Gen 24 verse 29.
```XML
<speak><prosody rate='80%' volume='loud'>And Rebekah had a brother, and his name was Laban: and Laban ran out unto the man, unto the well.</prosody></speak>
```

Ensure `data.js` file contains the correct IPA pronunciation for `Laban`. If `data.js` does not contain the incorrectly pronounced word, find it's IPA pronunciation and add it to the object. 

Each key in the `IPA_PRONUNCIATIONS` object maps to the correct IPA pronunciation.


```javascript
// data.js
const IPA_PRONUNCIATIONS = {
    clave: "klɛ́jv",
    herb: "hɜːrb",
    Laban: "laˈban",
}
```

The output XML file looks something like this after running the command

```XML
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<speak>
  <prosody rate="80%" volume="loud">And Rebekah had a brother, and his name was <phoneme alphabet='ipa' ph="laˈban">Laban</phoneme>: and <phoneme alphabet='ipa' ph="laˈban">Laban</phoneme> ran out unto the man, unto the well.</prosody>
</speak>
```

> __Note__: **ADD** the correct IPA pronunciation to `data.js` and commit it back to this repository !