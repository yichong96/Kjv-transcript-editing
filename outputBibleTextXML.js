const axios = require('axios');

async function getBibleTextXML(bookName, chapter, verse) {
    try {
        const response = await axios.get(`https://bible-api.com/${bookName}+${chapter}:${verse}?translation=kjv`);
        const { text } = response.data;

        const verseText = text.replace(/\n/g, ' ').trim();
        
        const xmlText = `<speak><prosody rate='80%' volume='loud'>${verseText}</prosody></speak>`;
        
        console.log(xmlText);
    } catch (error) {
        console.error('Error fetching Bible text:', error.message);
    }
}

const main = () => {
    const [book, chapter, verse] = process.argv.slice(2);
    getBibleTextXML(book, chapter, verse);
}

main();