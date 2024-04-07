import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import plugin from './plugins'
import router from './router'


createApp(App).use(plugin).use(router).mount('#app')
