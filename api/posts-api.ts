import {instance} from './create-axios-instance';
const APP_URL = 'https://jsonplaceholder.typicode.com/';

export const postApi = instance(APP_URL);
