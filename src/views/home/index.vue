<template>
  <div id="home">
    <!-- <div class="container-fluid nav">
      <div class="nav-left">
        <img
          :src="logo"
          class="img-fluid"
          alt="blog"
          style="width: 70px"
          @click="goHome"
        />
      </div>
      <div class="nav-right">
        <div class="theme" @click="changeTheme">
          <i
            :class="[`bi-${lconStyle.name}`,'hvr-grow']"
            :style="{ color: lconStyle.color }"
          ></i>
        </div>
        <nav class="navbar navbar-expand-lg">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
          <div class="container-fluid" style="height:100%;">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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
      </div>
    </div> -->


    <nav class="navbar navbar-expand-lg">
<div class="container-fluid">
  <div class="nav-left">
        <img
          :src="logo"
          class="img-fluid"
          alt="blog"
          style="width: 70px"
          @click="goHome"
        />
      </div>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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
  </div>
</template>

<script setup>
import blogImg from "@/assets/images/blog-light.png";
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";

onMounted(() => {
  const oLink = document.createElement("link");
  const oHead = document.querySelector("head");
  oLink.rel = "stylesheet";
  oLink.id = "theme-link";
  oHead.append(oLink);
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
#home {
  .nav-link {
    color: var(--z-primary-font-color);
  }
    .nav-left{
      img{
        cursor: pointer;
      }
    }
    .nav-right {
      display: flex;
      align-items: center;
      .theme {
        i {
          cursor: pointer;
          font-size: 30px;
        }
      }
    }
  }

</style>
