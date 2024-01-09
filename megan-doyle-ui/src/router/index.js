import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MusicView from '@/views/MusicView.vue'
import MerchView from '@/views/MerchView.vue'
import MonkeyView from '@/views/MonkeyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/music',
      name: 'music',
      component: MusicView
    },
    {
      path: '/merch',
      name: 'merch',
      component: MerchView
    },
    {
      path: '/monkey',
      name: 'monkey',
      component: MonkeyView
    }
  ]
})

export default router
