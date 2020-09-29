// 入口文件

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast/index'
import FastClick from 'fastclick'
import lazyLoad from 'vue-lazyload'
import 'lib-flexible'
Vue.config.productionTip = false
Vue.use(toast)
Vue.use(lazyLoad, {
  loading: require('assets/img/common/reality.png')
})
Vue.prototype.$bus = new Vue()
FastClick.attach(document.body)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')