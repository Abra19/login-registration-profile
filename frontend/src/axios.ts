import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.RENDER_EXTERNAL_URL || process.env.URL,
});

export default axiosInstance;
