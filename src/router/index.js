import Vue from 'vue'
import VueRouter from 'vue-router'
//Home
import PageHome from '../components/PageHome.vue'


//Nguoi dung
import PageAdidas from '@/views/user/PageAdidas.vue'
import PageNike from '@/views/user/PageNike.vue'
import PageJordan from '@/views/user/PageJordan.vue'
import PageYeezy from '@/views/user/PageYeezy.vue'
import PageAbout from '@/views/user/PageAbout.vue'
import PageContact from '@/views/user/PageContact.vue'
import PageSpa from '@/views/user/PageSpa.vue'
import PageCart from '@/views/user/PageCart.vue'
// import PageUser from '@/views/user/PageUser.vue'

import PageLogin from '@/views/user/PageLogin.vue'

//Admin
import AdminOrder from '../views/admin/orders/index.vue'
import AdminProduct from '../views/admin/products/index.vue'
import AdminUsers from '../views/admin/users/index.vue'
import AdminStaff from '../views/admin/staff/index.vue'


Vue.use(VueRouter)

const routes = [
  // Nguoi dung
  {
    path: '/',
    name: 'home',
    component: PageHome
  },
  {
    path: '/adidas',
    name: 'adidas',
    component: PageAdidas
  },
  {
    path: '/nike',
    name: 'nike',
    component: PageNike
  },
  {
    path: '/jordan',
    name: 'jordan',
    component: PageJordan
  },
  {
    path: '/yeezy',
    name: 'yeezy',
    component: PageYeezy
  },
  {
    path: '/contact',
    name: 'contact',
    component: PageContact
  },
  {
    path: '/about',
    name: 'about',
    component: PageAbout
  },
  {
    path: '/spa',
    name: 'spa',
    component: PageSpa
  },
  // {
  //   path: '/user',
  //   name: 'user',
  //   component: PageUser
  // },
  {
    path: '/cart',
    name: 'cart',
    component: PageCart
  },
  {
    path: '/login',
    name: 'login',
    component: PageLogin
  },

  //Admin
  {
    path: '/admin/adminorder',
    name: 'order',
    component: AdminOrder
  },
  {
    path: '/admin/adminproducts',
    name: 'products',
    component: AdminProduct
  },
  {
    path: '/admin/adminusers',
    name: 'users',
    component: AdminUsers
  },
  {
    path: '/admin/adminstaff',
    name: 'staff',
    component: AdminStaff
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
