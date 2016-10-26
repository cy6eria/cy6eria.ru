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

function send404 (response) {
    response.writeHead(404, {"Content-Type": "text/html"});
    fs.readFile('./public/404.html', (err, data) => response.end(data));
};

const server = http.createServer((request, response) => {
    let filePath = 'index.html';

    if (['text/css', 'application/javascript'].indexOf(mime.lookup(path.basename(request.url))) >= 0) {
        filePath = request.url
    }

    fs.readFile(`./public/${filePath}`, (err, data) => {
        !err ? sendFile(response, filePath, data) : send404(response);
    });   
});

server.listen(5100, () => {
    console.log('Server started on localhost:5100.')
});