const http = require('http');
const fs = require('fs');
const mime = require('mime');
const path = require('path');

function sendFile (response, filePath, fileContent) {
    response.writeHead(200, {
        'Content-Type': mime.lookup(path.basename(filePath))
    });
    response.end(fileContent);
};

const server = http.createServer((request, response) => {
    let filePath = request.url;

    fs.readFile(`./public/${filePath}`, (err, data) => {
        if (err) {
            fs.readFile(`./public/index.html`, (err, data) => {
                sendFile(response, 'index.html', data);
            })
        } else {
            sendFile(response, filePath, data);
        }
    });   
});

server.listen(5100, () => {
    console.log('Server started on localhost:5100.')
});
