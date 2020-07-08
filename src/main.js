import Vue from 'vue'
import App from './App.vue'
// 引入路由器
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,//配置路由器，所有属性都可以通过$router属性得到路由器
}).$mount('#app')
