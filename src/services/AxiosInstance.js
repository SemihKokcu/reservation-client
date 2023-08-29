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
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  });

export default axiosInstance;
