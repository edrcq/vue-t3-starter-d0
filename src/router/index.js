import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// Enregister et init plugin 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/read/:id',
    name: 'Read',
    component: () => import(/* webpackChunkName: "read" */ '../views/Read.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes,
})

export default router
