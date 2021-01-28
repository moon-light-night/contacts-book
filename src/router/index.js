import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Contacts.vue'),
  },
  {
    path: '/contacts/info',
    name: 'ContactsInfo',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Info.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
