import axios from 'axios';

let baseURL = '';
if (window.location.hostname === 'locahost') {
  baseURL = 'http://localhost:3333/';
} else {
  baseURL = 'https://quero-investir-api.herokuapp.com/';
}

const api = axios.create({
  baseURL
});

export default api;
