import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
      {
        path: '/characters',
          name: 'characters',
          component: () => import('./views/viewCharacters.vue')
      },
      {
        path: '/characters/:id',
          name: 'character',
          component: () => import('./views/oneCharacter.vue')
      },
      {
        path: '/empires',
          name: 'empires',
          component: () => import('./views/Empires.vue')
      },
      {
        path: '/create',
          name: 'create',
          component: () => import('./views/creationForm.vue')
      },
      {
        path: '/empires/:id',
          name: 'empire',
          component: () => import('./views/oneEmpire.vue')
      },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
