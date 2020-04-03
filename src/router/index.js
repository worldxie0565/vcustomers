import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddCustomer  from '../views/AddCustomer.vue'
import CustomerDetails  from '../views/CustomerDetails.vue'
import EditCustomer from  '../views/EditCustomer.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/add',
    name: 'AddCustomer',
    component: AddCustomer
  },
  {
    path: '/customer/:id',
    name: 'CustomerDetails',
    component: CustomerDetails
  },
  {
    path: '/edit/:id',
    name: 'EditCustomer',
    component: EditCustomer
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
