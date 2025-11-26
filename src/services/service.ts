import axios, {type AxiosInstance } from 'axios';

const baseUrl = import.meta.env.VITE_API_BASE_URL;

const apiUrl = `${baseUrl}?q=created:>2024-07-15&sort=stars&order=desc`;

const api: AxiosInstance = axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-Type': 'application/json'
    }
});


export default api;