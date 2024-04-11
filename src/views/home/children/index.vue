<template>
  <div class="mt-5" id="menu">
    <div class="menu-grid">
      <div class="row menu-first-line">
        <div class="col-lg-6">
          <div class="box hvr-grow-shadow">col</div>
        </div>
        <div class="col-lg-6">
          <div class="box hvr-grow-shadow">col</div>
        </div>
      </div>
      <div class="row" v-for="(arr, i) in initMenuDataHander" :key="i">
        <template v-for="(obj, j) in arr" :key="j">
          <div
            :class="{
              column: true,
              'col-lg-6': true,
              ['col-xl-' + obj.random]: true,
            }"
          >
            <div
              :class="[
                'box',
                obj.random === 3 ? 'col-xl-3-box' : 'col-xl-6-box',
                'hvr-grow-shadow',
              ]"
            >
              <template v-if="obj.random === 3">
                <div class="top">
                  <img
                    :src="obj.url"
                    class="img-fluid"
                    alt="blog"
                    style="width: 70px"
                  />
                </div>
                <div class="bottom">
                  <span>{{ obj.title }}</span>
                  <div><i class="bi-fast-forward"></i></div>
                </div>
              </template>
              <template v-else>
                <div class="left">
                  <img
                    :src="obj.url"
                    class="img-fluid"
                    alt="blog"
                    style="width: 70px"
                  />
                  <span>{{ obj.title }}</span>
                </div>
                <div class="right">
                  <div><i class="bi-fast-forward"></i></div>
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import url from "@/assets/images/blog-light.png";
let initMenuData = [
  {
    title: "title1",
    url: url,
  },
  {
    title: "title2",
    url: url,
  },
  {
    title: "title3",
    url: url,
  },
  {
    title: "title4",
    url: url,
  },
  {
    title: "title5",
    url: url,
  },
];
let count = 0;
let initMenuDataHander = [[]];
initMenuData.forEach((item, i, current) => {
  if (Math.random() < 0.5) {
    //3
    item.random = 3;
  } else {
    //6
    item.random = 6;
  }
  count += item.random;
  if (count >= 12) {
    if (count === 12) {
      item.random = item.random;
    } else {
      item.random = 3;
    }
    initMenuDataHander[initMenuDataHander.length - 1].push(item);
    initMenuDataHander.push([]);
    count = 0;
  } else {
    initMenuDataHander[initMenuDataHander.length - 1].push(item);
  }
});
</script>

<style scoped lang="scss">
@media (max-width: 992px) {
  .box {
    width: 100% !important;
  }
  .col-lg-6 {
    padding: 0 !important;
  }
  .row {
    margin: 0 !important;
  }
  .menu-first-line{
    & :last-child div{
        margin-top: 20px !important;
    }
  }
}
@media (any-hover: hover) {
  .col-xl-3-box {
    .bottom {
      div {
        &:hover i {
          transform: translateX(10px);
          color: var(--loading-primary-color);
        }
        i {
          display: block;
          transition: all 0.3s;
          font-size: 36px;
          cursor: pointer;
        }
      }
    }
  }
  .col-xl-6-box {
    .right {
      &:hover i {
        transform: translateX(10px);
        color: var(--loading-primary-color);
      }
      i {
        transition: all 0.3s;
        display: block;
        font-size: 36px;
        cursor: pointer;
      }
    }
  }
}

.row {
  .column {
    margin-top: 25px;
  }
}

#menu {
  user-select: none;
  .menu-first-line > div > .box {
    height: 320px;
  }
  .col-xl-3-box {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-size: 18px;
    .bottom {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
  .col-xl-6-box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 18px;
    .left {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      height: 100%;
    }
    .right {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .box {
    width: 99%;
    margin: 0 auto;
    height: 250px;
    background: linear-gradient(
      45deg,
      var(--z-primary-theme),
      var(--z-secondary-theme)
    );
  }
}
</style>