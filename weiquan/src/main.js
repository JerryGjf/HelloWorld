// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import homepage from '@/pages/homepage/homepage'
import router from './router'
import 'weui'
import weui from 'weui.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.prototype.weui = weui

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { homepage },
  template: '<homepage/>'
})
