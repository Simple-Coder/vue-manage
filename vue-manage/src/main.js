import Vue from 'vue'
import App from './App.vue'
// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//引入vue-router
import router from '@/router'

Vue.config.productionTip = false
// 使用element-ui生效
Vue.use(ElementUI);

// 使用less样式文件
import '@/assets/less/index.less'
//store 
import store from '@/store'
// axios
import http from 'axios'

//mock
import '@/api/mock'

Vue.prototype.$http = http
// Vue.prototype.$confirm = MessageBox.confirm
// Vue.prototype.$message = Message


// 路由守卫逻辑
router.beforeEach((to, from, next) => {
  // store.commit('clearToken')
  store.commit('getToken')
  const token = store.state.user.token
  console.log('@token', token)
  if (!token && to.name !== 'login') {
    next({ name: 'login' })
  } else if (token && to.name === 'login') {
    next({ name: 'home' })
  } else {
    next()
  }
})


new Vue({
  store,
  router,
  render: h => h(App),
  created() {
    store.commit('addMenu', router)
  },
}).$mount('#app')
