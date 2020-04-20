const mutations = {
  SET_PERSONAL_DETAILS: (state, payload) => {
    window.localStorage.setItem('personal_questions', JSON.stringify(payload))
    state.personal_details = payload
  },

  SET_MESSAGE: (state, payload) => {
    console.log(payload.category)
    state.message[payload.category] = payload
  },

  SET_QUESTIONS: (state, payload) => {
    window.localStorage.setItem('questions', JSON.stringify(payload))
    state.questions = payload
  },

  SET_EXPERIENCE_QUESTIONS: (state, payload) => {
    state.experience_questions.push(payload)
    localStorage.setItem(
      'experience_questions',
      JSON.stringify(state.experience_questions)
    )
  }
}

export default mutations
