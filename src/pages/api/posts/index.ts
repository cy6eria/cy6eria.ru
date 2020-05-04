import { connecToDatabase } from '../_connecToDatabase';

export default (req, res) => {
  
  connecToDatabase().then((client) => {
    const db = client.db(process.env.DB_NAME);
    const collection = db.collection('posts');

      collection.find({}).toArray((err, posts) => {
        if (err) {
          res.status(500).jcon({
            message: 'Не удалось получить записи.'
          });
        } else {
          res.status(200).json(posts);
        }
      });
  }).catch((err) => res.status(500).json({
    message: 'Не удалось подключиться к базе данных.',
    err,
  }))
};
