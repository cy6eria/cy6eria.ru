import axios from 'axios';

export const getFromDatabase = (method, requestData = {}) => {
  return axios.post(`https://data.mongodb-api.com/app/data-ujnru/endpoint/data/v1/action/${method}`, {
      collection: "posts",
      database: process.env.MONGO_DATA_DB_NAME,
      dataSource: process.env.MONGO_DATA_DB_SOURCE,
      ...requestData,
    }, {
      headers: {
        'Access-Control-Request-Headers': '*',
        'api-key': process.env.MONGO_DATA_API_KEY,
      },
      responseType: 'json',
    });
}
