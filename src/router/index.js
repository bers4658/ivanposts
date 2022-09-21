import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage'
import PostPage from '@/components/PostPage'
import ProfilePage from '@/components/ProfilePage'
 
const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/posts',
    component: PostPage
  },
  {
    path: '/profile/:id',
    component: ProfilePage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
