import axios from 'axios'

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 6000,
  proxyHeaders: false,
  credentials: false
})

http.interceptors.request.use(
  config => {
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
