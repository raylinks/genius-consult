/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Router from 'vue-router'
import paths from './paths'

Vue.use(Router)
const router = new Router({
    base: '/',
    mode: 'history',
    routes: paths,
})

const user = JSON.parse(localStorage.getItem('user')) || ''
const isAdmin = user ? user.roles[0].name === 'admin' : false
const roleExcludedRoutes = ['Login', 'Register', 'forgot-password', 'HomePage']

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        if (localStorage.getItem('user') !== null) {
            // checks if route is restricted by role
            if (!roleExcludedRoutes.includes(to.name)) {
                // check if the route is an admin only route
                if (isAdmin) {
                    console.log(isAdmin)
                    // check if user is an admin
                    if (to.meta.admin) {
                        next()
                    } else {
                        next({ name: 'HomePage' })
                    }
                } else {
                    next()
                }
            } else {
                next()
            }
        } else {
            next({ name: 'Login' })
        }
    } else {
        next()
    }
})

export default router
