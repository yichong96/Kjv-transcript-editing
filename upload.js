const fs = require('fs');
const { Client } = require('ssh2');

const main = () => {
    const [localFilePath, remoteFilePath] = process.argv.slice(2);
    const host = 'rpg-7f76ccf078caba5f.elb.ap-southeast-1.amazonaws.com';
    const username = 'coder';
    const certPath = 'coder.cer';

    const conn = new Client();

    conn.on('ready', () => {
        conn.sftp((err, sftp) => {
            if (err) {
                console.error('Error creating SFTP session:', err);
                conn.end();
                return;
            }

            const readStream = fs.createReadStream(localFilePath);
            const writeStream = sftp.createWriteStream(remoteFilePath);

            writeStream.on('close', () => {
                console.log(`File uploaded successfully to ${host}`);
                conn.end();
            });

            writeStream.on('error', (err) => {
                console.error('Error uploading file:', err);
                conn.end();
            });

            readStream.pipe(writeStream);
        });
    }).connect({
        host,
        username,
        privateKey: fs.readFileSync(certPath)
    });
}

main();