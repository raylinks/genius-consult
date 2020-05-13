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
    {
        path: '/resume',
        name: 'Resume',
        component: () => import('@/views/Resume'),
    },
    {
        path: '/blog',
        name: 'Blog',
        component: () => import('@/views/Blog'),
    },
    {
        path: '/blog/:id',
        name: 'Blog Post',
        component: () => import('@/views/Blog/Post'),
    },
    {
        path: '/admin/blog',
        name: 'Blog Posts',
        component: () => import('@/views/Blog/AllPosts'),
    },
    // {
    //     path: '/admin/blog/:id',
    //     name: 'Edit Blog Post',
    //     component: () => import('@/views/Blog/AllPosts'),
    // },
    {
        path: '/admin/blog/create',
        name: 'Create Blog Post',
        component: () => import('@/views/Blog/Create'),
    },
]
