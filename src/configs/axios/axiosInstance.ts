import axios, { AxiosInstance, AxiosResponse } from "axios";


export const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://api.example.com",
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
