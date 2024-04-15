import { createRouter, createWebHashHistory } from 'vue-router'
import {inject} from 'vue'
// 1. 定义路由组件.
// 也可以从其他文件导入

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { path: '/', redirect:'/home' },
  { path: '/home', component: import('@/views/home/index.vue'),children:[
    { path: '', component: import('@/views/home/children/index.vue') },
  ]},
  { path: '/login', component: import('@/views/login/index.vue') },
  { path: '/:catchAll(.*)', component: import('@/views/404/index.vue') },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

router.beforeEach((to, from, next) => {
  let setShowLoading = inject('setShowLoading');
   setShowLoading(true);
   next()
})

router.afterEach((to, from) => {
  let setShowLoading = inject('setShowLoading');
   setShowLoading(false);
})


export default router;