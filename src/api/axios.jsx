import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000/api';

const api = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
  },
});

export default api;