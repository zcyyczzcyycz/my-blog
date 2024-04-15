<template>
  <div id="home">
    <nav class="navbar navbar-expand-lg">
<div class="container-fluid">
<!-- 左侧图标 -->
  <div class="nav-left">
        <img
          :src="logo"
          class="img-fluid"
          alt="blog"
          style="width: 70px"
          @click="goHome"
        />
      </div>
<!-- 按钮 -->
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
<i class="bi bi-justify"></i>
</button>

<!-- 右侧菜单 -->
<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    <li class="nav-item mx-3 theme">
          <i
            @click="changeTheme"
            :class="[`bi-${lconStyle.name}`,'hvr-grow']"
            :style="{ color: lconStyle.color }"
          ></i>
    
                </li>
                <li class="nav-item mx-3">
                  <a
                    class="nav-link active hvr-underline-from-left"
                    aria-current="page"
                    href="#"
                    >首页</a
                  >
                </li>
                <li class="nav-item mx-3">
                  <a
                    class="nav-link active hvr-underline-from-left"
                    aria-current="page"
                    href="#"
                    >Home</a
                  >
                </li>
                <li class="nav-item mx-3">
                  <a
                    class="nav-link active hvr-underline-from-left"
                    aria-current="page"
                    href="#"
                    >Home</a
                  >
                </li>
                <li class="nav-item mx-3">
                  <a
                    class="nav-link active hvr-underline-from-left"
                    aria-current="page"
                    href="#"
                    >Home</a
                  >
                </li>
                <li class="nav-item mx-3">
                  <a
                    class="nav-link active hvr-underline-from-left"
                    aria-current="page"
                    href="#"
                    >Home</a
                  >
                </li>
              </ul>

</div>
</div>
</nav>

    <!-- 路由 -->
    <router-view></router-view>

    <!-- 返回顶部 -->
    <div class="toTop" @click="toTop" v-show="showToTop">
      <i class="bi bi-arrow-up"></i>
    </div>
  </div>
</template>

<script setup>
import blogImg from "@/assets/images/blog-light.png";
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";

// 节流阀变量
let control = true;
// 是否展示返回顶部
let showToTop = ref(false);

onMounted(() => {
  const oLink = document.createElement("link");
  const oHead = document.querySelector("head");
  oLink.rel = "stylesheet";
  oLink.id = "theme-link";
  oHead.append(oLink);

  document.body.addEventListener('scroll',function(e){
    if(!control) return;
    control = false;
    if (this.scrollTop>this.clientHeight) {
      showToTop.value = true;
    }else{
    showToTop.value = false;
    }
    control = true;
  }
  )
});

let logo = ref(blogImg);

const router = useRouter();
let goHome = () => {
  router.push("/home");
};

let lconStyle = ref({
  name: "moon",
  color: "#fff",
});

// 切换主题
let changeTheme = () => {
  const oHtml = document.documentElement;
  const computedStyle = getComputedStyle(oHtml);
  const themeMode = computedStyle.getPropertyValue("--theme-mode");
  const primaryTheme = computedStyle.getPropertyValue("--z-primary-theme");
  let oLink = document.querySelector("#theme-link");

  if (themeMode == "dark") {
    oLink.href = "/theme/light.css";
    import("@/assets/images/blog-dark.png").then((module) => {
      logo.value = module.default;
    });
    lconStyle.value.color = primaryTheme;
    lconStyle.value.name = "sun";
  } else {
    oLink.href = "/theme/dark.css";
    import("@/assets/images/blog-light.png").then((module) => {
      logo.value = module.default;
    });
    lconStyle.value.color = primaryTheme;
    lconStyle.value.name = "moon";
  }
};

// 返回顶部
let toTop = () => {
  let oBody = document.body;
  oBody.scrollTop = 0;
}




</script>

<style scoped lang="scss">
.hvr-underline-from-left {
  &::before {
    background: var(--loading-primary-color) !important;
  }
  &:hover {
    &::before {
      background: var(--loading-primary-color) !important;
    }
  }
}
:deep(#navbarTogglerDemo02){
  justify-content: flex-end !important;
  color: var(--z-primary-font-color);
  font-size: 25px;
}

:deep(.navbar){
  min-height: 120px;
  align-items: center;
}
:deep(.navbar-collapse){
  flex-grow: 0;
}
:deep(.navbar-toggler){
  outline: 0 !important;
  font-size: 25px;
  color: var(--z-primary-font-color);
}


#home {
  .nav-link {
    color: var(--z-primary-font-color);
  }
    .nav-left{
      img{
        cursor: pointer;
      }
    }
    .theme {
        i {
         color: var(--z-primary-font-color);
          cursor: pointer;
          font-size: 30px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          text-align: center;
          line-height: 60px;
          &:hover{
            background: var(--z-secondary-theme); 
           transition: background .3s;
          }
        }
      }
      .toTop{
        position: fixed;
        bottom: 3%;
        right: 3%;  
        border: 2px solid var(--z-primary-font-color);      
        color: var(--z-primary-font-color);
          font-size: 30px;
          width: 60px;
          height: 60px;
          text-align: center;
          line-height: 60px;
         border-radius: 20px;
         &:hover{
            background: var(--z-secondary-theme); 
           transition: background .3s;
          }
      }
  }

</style>
