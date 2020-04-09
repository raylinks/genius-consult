import { getAccess, forgotPassword } from '@/api/auth'
import router from '@/router'

const actions = {
  AUTHENTICATE_USER: ({ commit }, payload) => {
    /**
     * @function getAccess
     * @params {Object} payload
     * @returns {JSON} response
     */

    commit('SET_LOADING_STATUS', true)
    getAccess(payload)
      .then(data => {
        // storing the main data of the api response in responseData to avoid repetition of data.data... on multiple lines
        const responseData = data.data.data
        router.push('/dashboard')
        // mutating the state 'token' using the SET_TOKEN mutation and response from the api
        commit('SET_TOKEN', responseData.token)
        localStorage.setItem('token', responseData.token)
        commit('SET_USER', responseData.data)
        commit('SET_LOADING_STATUS', false)
      })
      .catch(err => {
        commit('SET_LOADING_STATUS', false)
        commit('SET_ERROR_MESSAGE', err.response.data.message)
        setTimeout(() => {
          commit('SET_ERROR_MESSAGE', '')
        }, 700)
      })
  },

  FORGOT_PASSWORD: ({ commit }, payload) => {
    forgotPassword(payload).then(data => {
      // this commit is to open a modal to notify user to check their email to reset their password
      commit('SET_FORGOT_PASSWORD_STATUS', true)

      // this commit is to update the message the user sees upon trying to reset their password
      commit('SET_FORGOT_PASSWORD_MESSAGE', data.data.message)
    })
  },

  ADD_USER: ({ commit }, payload) => {
    commit('SET_USER', payload)
  }
}

export default actions
