import axios from "axios";

export const axiosClient = axios.create({
  baseURL: 'http://localhost:8081/folio-api/',
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});