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
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path:'/test',
      name:'test',
      component: Test
    },
    {
      path:'/about',
      name:'about',
      component: About
    },
    {
      path:'/contact',
      name:'contact',
      component: Contact
    }
  ]
})
