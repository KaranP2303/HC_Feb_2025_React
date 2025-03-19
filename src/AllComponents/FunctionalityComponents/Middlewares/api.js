import axios from "axios";
import config from "../../../config";

const API = axios.create({
  baseURL: config.API_URL,
});

// Attach token to requests
API.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;
