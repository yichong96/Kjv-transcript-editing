const fs = require('fs');
const csv = require('csv-parser');

// Define the output JSON object
const result = {};

// Read and parse the CSV file without headers
fs.createReadStream('data.csv') // Replace with your CSV file path
  .pipe(csv({ headers: ['word', 'IPA'], skipLines: 0 })) // Specify headers manually
  .on('data', (row) => {
    // Use the specified headers 'key' and 'value'
    const key = row['word'];
    const value = row['IPA'];
    result[key] = value;  // Add key-value pair to the result object
  })
  .on('end', () => {
    // Write the JSON object to a file
    fs.writeFile('output.json', JSON.stringify(result, null, 2), (err) => {
      if (err) {
        console.error('Error writing JSON file:', err);
      } else {
        console.log('JSON file has been saved as output.json');
      }
    });
  })
  .on('error', (err) => {
    console.error('Error reading CSV file:', err);
  });