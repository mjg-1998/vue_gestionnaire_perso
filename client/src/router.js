import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/default/Home.vue'

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
            component: () => import('./views/characters/viewCharacters.vue')
        },
        {
            path: '/characters/:id',
            name: 'character',
            component: () => import('./views/characters/oneCharacter.vue')
        },
        {
            path: '/characters/edit/:id',
            name: 'characterEdit',
            component: () => import('./views/default/creationForm.vue')
        },
        {
            path: '/groups',
            name: 'groups',
            component: () => import('./views/groups/Groups.vue')
        },
        {
            path: '/groups/:id',
            name: 'group',
            component: () => import('./views/groups/OneGroup.vue')
        },
        {
            path: '/races',
            name: 'races',
            component: () => import('./views/races/Races.vue')
        },
        {
            path: '/races/:id',
            name: 'race',
            component: () => import('./views/races/oneRace.vue')
        },
        {
            path: '/create',
            name: 'create',
            component: () => import('./views/default/creationForm.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import(/* webpackChunkName: "about" */ './views/default/About.vue')
        }
    ]
})
