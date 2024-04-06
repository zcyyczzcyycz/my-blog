import '../assets/style.scss'
import "@popperjs/core";
import * as bootstrap from 'bootstrap'



export default {
  install(app, options) {

    app.config.productionTip = false

    app.config.globalProperties.$bootstrap = bootstrap

  }
}