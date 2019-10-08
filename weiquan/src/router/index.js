import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/pages/homepage/homepage.vue'
import test from '@/demos/test.vue'
import test1 from '@/demos/test1.vue'

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
      name: 'test',
      component: test,
      meta: { title: 'test' }
    },
    {
      path: '/demo/test1',
      name: 'test1',
      component: test1,
      meta: { title: 'test1' }
    }
  ]
})
