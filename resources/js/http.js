import axios from 'axios';
import router from './router';

const baseURL = process.env.APP_URL + '/api';
const http = axios.create({
    baseURL: baseURL,
});

http.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export default http;
