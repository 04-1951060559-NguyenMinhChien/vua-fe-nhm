import Vue from 'vue'
import VueRouter from 'vue-router'
//Home
import PageHome from '../components/PageHome.vue'


//Nguoi dung
import PageLogin from '../views/user/Login/PageLogin.vue'
import PageAbout from '../views/user/About/PageAbout.vue'
import PageSpa from '../views/user/Spa/PageSpa.vue'
import PageContact from '../views/user/Contact/PageContact.vue'
import PageCart from '../views/user/Cart/PageCart.vue'
// import NotFound from '../views/user/NotFound/index.vue'


import PageAdidas from '../views/user/Products/PageAdidas.vue'
import PageNike from '../views/user/Products/PageNike.vue'
import PageJordan from '../views/user/Products/PageJordan.vue'
import PageYeezy from '../views/user/Products/PageYeezy.vue'
import productDetails from '../views/user/Products/ProductDetails/index.vue'


//Admin
import AdminOrder from '../views/admin/orders/index.vue'
import AdminProduct from '../views/admin/products/index.vue'
import AdminUsers from '../views/admin/users/index.vue'
import AdminStaff from '../views/admin/staff/index.vue'


// import sizeManage from '@/views/admin/products/sizeManage.vue'

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
  // {
  //   path: '/:catchAll(.*)',
  //   name: 'errPage',
  //   component: NotFound
  // },
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
    name: 'admin-staff',
    component: AdminStaff
  },
  {
    path: '/admin/adminstaff',
    name: 'staff',
    component: AdminStaff
  },
  // {
  //   path: '/users/productdetails/:id',
  //   name: 'productDetails',
  //   component: productDetails
  // },
  {
    path: '/users/productdetails/',
    name: 'productDetails',
    component: productDetails
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
