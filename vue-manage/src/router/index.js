import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


// 公共路由
export const constantRoutes = [
    {
        path: '/',
        name: 'Main',
        component: (resolve) => require(['@/views/Main'], resolve),
        children: [
            // {
            //     path: '/home',
            //     name: 'home',
            //     component: () => import('@/views/home')
            // },
            // {
            //     path: '/user',
            //     name: 'user',
            //     component: () => import('@/views/user')
            // },
            // {
            //     path: '/mall',
            //     name: 'mall',
            //     component: () => import('@/views/mall')
            // },
            // {
            //     path: '/page1',
            //     name: 'page1',
            //     component: () => import('@/views/other/pageOne')
            // },
            // {
            //     path: '/page2',
            //     name: 'page2',
            //     component: () => import('@/views/other/pageTwo')
            // },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/login')
    },

]


export default new Router({
    mode: 'history', // 去掉url中的#
    // scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})