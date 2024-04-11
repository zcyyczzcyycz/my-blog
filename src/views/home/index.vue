<template>
<div id="home">
    <div class="container-fluid nav">
    <div class="nav-left">
      <img src="@/assets/images/blog-light.png" class="img-fluid" alt="blog" style="width: 70px;" @click="goHome">
    </div>
    <div class="nav-right">
      <div class="theme">
        <i class="bi-moon"></i>
      </div>
      <nav class="navbar navbar-expand-lg">
<div class="container-fluid">
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
<ul class="navbar-nav me-auto mb-2 mb-lg-0">
  <li class="nav-item mx-3">
    <a class="nav-link active hvr-underline-from-left" aria-current="page" href="#">Home</a>
  </li>
  <li class="nav-item mx-3">
    <a class="nav-link active hvr-underline-from-left" aria-current="page" href="#">Home</a>
  </li>
  <li class="nav-item mx-3">
    <a class="nav-link active hvr-underline-from-left" aria-current="page" href="#">Home</a>
  </li>
  <li class="nav-item mx-3">
    <a class="nav-link active hvr-underline-from-left" aria-current="page" href="#">Home</a>
  </li>
  <li class="nav-item mx-3">
    <a class="nav-link active hvr-underline-from-left" aria-current="page" href="#">Home</a>
  </li>
  <li class="nav-item mx-3">
    <a class="nav-link active hvr-underline-from-left" aria-current="page" href="#">Home</a>
  </li>
</ul>
</div>

</div>
</nav>
    </div>
</div>
<!-- 路由 -->
<router-view></router-view>
</div>
</template>

<script setup>
import {useRouter} from 'vue-router'
const router = useRouter();
  let goHome = () => {
    router.push('/home');
  }
  
</script>

<style scoped lang="scss">
.hvr-underline-from-left{
  &::before{
      background: var(--loading-primary-color) !important;
    }
  &:hover{
    &::before{
      background: var(--loading-primary-color) !important;
    }
  }
}
#home{
  .nav-link{
    color: var(--z-primary-font-color);
  }
    .nav{
     min-height: 120px;
     display: flex;
     justify-content: space-between;
     align-items: center;
     color: #fff;
     font-size: 25px;
     .nav-right{
      display: flex;
      align-items: center;
      .theme{
        i{
         cursor: pointer;
        }
      }
     }
    }
}
</style>
