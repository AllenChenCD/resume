import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Product from '@/components/Product'
import Test from '@/components/Test'
import About from '@/components/About'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/product/:id',
      name: 'product',
      component: Product
    },
    {
      path:'/test/:id',
      name:'test',
      component: Test
    },
    {
      path:'/about/:id',
      name:'about',
      component: About
    },
    {
      path:'/contact/:id',
      name:'contact',
      component: Contact
    }
  ]
})
