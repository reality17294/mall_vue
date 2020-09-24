import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const routes = [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'home',
    component: () => import('views/home/home')
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('views/category/category')
  },
  {
    path: '/shopcart',
    name: 'shopcart',
    component: () => import('views/cart/shopcart')
  }, {
    path: '/profile',
    name: 'profile',
    component: () => import('views/profile/profile')
  }, {
    path: '/detail/:iid',
    name: 'detail',
    component: () => import('views/detail/detail')
  }
]

const router = new Router({
  mode: 'history',
  routes,
})

export default router