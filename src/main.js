import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// imports for browser and OS supports
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import '@babel/polyfill'

// injecting bootstrap vue into app
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

const Default = () => import('./components/layouts/Default.vue')
const Landing = () => import('./components/layouts/Landing.vue')
const Authenticated = () => import('./components/layouts/Authenticated.vue')
const AuthenticatedWithSideBar = () =>
  import('./components/layouts/AuthenticatedWithSideBar.vue')

Vue.component('default-layout', Default)
Vue.component('landing-layout', Landing)
Vue.component('authenticated-layout', Authenticated)
Vue.component('authenticatedWithSideBar-layout', AuthenticatedWithSideBar)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
