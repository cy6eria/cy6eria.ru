const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const Sequelize = require('sequelize');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
//const register = require('ignore-styles');

import { secret, renderSitemap } from './server';
import { getHTML } from './src/server';
const Models = require('./models');

//register(['.scss', '.css']);
const app = express();

app.use(express.static('public', {
    index: false
}));
app.use(cookieParser());
app.use(session({
    secret,
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

// CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

passport.use(new LocalStrategy(
    (username, password, done) => {
        Models.User.findOne({ where: { username } }).then(user => {
            if (!user || user.password !== password) {
                return done(null, false, { text: 'Неверный логин или пароль.' });
            }
            
            return done(null, user);
        }).catch(err => done(err));
    }
));

passport.serializeUser((user, done) => {
    done(null, user.id);
});
  
passport.deserializeUser((id, done) => {
    Models.User.findOne({ where: { id } })
        .then(user => {
            done(null, user)
        })
        .catch(err => done(err));
});

function checkAuthentication (req, res, next) {
    const check = req.isAuthenticated();
    if (check) {
        next();
    } else{
        res.status(401).send({ text: 'Только авторизованные пользователи могут делать это.' });
    }
}

app.get('/api/posts', (req, res) => {
    Models.Post.findAndCountAll({
        order: [
            ['createdAt', 'DESC']
        ]
    }).then((data) => {
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
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: 'Не удалось найти запись.'
            });
        }
    }).catch((err) => {
        res.status(500).send(err);
    });
});

app.post('/api/posts/new', checkAuthentication, (req, res) => {
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

app.put('/api/posts/:id', checkAuthentication, (req, res) => {
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

app.post('/api/login', passport.authenticate('local'), (req, res) => {
    if (!req.user) {
        res.status(401).send({});
    } else {
        res.send({
            text: 'Вы вошли!'
        });
    }
});

app.get('/sitemap.xml', (req, res) => {
    renderSitemap().then((data) => {
        res.set('Content-Type', 'text/xml');
        res.send(data);
    });
});

app.get('*', getHTML);

app.listen(5100, () => console.log('Example app listening on port 5100!'))
