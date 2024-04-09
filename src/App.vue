<template>
<!-- 粒子动画容器 -->
<div id="particles-js"></div>
<!-- 鼠标跟随容器 -->
<span class="js-cursor-container"></span>
<teleport to="body">
   <!-- loading组件 -->
<z-loading v-if="showLoading"/>
 </teleport>


		 <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <div class="container-lg">
    <router-view></router-view>
  </div>


</template>

<script setup>
import '@/utils/mouse-click.js'
import {onMounted,inject,ref,watch} from 'vue'
import {useRoute} from 'vue-router'

onMounted(() => {
  import('@/utils/mouse-follow.js')
}
)

let showLoading = inject('showLoading')()


</script>


<style scoped lang="scss">
@media (max-width: 767.98px) { 
  .container-lg{
    padding-left: 0;
    padding-right: 0;
  }
 }


</style>
