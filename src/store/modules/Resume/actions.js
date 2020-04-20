import {
  submitPersonalQuestions,
  submitExperienceQuestions
} from '@/api/resume'

const actions = {
  SAVE_PERSONAL_DETAILS: ({ commit }, payload) => {
    submitPersonalQuestions(payload)
      .then(data => {
        commit('SET_PERSONAL_DETAILS', payload)
        commit('SET_MESSAGE', {
          type: 'Success',
          note: 'Personal info has been submitted successfully',
          category: 'personal'
        })
      })
      .catch(err => {
        commit('SET_MESSAGE', {
          type: 'Error',
          note: err.response.data.message,
          category: 'personal'
        })
      })
  },

  SAVE_QUESTIONS: ({ commit }, payload) => {
    commit('SET_QUESTIONS', payload)
  },

  SAVE_EXPERIENCE_QUESTIONS: ({ commit }, payload) => {
    submitExperienceQuestions(payload)
      .then(data => {
        commit('SET_EXPERIENCE_QUESTIONS', payload)
        commit('SET_MESSAGE', {
          type: 'Success',
          note: data.data.message,
          category: 'experience'
        })
      })
      .catch(err => {
        console.log(err)
        commit('SET_MESSAGE', {
          type: 'Error',
          note: err.response.data.message,
          category: 'experience'
        })
      })
  }
}

export default actions
