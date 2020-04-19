import { submitPersonalQuestions } from '@/api/resume'

const actions = {
  SAVE_PERSONAL_DETAILS: ({ commit }, payload) => {
    submitPersonalQuestions(payload)
      .then(data => {
        commit('SET_PERSONAL_DETAILS', payload)
        commit('SET_MESSAGE', {
          type: 'Success',
          note: 'Personal info has been submitted successfully'
        })
      })
      .catch(err => {
        commit('SET_MESSAGE', {
          type: 'Success',
          note: err.response.data.message
        })
      })
  }
}

export default actions
