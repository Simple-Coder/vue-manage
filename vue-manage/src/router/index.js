import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


// 公共路由
export const constantRoutes = [
    {
        path: '/',
        name: 'Home',
        component: (resolve) => require(['@/views/Home'], resolve),
    },
    {
        path: '/user',
        name: 'User',
        component: (resolve) => require(['@/views/User'], resolve),
    }
]


export default new Router({
    mode: 'history', // 去掉url中的#
    // scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})