import axios from 'axios'

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL + '/api',
  timeout: 6000,
  proxyHeaders: false,
  credentials: false
})

http.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token') || ''
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)

http.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default http
