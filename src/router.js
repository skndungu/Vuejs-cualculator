import Vue from 'vue'
import Router from 'vue-router'
import Calculator from './views/Calculator.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'calculator',
      component: Calculator
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
