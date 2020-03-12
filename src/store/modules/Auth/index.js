import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const initialState = {
  token: localStorage.getItem('token') || '',
  user: {}
}

export default {
  namespaced: true,
  state: { ...initialState },
  actions,
  getters,
  mutations
}
