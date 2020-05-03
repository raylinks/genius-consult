import axios from 'axios'

// This is the base URL where requests comes from
const http = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    proxyHeaders: false,
    credentials: false,
    timeout: 90000,
})

export default http
