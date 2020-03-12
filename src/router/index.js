import Vue from 'vue'
import Router from 'vue-router'
import paths from './paths'

Vue.use(Router)

const router = new Router({
  base: '/',
  mode: 'history',
  routes: paths
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (localStorage.getItem('token') == null) {
      next({ name: 'Login' })
    } else {
      next()
    }
  } else {
    next()
  }
  next()
})

export default router
