<template>
<!-- 粒子动画容器 -->
<div id="particles-js"></div>
<!-- 鼠标跟随容器 -->
<span class="js-cursor-container"></span>
<teleport to="body">
   <!-- loading组件 -->
<z-loading v-if="showLoading"/>
 </teleport>


 <div :class="['alert', 'alert-warning', 'animate__animated', 'animate__bounceInDown',(alertMode=='error'? 'my-alert-error' : 'my-alert-success')]" id="my-alert" role="alert" v-show="alertShow">
  <i :class="`bi-emoji-${(alertMode=='error'? 'frown' : 'smile')}`" :style="{color:(alertMode=='error'? '#922B21' : '#1F618D'),fontSize:'35px',marginRight:'25px'}"></i> {{context}}
 </div>


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
let context = inject('contextProvide').context()
let setContext = inject('contextProvide').setContext
let alertShow = inject('contextProvide').alertShow
let alertMode = inject('contextProvide').alertMode

</script>


<style lang="scss" scoped>
#my-alert{
  display:flex;
  align-items:center;
  color:var(--z-primary-font-color);
  font-size:20px;
  position:fixed;
  z-index:999;
  top:20px;
  left:25%;
  width:50vw;
  text-align:center;
  border:0;
}
.my-alert-error{
  background:var(--loading-primary-color);
}
.my-alert-success{
  background:var(--loading-secondary-color);
}

@media (max-width: 768px) { 
  .container-lg{
    padding-left: 0;
    padding-right: 0;
  }
 }


</style>
