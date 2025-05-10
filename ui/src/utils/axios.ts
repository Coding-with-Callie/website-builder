import axios from "axios";

export const axiosCustom = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true,
});
