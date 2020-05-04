const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid/v4');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const Sequelize = require('sequelize');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const next = require('next');
const cloudinary = require('cloudinary').v2;
const ObjectID = require('mongodb').ObjectID;

const connectToDatabase = require('./connecToDatabase');
const config = require('./serverConfig.json');

cloudinary.config({ 
    cloud_name: config.cloudName, 
    api_key: config.cloudAPIKey, 
    api_secret: config.cloudAPISecret, 
});

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const PORT = config.port || 3000;

const renderSitemap = require('./renderSitemap');

// const checkAuthentication = (req, res, next) => {
//     const check = req.isAuthenticated();
//     if (check) {
//         next();
//     } else{
//         res.status(401).send({ text: 'Только авторизованные пользователи могут делать это.' });
//     }
// };

// Настраиваем passport
// passport.use(new LocalStrategy((username, password, done) => {
//     Models.User.findOne({ where: { username } }).then(user => {
//         if (!user || user.password !== password) {
//             return done(null, false, { text: 'Неверный логин или пароль.' });
//         }
        
//         return done(null, user);
//     }).catch(err => done(err));
// }));

// passport.serializeUser((user, done) => {
//     done(null, user.id);
// });
  
// passport.deserializeUser((id, done) => {
//     Models.User.findOne({ where: { id } })
//         .then(user => {
//             done(null, user)
//         })
//         .catch(err => done(err));
// });

// Создаем экземпляр сервера.
Promise.all([
  connectToDatabase(),
  app.prepare(),
]).then(([client]) => {
    const server = express();
    const db = client.db(config.dbname);
    
    server.use(express.static('public', {
        index: false
    }));
    server.use(cookieParser());
    // server.use(session({
    //     genid: (req) => uuid(),
    //     store: new FileStore(),
    //     secret: config.secret,
    //     resave: false,
    //     saveUninitialized: true
    // }));
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(bodyParser.json());
    // server.use(passport.initialize());
    // server.use(passport.session());
    
    // CORS
    // server.use(function(req, res, next) {
    //     res.header("Access-Control-Allow-Origin", "*");
    //     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //     next();
    // });

    server.get('/api/posts', (req, res) => {
      const collection = db.collection('posts');

      collection.find({}).toArray((err, posts) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.send(posts);
        }
      });
    });
    
    server.get('/api/posts/:id', (req, res) => {
      const collection = db.collection('posts');

      collection.find({ _id: new ObjectID(req.params.id) }).toArray((err, posts) => {
        if (err) {
          res.status(500).send(err);
        } else {
          if (posts[0]) {
            res.send(posts[0]);
          } else {
            res.status(404).send({
              message: 'Не удалось найти запись.'
            });
          }
        }
      });
    });
    
    server.post('/api/posts', /*checkAuthentication,*/ (req, res) => {
      const { picture, title, intro, post } = req.body;

      const collection = db.collection('posts');
      const timestamp = new Date();

      collection.insertOne({
        picture,
        title,
        intro,
        post,
        createdAt: timestamp,
        updatedAt: timestamp,
      }, (err, result) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.send(result);
        }
      })
    
        // if (!(title || intro || post)) {
        //     res.status(500).send('Необходимо указать заголовок, введение и текст записи.');   
        // } else {
        //     cloudinary.uploader.upload(picture, (error, result) => {
        //         if (error) {
        //             res.status(500).send('Во время загрузки изображения произошла ошибка.');       
        //         } else {
        //             const newPost = Models.Post.build({
        //                 picture: result.url,
        //                 title,
        //                 intro,
        //                 post,    
        //             });
    
        //             newPost.save().then((data) => {
        //                 res.send(data);
        //             }).catch((err) => {
        //                 res.status(500).send(err);
        //             });
        //         }
        //     });
        // }
    });
    
    server.put('/api/posts/:id', /*checkAuthentication*/, (req, res) => {
      const collection = db.collection('posts');
      const { picture, title, intro, post } = req.body;
      const timestamp = new Date();

      const updated = {
        title,
        intro,
        post,
        updatedAt: timestamp,
      };

      // TODO: If image is changed, then upload new image to Cloudinary, delete the old one and rewrite the image url.

      collection.updateOne(
        { _id: new ObjectID(req.params.id) },
        { $set: updated },
        (err, post) => {
          if (err) {
            res.status(500).send(err);
          } else {
            res.send(post);
          }
        }
      );
    });
    
    // server.post('/api/login', passport.authenticate('local'), (req, res) => {
    //     if (!req.user) {
    //         res.status(401).send({});
    //     } else {
    //         res.send({
    //             text: 'Вы вошли!'
    //         });
    //     }
    // });
    
    server.get('/sitemap.xml', (req, res) => {
      const collection = db.collection('posts');

      collection.find({}).toArray((err, posts) => {
        renderSitemap(err ? [] : posts).then((data) => {
          res.set('Content-Type', 'text/xml');
          res.send(data);
        })
      });
    });

    // server.get('/posts/:id', (req, res) => {
    //     const actualPage = '/posts';
    //     const queryParams = { id: req.params.id };
    //     app.render(req, res, actualPage, queryParams);
    // });

    server.get('*', (req, res) => handle(req, res));
        
    server.listen(PORT, err => {
        if (err) {
          throw err;
          client.close();
        }
        console.log(`> The server is launched on http://localhost:${PORT} 🚀`)
    });
}).catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
});
