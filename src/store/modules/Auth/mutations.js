const mutations = {
  SET_TOKEN: (state, payload) => {
    state.token = payload
  },

  SET_USER: (state, payload) => {
    state.user = payload
  },

  SET_FORGOT_PASSWORD_MESSAGE: (state, payload) => {
    state.forgot_password_message = payload
  },

  SET_FORGOT_PASSWORD_STATUS: (state, payload) => {
    state.forgot_password_status = payload
  }
}

export default mutations
