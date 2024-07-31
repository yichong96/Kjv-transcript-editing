const fs = require('fs');
const path = require('path');
const { IPA_PRONUNCIATIONS } = require('./data');

// Function to parse CSV file
const parseCSV = (filePath) => {
  const csvData = fs.readFileSync(filePath, 'utf8');
  const lines = csvData.split('\n');

  const result = {};
  lines.forEach(line => {
    const [key, value] = line.split(',');
    if (key && value) {
      result[key.trim()] = value.trim();
    }
  });

  return result;
};

// Example usage
const csvFilePath = path.join(__dirname, 'cpbpc_db.csv');
const theirDB = parseCSV(csvFilePath);

const ourDB = IPA_PRONUNCIATIONS;


Object.entries(theirDB).forEach(([key, value]) => {
    if (ourDB[key] !== undefined) {
        ourDB[key] = theirDB[key];
    }
})

// Function to save object to a .js file
const saveDBToJSFile = (obj, outputFilePath) => {
    const objectString = `const IPA_PRONUNCIATIONS = ${JSON.stringify(obj, null, 2)};\nmodule.exports = { IPA_PRONUNCIATIONS };\n`;
    fs.writeFileSync(outputFilePath, objectString, 'utf8');
  };

const outputFile = path.join(__dirname, 'output.js');
saveDBToJSFile(ourDB, outputFile);
