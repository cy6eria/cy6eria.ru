const path = require('path');
const express = require('express');
const bodyParser = require("body-parser");
const Sequelize = require('sequelize');

const Models = require('./models');

const app = express()

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/posts', (req, res) => {
    Models.Post.findAndCountAll().then((data) => {
        res.send(data);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

app.get('/api/posts/:id', (req, res) => {
    Models.Post.findOne({
        where: {
            id: req.params.id
        }
    }).then((data) => {
        res.send(data);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

app.post('/api/posts/new', (req, res) => {
    const { title, intro, post } = req.body;

    if (!(title || intro || post)) {
        res.status(500).send('Необходимо указать заголовок, введение и текст записи.');   
    } else {
        const newPost = Models.Post.build({
            title, intro, post
        });

        newPost.save().then((data) => {
            res.send(data);
        }).catch((err) => {
            res.status(500).send(err);
        });
    }
});

app.put('/api/posts/:id', (req, res) => {
    Models.Post.findOne({
        where: {
            id: req.params.id
        }
    }).then((post) => {
        post.update(req.body).then((data) => {
            res.send(data);
        }).catch((err) => {
            res.status(500).send(err);
        });
    }).catch((err) => {
        res.status(500).send(err);
    });
});

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.listen(5100, () => console.log('Example app listening on port 5100!'))
