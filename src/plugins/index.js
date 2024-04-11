import '../assets/style.scss'
import "@popperjs/core";
import * as bootstrap from 'bootstrap'
import 'normalize.css/normalize.css'
import '@/theme/dark.css'
import '@/style.css'
import '@/utils/axios.js'
import 'animate.css';
import { defineAsyncComponent,ref } from 'vue';

const components = import.meta.glob('../components/*.vue');

let showLoading = ref(true);

let setShowLoading = (state) => {
  return showLoading .value= state;
}

const oHtml = document.documentElement;
// 获取计算样式对象
const computedStyle = getComputedStyle(oHtml);

// 获取特定 CSS 变量的值
const isHover = computedStyle.getPropertyValue('--is-hover');
//如果是pc端引入hover.css，反正不引入
if (isHover=='true') {
  import('hover.css/css/hover-min.css');
}


export default {
  install(app, options) {
    app.config.productionTip = false

    app.config.globalProperties.$bootstrap = bootstrap

    app.provide('showLoading',()=>showLoading);
    app.provide('setShowLoading',setShowLoading);

    for (const [key, value] of Object.entries(components)) {
      const name = key.slice(key.lastIndexOf('/') + 1, key.lastIndexOf('.'));
      app.component(name, defineAsyncComponent(value));
    }


  }
}