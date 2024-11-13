const fs = require('fs');

const path = require('path');

// Function to parse the CSV file into a JSON object
function parseCSVtoJSON(filePath) {
    const data = fs.readFileSync(filePath, 'utf8');
    const lines = data.trim().split('\n');
    const jsonObject = {};

    lines.forEach(line => {
        const [key, value] = line.split(',');
        jsonObject[key.trim()] = value.trim();
    });

    return jsonObject;
}

// Usage
const filePath = path.join(__dirname, 'KJV Bible Reading Plan - Pronunciation Fix.csv');
const IPA_PRONUNCIATIONS = parseCSVtoJSON(filePath);

module.exports = { IPA_PRONUNCIATIONS }