import { MongoClient } from 'mongodb';

const connectionString = `${process.env.DB_CONNECTION_FORMAT}://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}`;
const client = new MongoClient(connectionString);

export const connecToDatabase = () => new Promise((resolve, reject) => {
  client.connect((err) => {
    if (err) {
      reject(connectionString);
    } else {
      console.log(`The connection to database is successfully established 🔥`);
      resolve(client);
    }
  });
});
