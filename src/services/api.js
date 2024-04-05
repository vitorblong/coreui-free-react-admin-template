import axios from "axios";

const api = axios.create({
  baseURL: "https://api.blongtech.com/",
});

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjoxLCJlbWFpbCI6InZpdG9yQGFiYmludC5uZXQiLCJpYXQiOjE3MTIzNTM3MTMsImV4cCI6MTcxMjM1NzMxM30.goXWPqGI3Dtr6QiRXNAQAxIm-_Y8fTVBGGTr-_Eekaw';

if (token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}


export default api;