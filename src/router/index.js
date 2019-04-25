import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/views/layout.vue'
// import changeCity from '@/views/city/change-city.vue'
import home from '@/views/home/home.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'layout',
    component: layout,
    redirect: '/home',
    children: [{
        path: '/home',
        name: 'home',
        component: home
      },
      {
        path: '/changeCity',
        name: 'changeCity',
        // component: changeCity
        component: () => import('@/views/city/change-city.vue')
      },
      {
        path: '/product',
        name: 'product',
        component: () => import('@/views/product/product.vue')
      }
    ]
  }, {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  }, {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register.vue')
  }]
})
