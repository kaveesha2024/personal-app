import axios from 'axios';
import Cookies from 'js-cookie';
const API_URL = 'http://localhost:8000';
const axiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    timeout: 10000,
});
axiosInstance.interceptors.request.use(
    config => {
        const token: string | undefined = Cookies.get('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error),
);
export default axiosInstance;
