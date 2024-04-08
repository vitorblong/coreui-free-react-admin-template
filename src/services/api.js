import axios from "axios";

const api = axios.create({
  baseURL: "https://api.blongtech.com/",
});

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjoxLCJlbWFpbCI6InZpdG9yQGFiYmludC5uZXQiLCJpYXQiOjE3MTI2MDM0OTcsImV4cCI6MTcxMjYwNzA5N30.FufGrhx3YwOG2mEOWcggcyWYG91EzgSKJEhQSvzX_c4';

if (token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}


export default api;