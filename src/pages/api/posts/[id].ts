import { ObjectID } from 'mongodb';
import { connecToDatabase } from '../_connecToDatabase';

export default (req, res) => {
  const { id } = req.query;
  
  connecToDatabase().then((client) => {
    const db = client.db(process.env.DB_NAME);
    const collection = db.collection('posts');

      collection.find({ _id: new ObjectID(id) }).toArray((err, posts) => {
        if (err) {
          res.status(500).json({
            message: 'Не удалось получить запись.'
          });
        } else if (posts[0]) {
          res.status(200).json(posts[0]);
        } else {
          res.status(404).json({
            message: 'Не удалось найти запись.',
          });
        }
      });
  }).catch((err) => res.status(500).json({
    message: 'Не удалось подключиться к базе данных.',
    err,
  }))
};
