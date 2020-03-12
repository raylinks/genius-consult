import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const initialState = {
  token: localStorage.getItem('token') || '',
  user: {},
  forgot_password_message: '',
  forgot_password_status: false
}

export default {
  namespaced: true,
  state: { ...initialState },
  actions,
  getters,
  mutations
}
