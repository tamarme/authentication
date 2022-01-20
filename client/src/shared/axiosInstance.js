import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001/api/v1',
    headers: {
        post: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    }
});

axiosInstance.interceptors.response.use(
    response => response,
    async (error) => {
        if (error.response.status === 401) {
            if (window.location.href.indexOf("/login") === -1) { window.location = "/login" }
        } else {
            console.log(error);
            return Promise.reject(error);
        }
    }
)

export default axiosInstance;