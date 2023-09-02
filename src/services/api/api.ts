import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fakestoreapi.com',
  timeout: 10000,
  headers: {
    'Cache-Control': 'private,no-transform,max-age=0',
    Pragma: 'no-cache',
    Expires: '0',
  },
});

export { api };
