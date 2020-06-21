export default [
    {
        path: '/',
        name: 'HomePage',
        meta: {
            admin: false,
            requiresAuth: false,
        },
        component: () => import('@/views'),
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            requiresAuth: false,
            admin: false,
        },
        component: () => import('@/views/Auth/Login'),
    },
    {
        path: '/reset-password',
        name: 'reset-password',
        meta: {
            requiresAuth: false,
            admin: false,
        },
        component: () => import('@/views/Auth/ResetPassword'),
    },
    {
        path: '/register',
        name: 'Register',
        meta: {
            admin: false,
            requiresAuth: false,
        },
        component: () => import('@/views/Auth/Register'),
    },
    {
        path: '/verify',
        name: 'Verify',
        meta: {
            admin: false,
            requiresAuth: false,
        },
        component: () => import('@/views/Auth/Verify'),
    },
    {
        path: '/forgot-password',
        name: 'forgot-password',
        meta: {
            admin: false,
            requiresAuth: false,
        },
        component: () => import('@/views/Auth/ForgotPassword'),
    },
    {
        path: '/resume',
        name: 'Resume',
        meta: {
            admin: false,
            requiresAuth: true,
        },
        component: () => import('@/views/Resume'),
    },
    {
        path: '/blog',
        name: 'Blog',
        meta: {
            admin: false,
            requiresAuth: false,
        },
        component: () => import('@/views/Blog'),
    },
    {
        path: '/blog/:id',
        name: 'Blog Post',
        meta: {
            admin: false,
            requiresAuth: false,
        },
        component: () => import('@/views/Blog/Post'),
    },
    {
        path: '/admin/blog',
        name: 'Blog Posts',
        meta: {
            admin: true,
            requiresAuth: true,
        },
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
        meta: {
            admin: true,
            requiresAuth: true,
        },
        component: () => import('@/views/Blog/Create'),
    },
     {
        path: '/recruitment',
        name: 'Craete recruitment',
        meta: {
            admin: false,
            requiresAuth: false,
        },
        component: () => import('@/views/Recruitment/Create'),
    },

    {
        path: '/jobs',
        name: 'View Jobs',
        meta: {
            admin: false,
            requiresAuth: false,
        },
        component: () => import('@/views/Jobs/index'),
    },

    {
        path: '/jobs/create',
        name: 'Create Job',
        meta: {
            admin: false,
            requiresAuth: false,
        },
        component: () => import('@/views/Jobs/Create'),
    },
    {
        path: '/recruitment/create',
        name: 'Create Job',
        meta: {
            admin: false,
            requiresAuth: false,
        },
        component: () => import('@/views/Recruitment/Create'),
    },

    {
        path: '/admin/jobs',
        name: 'Admin Job page',
        meta: {
            admin: true,
            requiresAuth: true,
        },
        component: () => import('@/views/Jobs/Admin'),
    },
    {
        path: '/admin',
        name: 'Admin Home page',
        meta: {
            admin: false,
            requiresAuth: true,
        },
        component: () => import('@/views/Admin'),
    },
    // {
    //     path: '/admin/recruitment',
    //     name: 'Admin Recruitment page',
    //     meta: {
    //         admin: true,
    //         requiresAuth: true
    //     },
    //     component: () => import('@/views/recruitment/Admin')
    // }
    // {
    //     path: '/admin/recruitment/create',
    //     name: 'Admin Recruitment page',
    //     meta: {
    //         admin: true,
    //         requiresAuth: true
    //     },
    //     component: () => import('@/views/recruitment/create')
    // }
    // {
    //     path: '/admin/recruitment/update',
    //     name: 'Admin Recruitment page',
    //     meta: {
    //         admin: true,
    //         requiresAuth: true
    //     },
    //     component: () => import('@/views/recruitment/process')
    // }

]
