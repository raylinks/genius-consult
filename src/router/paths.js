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
    path: '/',
    name: 'Register',
    meta: {
      layout: 'default'
    },
    component: () => import('@/views/Auth/Register')
  }
]
