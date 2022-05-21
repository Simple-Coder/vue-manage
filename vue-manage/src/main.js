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





new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
