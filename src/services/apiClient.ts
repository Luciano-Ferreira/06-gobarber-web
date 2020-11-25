import axios from 'axios';
import { Console } from 'console';
console.log(process.env.REACT_APP_API_URL)
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default api;
