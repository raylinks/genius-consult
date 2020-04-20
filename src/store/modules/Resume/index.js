import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const initialState = {
  personal_questions:
    JSON.parse(localStorage.getItem('personal_questions')) || {},
  message: {
    personal: {},
    experience: {},
    education: {},
    skills: {},
    awards: {},
    certificate: {},
    reference: {}
  },
  questions: JSON.parse(localStorage.getItem('questions')) || [],
  experience_questions:
    JSON.parse(localStorage.getItem('experience_questions')) || [],
  skills: JSON.parse(localStorage.getItem('skills')) || [],
  reference: JSON.parse(localStorage.getItem('reference')) || [],
  certificate: JSON.parse(localStorage.getItem('certificate')) || []
}

export default {
  namespaced: true,
  state: { ...initialState },
  actions,
  getters,
  mutations
}
