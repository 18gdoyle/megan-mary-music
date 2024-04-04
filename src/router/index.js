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
