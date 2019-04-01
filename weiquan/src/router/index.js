import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/pages/homepage/homepage.vue'
import test1 from '@/demos/test.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage
    },
    {
      path: '/demo/test',
      name: 'test1',
      component: test1,
      meta: { title: 'test1' }
    }
  ]
})
