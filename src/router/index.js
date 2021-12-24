import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home' // 引入主页
import Login from '@/views/login' // 引入登录页

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login' // 强制跳转
  },
  {
    path: '/home', // 主页
    name: 'Home',
    component: Home
  },
  {
    path: '/login', // 登录页
    name: 'login',
    component: Login
  }
  // ,
  // 按需加载
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
