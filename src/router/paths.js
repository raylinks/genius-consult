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
  }
]
