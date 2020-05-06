import http from '@/utils/http'

export const login = async (form) => {
    const data = await http.post('/login', { email: form.email, password: form.password })
    return data
}

export const register = async (form) => {
    const data = await http.post('/register/user', { email: form.email, password: form.password })
    return data
}
