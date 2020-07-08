// 路由器对象，注册路由
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

// 声明使用vue插件
Vue.use(VueRouter)


// 1.保存原本的push函数
const originPush = VueRouter.prototype.push
const originReplace=VueRouter.prototype.replace
// 给原型对象重新定义新的push方法
VueRouter.prototype.push=function (location, onComplete, onAbort) {
  // 1.如果没有指定回调函数，需要调用原本的push()后catch()来处理错误的promise
  if (!onComplete && !onAbort) {
    // call指定this
   return originPush.call(this,location).catch(error=>{
    console.log('---push', error.message)
    })
  }else{
    // 2.如果传入了回调函数，本身没有问题，直接调用原本的push()就可以
    originPush.call(this,location, onComplete, onAbort)
  }
}

VueRouter.prototype.replace = function (location, onComplete, onAbort) {

  if (!onComplete && !onAbort) {
    return originReplace.call(this, location).catch(error => {
      console.log('---replace', error.message)
    })
  } else {
    originReplace.call(this, location, onComplete, onAbort)
  }
}

// 向外暴露(默认暴露)
export default new VueRouter({
  mode:'history',//不带#号的模式
  routes,
})