import { getFromDatabase } from '../../_getFromDatabase';

export default async (req, res) => {
  try {
    const { status, data} = await getFromDatabase('find');

    res.status(status).send(data.documents);
  } catch (err) {
    res.status(500).json({
      message: 'Не удалось подключиться к базе данных.',
      err,
    });
  }
};
