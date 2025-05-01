import axios from "axios";

export const axiosClient = axios.create({
  baseURL: 'http://portafolio.test/api/',
  timeout: 10000,
  withCredentials:true,
  headers: {
    "Content-Type": "application/json",
  },
});