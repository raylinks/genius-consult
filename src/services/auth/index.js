import http from '@/utils/http'

export const login = async (form) => {
    const data = await http.post('/login', { email: form.email, password: form.password })
    return data
}

export const register = async (form) => {
    const data = await http.post('/register/user', { email: form.email, password: form.password, name: form.name })
    return data
}

export const forgotPassword = async (email) => {
    const data = await http.post('/forgotpassword', { email })
    return data
}

export const resetPassword = async (form) => {
    const data = await http.post('/resetpassword', { password: form.password, token: form.token })
    return data
}
