export default [
  {
    path: '/u',
    name: 'underConstruction',
    meta: {
      layout: 'default'
    },
    component: () => import('@/views/Home')
  },
  {
    path: '/register',
    name: 'Register',
    meta: {
      layout: 'default'
    },
    component: () => import('@/views/Auth/Register')
  },

  {
    path: '/login',
    name: 'Login',
    meta: {
      layout: 'default'
    },
    component: () => import('@/views/Auth/Login')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    meta: {
      layout: 'default'
    },
    component: () => import('@/views/Dashboard')
  },
  {
    path: '/',
    name: 'Landing Page',
    meta: {
      layout: 'landing'
    },
    component: () => import('@/views/Landing/Home')
  }
]
