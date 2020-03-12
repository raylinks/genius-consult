/* eslint-disable space-before-function-paren */
import http from '@/utils/http'

async function registerUser(userData) {
  const user = await http.post('/register/user', userData)
  return user
}

async function getAccess(userData) {
  const user = await http.post('/login', userData)
  return user
}

async function forgotPassword(email) {
  const response = await http.post('forgotpassword', { email: email })
  return response
}

export { registerUser, getAccess, forgotPassword }
