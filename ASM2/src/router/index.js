// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Import các trang (Views)
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import CreatePostView from '../views/CreatePostView.vue'
import PostDetailView from '../views/Postdetailview.vue' 
import ProfileView from '../views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/create-post',
      name: 'create-post',
      component: CreatePostView
    },

    {
      path: '/post/:id',
      name: 'post-detail',
      component: PostDetailView
    },
{ path: '/profile', name: 'profile', component: ProfileView }
  ]
})

export default router