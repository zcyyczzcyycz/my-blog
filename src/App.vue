<template>
<!-- 粒子动画容器 -->
<div id="particles-js"></div>
 <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <div class="container-lg">
    <router-view></router-view>
  </div>

</template>

<script setup>

</script>


<style scoped lang="scss">
@media (max-width: 767.98px) { 
  .container-lg{
    padding-left: 0;
    padding-right: 0;
  }
 }

</style>
