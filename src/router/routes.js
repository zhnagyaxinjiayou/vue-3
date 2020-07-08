// 应用所有的路由配置文件

// 1.引入路由组件
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Search from '../pages/Search'

export default [
  {
    path:'/',
    component:Home
  },
  {
    path:'/login',
    component:Login,
    meta:{
      isHideFooter:true
    }
  },
  {
    path:'/register',
    component:Register,
    meta:{
      isHideFooter:true
    }
  },
  {
    name:'search',
    path:'/search/:content?', //带':' 的部分是params参数 ，有了:content就必须指定name
    component:Search,
    //将路由参数映射成props传递给路由组件对象
    props:route=>({keyword1:route.params.content,keyword2:route.params.content})
  },
]