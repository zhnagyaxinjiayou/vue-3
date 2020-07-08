<template>
  <div>
    <h2>Search</h2>

    <h3>keyword:{{$route.params.content}}</h3>
    <h3>keyword1:{{keyword1}}</h3>
    <h3>keyword2:{{keyword2}}</h3>
  </div>
</template>

<script>
export default {
  props:['keyword1','keyword2'],
  name: 'Search',
}
</script>

<style lang="less" scoped>

</style>
