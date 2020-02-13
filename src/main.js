import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

const Default = () => import('./components/layouts/Default.vue')

Vue.component('default-layout', Default)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
