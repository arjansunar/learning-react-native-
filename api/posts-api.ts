import axios from 'axios';
const APP_URL = 'https://jsonplaceholder.typicode.com/';

export const postApi = axios.create({
  baseURL: `${APP_URL}`,
});
