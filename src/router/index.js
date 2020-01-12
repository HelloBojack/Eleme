import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/discover',
    name: 'discover',
    component: () => import('../views/Discover.vue')
  },
  {
    path: '/orderTab',
    name: 'orderTab',
    component: () => import('../views/OrderTab.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/Login.vue')
  },
  {
    path:'/shopIndex/:shopId',
    name:'shopIndex',
    component: () => import('../components/shopIndex/shopIndex.vue'),
    children:[
      {
        path: '/shopMenu',
        name: 'shopMenu',
        component: () => import('../components/shopIndex/shopMenu.vue'),
      },
      {
        path: '/shopRecommend',
        name: 'shopRecommend',
        component: () => import('../components/shopIndex/shopRecommend.vue'),
      },
      {
        path: '/shopDetail',
        name: 'shopDetail',
        component: () => import('../components/shopIndex/shopDetail.vue'),
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
})

export default router
