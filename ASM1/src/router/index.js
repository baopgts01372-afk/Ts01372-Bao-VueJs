import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/homeview.vue'
import LoginView from '../views/loginview.vue'
import RegisterView from '../views/RegisterView.vue'
import CreatePostView from '../views/CreatePostView.vue'
import ProfileView from '../views/ProfileView.vue'
import EditPostView from '../views/editpostlist.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/login', name: 'login', component: LoginView },
    { path: '/register', name: 'register', component: RegisterView },
    { path: '/create-post', name: 'create-post', component: CreatePostView },
    { path: '/profile', name: 'profile', component: ProfileView },
    
    // Thêm dòng này: Đường dẫn sửa bài viết (có kèm id)
    { path: '/edit-post/:id', name: 'edit-post', component: EditPostView },
  ]
})

export default router