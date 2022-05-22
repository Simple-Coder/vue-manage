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
Vue.prototype.$http = http


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
