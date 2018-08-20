import Vue from 'vue'
import Router from 'vue-router'

// 首页
import Home from '../pages/home/home.vue'

Vue.use(Router)
const router = new Router({
  routes: [
    { // 首页
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})

export default router;
