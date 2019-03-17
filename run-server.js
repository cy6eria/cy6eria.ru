const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const Sequelize = require('sequelize');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const next = require('next');

const config = require('./serverConfig');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const PORT = config.port || 3000;

const renderSitemap = require('./server').renderSitemap;
const Models = require('./models');

const checkAuthentication = (req, res, next) => {
    const check = req.isAuthenticated();
    if (check) {
        next();
    } else{
        res.status(401).send({ text: 'Только авторизованные пользователи могут делать это.' });
    }
};

// Настраиваем passport
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

// Создаем экземпляр сервера.
app.prepare().then(() => {
    const server = express();

    server.use(express.static('public', {
        index: false
    }));
    server.use(cookieParser());
    server.use(session({
        secret: config.secret,
        resave: true,
        saveUninitialized: true
    }));
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(bodyParser.json());
    server.use(passport.initialize());
    server.use(passport.session());
    
    // CORS
    // server.use(function(req, res, next) {
    //     res.header("Access-Control-Allow-Origin", "*");
    //     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //     next();
    // });

    server.get('/api/posts', (req, res) => {
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
    
    server.get('/api/posts/:id', (req, res) => {
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
    
    server.post('/api/posts/new', checkAuthentication, (req, res) => {
        const { title, intro, post } = req.body;
    
        if (!(title || intro || post)) {
            res.status(500).send('Необходимо указать заголовок, введение и текст записи.');   
        } else {
            const newPost = Models.Post.build(req.body);
    
            newPost.save().then((data) => {
                res.send(data);
            }).catch((err) => {
                res.status(500).send(err);
            });
        }
    });
    
    server.put('/api/posts/:id', checkAuthentication, (req, res) => {
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
    
    server.post('/api/login', passport.authenticate('local'), (req, res) => {
        if (!req.user) {
            res.status(401).send({});
        } else {
            res.send({
                text: 'Вы вошли!'
            });
        }
    });
    
    server.get('/sitemap.xml', (req, res) => renderSitemap().then(data => {
        res.set('Content-Type', 'text/xml');
        res.send(data);
    }));

    server.get('/posts/:id', (req, res) => {
        const actualPage = '/posts';
        const queryParams = { id: req.params.id };
        app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => handle(req, res));
        
    server.listen(PORT, err => {
        if (err) throw err
        console.log(`> The server is launched on http://localhost:${PORT} 🚀`)
    });
}).catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
});
