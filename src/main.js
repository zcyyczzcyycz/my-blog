import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import plugin from './plugins'
import router from './router'




const app = createApp(App);
console.log(1111);
app.use(plugin).use(router).mount('#app')
