import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/css/tailwind.css'

Vue.config.productionTip = false

import Default from '@/layout/Default'
Vue.component('default-layout', Default)

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app')
