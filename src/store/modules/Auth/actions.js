import { getAccess } from '@/api/auth'

const actions = {
  AUTHENTICATE_USER: ({ commit }, payload) => {
    getAccess(payload).then(data => {
      commit('SET_TOKEN', payload)
    })
  }
}

export default actions
