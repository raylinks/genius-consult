import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2'
import CKEditor from '@ckeditor/ckeditor5-vue'

import '@/assets/css/tailwind.css'
import '@/assets/css/custom.css'

Vue.config.productionTip = false

Vue.use(VueSweetalert2)

Vue.use(CKEditor)

import Default from '@/layout/Default'
Vue.component('default-layout', Default)

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app')
