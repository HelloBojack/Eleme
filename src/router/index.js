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
    component: () => import( /* webpackChunkName: "about" */ '../views/Home.vue'),
  },
  {
    path: '/discover',
    name: 'discover',
    component: () => import( /* webpackChunkName: "about" */ '../views/Discover.vue')
  },
  {
    path: '/orderTab',
    name: 'orderTab',
    component: () => import( /* webpackChunkName: "about" */ '../views/OrderTab.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import( /* webpackChunkName: "about" */ '../views/Profile.vue')
  },
  
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
})

export default router
