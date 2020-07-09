// axios的二次封装（axios本身就是对XHR原生的ajax的封装）

import axios from 'axios'
import NProgress from 'nprogress'

// 配置基础的路径和超时

const instance = axios.create({
  baseURL:'/api',//基础路径
  timeout:15000//请求超时时间
})

//注册请求拦截器
instance.interceptors.request.use(config=>{
  // 显示进度条
  NProgress.start()

  return config
})

// 注册响应拦截器
instance.interceptors.response.use(
  response=>{
    // 隐藏进度条
    NProgress.done()

    return response.data
  },
  // 请求失败后的回调
  error=>{
    // 失败后也会隐藏进度条
    NProgress.done()
    // 统一处理请求错误
    alert(error.message || '未知错误')
    return Promise.reject(error)
  }
  
  
)