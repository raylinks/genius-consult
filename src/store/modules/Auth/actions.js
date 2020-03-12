import { getAccess } from '@/api/auth'

const actions = {
  AUTHENTICATE_USER: ({ commit }, payload) => {
    /**
     * @function getAccess
     * @params {Object} payload
     * @returns {JSON} response
     */
    getAccess(payload).then(data => {
      // storing the main data of the api response in responseData to avoid repetition of data.data... on multiple lines
      const responseData = data.data.data

      // mutating the state 'token' using the SET_TOKEN mutation and response from the api
      commit('SET_TOKEN', responseData.token)
      localStorage.setItem('token', responseData.token)
      commit('SET_USER', responseData.data)
    })
  }
}

export default actions
