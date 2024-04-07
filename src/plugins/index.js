import '../assets/style.scss'
import "@popperjs/core";
import * as bootstrap from 'bootstrap'
import 'normalize.css/normalize.css'
import '@/style.css'



export default {
  install(app, options) {

    app.config.productionTip = false

    app.config.globalProperties.$bootstrap = bootstrap

  }
}