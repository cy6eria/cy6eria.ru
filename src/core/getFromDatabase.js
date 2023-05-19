export async function getFromDatabase (method, requestData = {}) {
  const res = await fetch(`https://data.mongodb-api.com/app/data-ujnru/endpoint/data/v1/action/${method}`, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': process.env.MONGO_DATA_API_KEY,
    },
    body: JSON.stringify({
      collection: "posts",
      database: process.env.MONGO_DATA_DB_NAME,
      dataSource: process.env.MONGO_DATA_DB_SOURCE,
      ...requestData,
    }),
    method: 'POST',
    next: {
      revalidate: 0,
    },
  });

  const data = await res.json();

  return data;
}
