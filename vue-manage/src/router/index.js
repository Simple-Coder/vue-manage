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
            {
                path: 'home',
                name: 'home',
                component: (resolve) => require(['@/views/home'], resolve),
            },
            {
                path: 'user',
                name: 'user',
                component: (resolve) => require(['@/views/user'], resolve),
            }
        ]
    },

]


export default new Router({
    mode: 'history', // 去掉url中的#
    // scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})