import axios from 'axios'
import router from '../router'

// axios实例
const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code > 0) {
      // Message({
      //   type: 'warning',
      //   message: res.msg
      // })
    } 
    return res
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          //返回 401 跳转到登录页面
          router.replace({
            path: '/login'
          })
          location.reload()
          return
      }
    }
    if (error.message) {
    //   Message({
    //     message: error.message,
    //     type: 'error',
    //     duration: 6 * 1000
    //   })
    }
    return Promise.reject(error)
  }
)

export default service
