import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import plugin from './plugins'
import router from './router'

const app = createApp(App);

app.use(plugin).use(router).mount('#app')
