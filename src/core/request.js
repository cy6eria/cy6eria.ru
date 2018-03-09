import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production' ? 'https://cy6eria.ru' : 'http://localhost:5100';

export const request = axios.create({ baseURL });
