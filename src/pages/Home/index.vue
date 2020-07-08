<template>
  <div>

    <!-- 商品分类导航 -->
    <TypeNav />

    <!--列表-->
    <List />
    <!--今日推荐-->
    <TodayRecommend />
    <!-- 商品排行 -->
    <Rank />
    <!-- 猜你喜欢 -->
    <Like />
    <!--楼层-->
    <Floor/>
    <Floor/>
    <!--商标-->
    <Brand/>


  </div>
</template>

<script>
  import List from './List/List'
  import TodayRecommend from './TodayRecommend/TodayRecommend'
  import Rank from './Rank/Rank'
  import Like from './Like/Like'
  import Floor from './Floor/Floor'
  import Brand from './Brand/Brand'
  export default {
    name: 'Home',

    components: {
      List,
      TodayRecommend,
      Rank,
      Like,
      Floor,
      Brand

    }
  }
</script>

<style lang="less" scoped>

</style>