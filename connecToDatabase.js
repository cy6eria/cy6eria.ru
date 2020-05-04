const MongoClient = require('mongodb').MongoClient;

const { dbuser, dbpassword, dbhost, dbport, dbname } = require('./serverConfig');

const connectionString = `mongodb://${dbuser}:${dbpassword}@${dbhost}:${dbport}`;
const client = new MongoClient(connectionString);

module.exports = () => new Promise((resolve, reject) => {
  client.connect((err) => {
    if (err) {
      reject(err);
    } else {
      console.log(`> The connection to database is successfully established 🔥`);
      resolve(client);
    }
  });
});
