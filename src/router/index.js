import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Card from '@/components/Card'
import Favorite from '@/components/Favorites'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/card/:id',
      name: 'Card',
      component: Card
    },
    {
      path: '/favorite',
      name: 'Favorite',
      component: Favorite
    }
  ]
})
