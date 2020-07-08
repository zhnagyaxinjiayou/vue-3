<template>
  <div>
    <Header/>
    <!-- 显示一级路由 -->
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  //  注册路由组件
  components:{
    Header,
    Footer
  }
}
</script>

<style lang="less" scoped>

</style>

