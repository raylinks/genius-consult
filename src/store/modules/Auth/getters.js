const getters = {
  getToken: state => state.token,
  getUser: state => state.user,
  GET_FORGOT_PASSWORD_MESSAGE: state => state.forgot_password_message,
  GET_FORGOT_PASSWORD_STATUS: state => state.forgot_password_status,
  LOADING_STATUS: state => state.loading_status,
  ERROR_MESSAGE: state => state.error_message
}

export default getters
