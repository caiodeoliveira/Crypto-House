import axios from "axios";

const api = axios.create({
  baseURL: "https://api.crypto.com",
});

export default api;
