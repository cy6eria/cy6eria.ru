import { getFromDatabase } from '../../_getFromDatabase';

export default async (req, res) => {
  const { id } = req.query;

  try {
    const { status, data } = await getFromDatabase('findOne', {
      projection: {_id: id}
    });

    res.status(status).send(data.document);
  } catch (err) {
    res.status(500).json({
      message: 'Не удалось подключиться к базе данных.',
      err,
    });
  }
};
