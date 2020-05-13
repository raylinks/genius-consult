import http from '@/utils/http'

const pay = async (amount) => {
    const data = http.post(`/redirection`, { flutter_redirect_callback: process.env.VUE_APP_URL, amount: amount })
    return data
}

export { pay }
