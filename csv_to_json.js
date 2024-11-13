const fs = require('fs');
const csv = require('fast-csv');
const path = require('path');

// Function to parse the CSV file into a JSON object
function parseCSVtoJSON(filePath) {
    const jsonObject = {};
    fs.createReadStream(path.resolve(filePath))
        .pipe(csv.parse({ ignoreEmpty: true }))
        .on('error', (error) => console.error(error))
        .on('data', (row) => jsonObject[row[0].trim()] = row[1].trim())
        .on('end', (rowCount) => console.log(`Parsed ${rowCount} rows`));
    return jsonObject;
}

// Usage
const filePath = path.join(__dirname, 'KJV Bible Reading Plan - Pronunciation Fix.csv');
const IPA_PRONUNCIATIONS = parseCSVtoJSON(filePath);

module.exports = { IPA_PRONUNCIATIONS }