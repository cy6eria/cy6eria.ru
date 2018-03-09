import axios from 'axios';

const baseURL = process.env.npm_config_base_url || 'http://localhost:5100';

export const request = axios.create({ baseURL });
