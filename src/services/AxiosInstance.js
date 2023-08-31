import axios from 'axios';
import APIConfig from '../config/api.config';

const axiosInstance = axios.create({
    baseURL: APIConfig.SELECTED_ENVIRONMENT.backendUrl,
    timeout: 1000,
    headers: {
      'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
    console.log(token);
      const fixedToken = token.replace(/"/g, '');
      config.headers['Authorization'] = `Bearer ${fixedToken}`;
    }
    console.log(config.headers);
    return config;
});
export default axiosInstance;
