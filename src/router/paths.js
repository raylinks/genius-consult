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
    path: '/forgotpassword',
    name: 'Forgot Password',
    meta: {
      layout: 'default'
    },
    component: () => import('@/views/Auth/ForgotPassword')
  },

  {
    path: '/resetpassword',
    name: 'Reset Password',
    meta: {
      layout: 'default'
    },
    component: () => import('@/views/Auth/ResetPassword')
  },

  {
    path: '/dashboard',
    name: 'Dashboard',
    meta: {
      layout: 'authenticated',
      requiresAuth: true
    },
    component: () => import('@/views/Dashboard')
  },
  {
    path: '/resume/create/:step',
    name: 'Resume',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/Resumes')
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
