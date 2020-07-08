// 路由器对象，注册路由
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

// 声明使用vue插件
Vue.use(VueRouter)

// 向外暴露(默认暴露)
export default new VueRouter({
  mode:'history',//不带#号的模式
  routes,
})