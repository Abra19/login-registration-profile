import axios from 'axios';

const axiosInstance = axios.create({

  baseURL: 'https://login-registration-profile-api.onrender.com' || process.env.URL,
});

export default axiosInstance;
