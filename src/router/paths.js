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
]
