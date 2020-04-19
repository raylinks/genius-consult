import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const initialState = {
  personal_questions:
    JSON.parse(localStorage.getItem('personal_questions')) || {},
  message: {}
}

export default {
  namespaced: true,
  state: { ...initialState },
  actions,
  getters,
  mutations
}
