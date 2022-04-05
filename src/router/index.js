import { createRouter, createWebHistory } from 'vue-router'
import Homeview from '@/views/HomeView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Homeview
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
