const mutations = {
  SET_PERSONAL_DETAILS: (state, payload) => {
    window.localStorage.setItem('personal_questions', JSON.stringify(payload))
    state.personal_details = payload
  },

  SET_MESSAGE: (state, payload) => {
    state.message = payload
  }
}

export default mutations
