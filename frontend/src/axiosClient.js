import axios from "axios";

const axiosCLient = axios.create({
  baseURL: import.meta.env.VITE_APP_API,
  withCredentials: true,
});

export default axiosCLient;
