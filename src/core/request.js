import axios from 'axios';

const baseURL = typeof window === 'undefined' ? `http://localhost:${process.env.port}` : location.origin;

export const request = axios.create({ baseURL });
