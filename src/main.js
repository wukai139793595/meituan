// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import element from './element/index.js'
import 'element-ui/lib/theme-chalk/index.css'
import '@/util/directive.js'

Vue.config.productionTip = false
Vue.use(element)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    isMark: 0
  },
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
