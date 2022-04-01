import {instance} from './create-axios-instance';

const APP_URL = 'https://randomuser.me/api/';
export const randomPersonApi = instance(APP_URL);
