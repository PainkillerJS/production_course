import axios from 'axios';

import { getUsetFromLocalStorage } from '../lib/storage/user';

const baseURL = __IS_DEV__ ? 'http://localhost:8000' : 'https://example.ru';

export const $api = axios.create({
  baseURL
});

$api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization = getUsetFromLocalStorage();
  }

  return config;
});
