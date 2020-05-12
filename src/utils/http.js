import axios from 'axios'

// This is the base URL where requests comes from
const http = axios.create({
    baseURL: process.env.VUE_APP_API_URL + '/api',
    proxyHeaders: false,
    credentials: false,
    timeout: 90000,
})

http.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token') || ''
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        Promise.reject(error)
    }
)

http.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default http
