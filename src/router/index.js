import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../layout/layout.vue'),

    children: [ 
      { path: '', component: () => import('../components/ProductList.vue') },
      {path:'/profile', component:() => import("../components/account/Profile.vue")},
      {path:"/ProductDetails/:idProduct",component:()=>import("../components/ProductDetails.vue")},
      { path: 'cart', component: () => import('../components/CartDetails.vue') }
   
    ]
  
  },
  {
    path: '/login',
    component: () => import('../layout/layout.vue'),
    children:[
      {path:'',component: () => import('../components/account/login.vue')}
    ]
  },{
    path: '/cart',
    component: () => import('../layout/layout.vue'),
    children:[
      {path:'',component: () => import("../components/CartDetails.vue")}
    ]
  },
  {
    path:'/logout',
    component:() => {
      store.commit('logout');
    }
  },
  {
    path:'/signup',
    component:()=>import("../layout/layout.vue"),
    children:[
      {
        path:"/",
        component:()=>import("../components/account/signup.vue")
      }
    ]
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router