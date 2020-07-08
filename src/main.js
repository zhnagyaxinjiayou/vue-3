import Vue from 'vue'
import App from './App.vue'
// 引入路由器
import router from './router'
import TypeNav from './components/TypeNav'


// 全局注册组件(所有的组件都可以用)
Vue.component('TypeNav',TypeNav)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,//配置路由器，所有属性都可以通过$router属性得到路由器
}).$mount('#app')
