import axios from "axios";

const api = axios.create({
  baseURL: "https://api.blongtech.com/",
});

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjoxLCJlbWFpbCI6InZpdG9yQGFiYmludC5uZXQiLCJpYXQiOjE3NDk4NDIyMTMsImV4cCI6MTc0OTg0NTgxM30.TZW2YAtzAoS-FVaBo7DIBz-P7xJ4YewTtKrjydKYESw';

if (token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}


export default api;