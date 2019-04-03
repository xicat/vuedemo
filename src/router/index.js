import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'
import Login from '@/components/login'
import List from '@/components/list'
import Information from '@/components/information'
import About from '@/components/about'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
        {
      path: '/home',
      name: 'Home',
      component: Home
    },
     {
      path: '/list',
      name: 'List',
      component: List
    }, 
     {
      path: '/information',
      name: 'Information',
      component: Information
    },
     {
      path: '/about',
      name: 'About',
      component: About
    }   
  ]
})
