const fs = require('fs');
const { Client } = require('ssh2');

const main = () => {
    const host = 'rpg-7f76ccf078caba5f.elb.ap-southeast-1.amazonaws.com';
    const username = 'coder';
    const privateKeyPath = 'coder.cer'

    const [remoteFilePath, localFilePath] = process.argv.slice(2);
    const conn = new Client();

    conn.on('ready', () => {
        conn.sftp((err, sftp) => {
            if (err) {
                console.error('Error creating SFTP session:', err);
                conn.end();
                return;
            }

            sftp.fastGet(remoteFilePath, localFilePath, (err) => {
                if (err) {
                    console.error('Error downloading file:', err);
                } else {
                    console.log(`File downloaded successfully from ${host}`);
                }
                conn.end();
            });
        });
    }).connect({
        host,
        username,
        privateKey: fs.readFileSync(privateKeyPath, 'utf-8')
    });
}

main();