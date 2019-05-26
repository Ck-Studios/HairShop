import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: 'http://52.78.142.161:8000/api/',
});
