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
        name: 'Login',
        component: () => import('@/views/Auth/Register'),
    },
]
