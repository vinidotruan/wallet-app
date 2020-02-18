import axios from 'axios';

let baseURL = '';
if (window.location.hostname === 'localhost') {
  baseURL = 'http://localhost:3333/';
} else {
  baseURL = 'https://quero-investir-api.herokuapp.com/';
}

const api = axios.create({
  baseURL
});

export default api;
