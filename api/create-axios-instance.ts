import axios from 'axios';

export const instance = (APP_URL: string) =>
  axios.create({
    baseURL: `${APP_URL}`,
  });
