import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/Auth'
import Resume from './modules/Resume'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Auth,
    Resume
  }
})
