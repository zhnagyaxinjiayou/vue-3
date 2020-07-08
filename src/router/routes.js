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
    component:Login
  },
  {
    path:'/register',
    component:Register
  },
  {
    path:'/search',
    component:Search
  },
]