<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/><!--当前路由地址所显示的内容-->
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
