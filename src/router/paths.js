export default [
    {
        path: '/',
        name: 'HomePage',
        component: () => import('@/views'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Auth/Login'),
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('@/views/Auth/Register'),
    },
    {
        path: '/verify',
        name: 'Verify',
        component: () => import('@/views/Auth/Verify'),
    },
    {
        path: '/forgot-password',
        name: 'forgot-password',
        component: () => import('@/views/Auth/ForgotPassword'),
    },
]
