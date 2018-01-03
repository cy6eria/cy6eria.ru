const http = require('http');
const fs = require('fs');
const mime = require('mime');
const path = require('path');
const Sequelize = require('sequelize');
const dbConfig = require('./config/config.json');

const Models = require('./models');

const { host, dialect, username, password, database } = dbConfig.development;

function sendFile (response, filePath, fileContent) {
    response.writeHead(200, {
        'Content-Type': mime.lookup(path.basename(filePath))
    });
    response.end(fileContent);
};

function successAPICall (response, responseContent) {
    response.writeHead(200, {
        'Content-Type': 'text/json'
    });
    response.end(JSON.stringify(responseContent));
}

function failedAPICall (response, err) {
    response.writeHead(500, {
        'Content-Type': 'text/json'
    });
    response.end(err);
}

const server = http.createServer((request, response) => {
    switch (request.url) {
        case '/api/posts': {
            Models.Post.findAndCountAll().then((data) => {
                successAPICall(response, data)
            }).catch((err) => {
                failedAPICall(response, err);
            });
            break;
        }
        case '/api/users': {
            Models.User.findAndCountAll().then((data) => {
                successAPICall(response, data)
            }).catch((err) => {
                failedAPICall(response, err);
            });
            break;
        }
        default: {
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
        }
    }
});

server.listen(5100, () => {
    console.log('Server started on localhost:5100.')
});
