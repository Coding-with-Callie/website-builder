import axios from "axios";

export const axiosPrivate = axios.create({
  baseURL: "http://localhost:8080/auth",
  withCredentials: true,
});

export const axiosPublic = axios.create({
  baseURL: "http://localhost:8080",
});
