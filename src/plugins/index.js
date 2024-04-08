import '../assets/style.scss'
import "@popperjs/core";
import * as bootstrap from 'bootstrap'
import 'normalize.css/normalize.css'
import '@/theme/dark.css'
import '@/style.css'
import { defineAsyncComponent,ref } from 'vue';

const components = import.meta.glob('../components/*.vue');

let showLoading = ref(true);

let setShowLoading = (state) => {
  return showLoading .value= state;
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