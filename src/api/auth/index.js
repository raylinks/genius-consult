/* eslint-disable space-before-function-paren */
import http from '@/utils/http'

async function registerUser(userData) {
  const user = await http.post('/api/register/user', userData)
  return user
}

async function getAccess(userData) {
  const user = await http.post('/api/login', userData)
  return user
}

export { registerUser, getAccess }
