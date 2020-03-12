import { getAccess, forgotPassword } from '@/api/auth'

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
  },

  FORGOT_PASSWORD: ({ commit }, payload) => {
    forgotPassword(payload).then(data => {
      // this commit is to open a modal to notify user to check their email to reset their password
      commit('SET_FORGOT_PASSWORD_STATUS', true)

      // this commit is to update the message the user sees upon trying to reset their password
      commit('SET_FORGOT_PASSWORD_MESSAGE', data.data.message)
    })
  }
}

export default actions
