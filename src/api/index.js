// 包含项目中所有接口的ajax请求函数
// 函数的返回值是Promise,函数内部调用的ajax模块发请求
// 需要掌握一个技能：根据接口文档，定义接口请求函数

import ajax from './ajax'

// 登录 /api/user/passport/login
export function reqLogin(mobile, password) {
  //return ajax({
  //   url:'/user/passport/login',
  //   method:'POST',
  //   data:{mobile, password}
  // })

  // 将ajax作为对象使用
  return ajax.post('/user/passport/login',{mobile, password})
}

// 首页三级分类
// /api/product/getBaseCategoryList GET
export const reqCategoryList=()=>ajax('/product/getBaseCategoryList')
// export function reqCategoryList(){
// return ajax('/product/getBaseCategoryList')
// }
