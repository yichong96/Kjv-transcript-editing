# KJV Audio transcript correction tools

Tired of manually editing IPA pronunciations for each word that appears multiple times in different verses ? Use this script to automatically generate an XML file with the corrected IPA pronunciations.

This repository consists of various scripts to facilitate correction of IPA proununciations read incorrectly by the AI.

## Prerequisites
- Node version >= v16.15.1
- `coder.cer` certificate is placed in the project root directory

Run `npm install` to install dependencies.

## Usage

### Download transcript from server
Download the `.xml` file corresponding to the verse the AI has problems reading. On command line or bash, run
```bash
node download.js <remote_xml_file_path> <local_file_path>
```

#### Example
To download Genesis chapter 24 verse 29's transcript (`29.xml`) into the current project's directory. 
```bash
node download.js coder/cpbpc-tts-script-us-east-1/kjv/Genesis/24/29.xml 29.xml
```

### Correct wrongly pronounced words
On command line or bash, run
```bash
node convert.js <input.xml> <output.xml>
```
where `<input.xml>` and `<output.xml` are the relative XML paths from the project directory.


#### Example
The AI reads the word `Laban` incorrectly. This is an example from Gen 24 verse 29.
```XML
<speak><prosody rate='80%' volume='loud'>And Rebekah had a brother, and his name was Laban: and Laban ran out unto the man, unto the well.</prosody></speak>
```

Ensure `data.js` file contains the correct IPA pronunciation for `Laban`. If `data.js` does not contain the incorrectly pronounced word, find it's IPA pronunciation and add it to `IPA_PRONUNCIATIONS` object. 

Each key in `IPA_PRONUNCIATIONS` corresponds to a wrongly prononunced word and it's value represents the correct IPA pronunciation.


```javascript
// data.js
const IPA_PRONUNCIATIONS = {
    clave: "klɛ́jv",
    herb: "hɜːrb",
    Laban: "laˈban",
}
```

The output XML file looks like this after running the script.

```XML
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<speak>
  <prosody rate="80%" volume="loud">And Rebekah had a brother, and his name was <phoneme alphabet='ipa' ph="laˈban">Laban</phoneme>: and <phoneme alphabet='ipa' ph="laˈban">Laban</phoneme> ran out unto the man, unto the well.</prosody>
</speak>
```

> __Note__: **ADD** the correct IPA pronunciation to `data.js` and commit it back to this repository so that others can also get the updated IPA pronunciations !

### Upload the edited transcript to server
Upload the changed transcript back to the server. On command line or bash run
```bash
node upload.js <local_file_path> <remote_file_path>
```

#### Example
Following the example from the `Download transcript from server` section, upload Genesis chapter 24 verse 29's transcript (`29.xml`) to the server.

```bash
node upload.js 29.xml coder/cpbpc-tts-script-us-east-1/kjv/Genesis/24/29.xml
```
