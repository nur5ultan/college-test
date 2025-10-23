import axios from "axios";

const API_BASE = process.env.REACT_APP_API_URL || "http://127.0.0.1:8000/api";

const api = axios.create({
    baseURL: API_BASE,
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.response.use(
    (res) => res,
    (err) => {
        console.error("API Error:", err.response || err.message);
        return Promise.reject(err);
    }
);

// add request interceptor to include Authorization header when token exists
api.interceptors.request.use((config) => {
    try {
        const token = typeof window !== 'undefined' && localStorage.getItem('auth_token');
        if (token) {
            config.headers = config.headers || {};
            config.headers['Authorization'] = `Bearer ${token}`;
        }
    } catch (e) {
        // ignore
    }
    return config;
}, (error) => Promise.reject(error));

export default api;
