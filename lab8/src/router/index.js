// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";

// Import các components theo yêu cầu [cite: 60-69]
import Home from "../views/Home.vue";
import BlogList from "../views/BlogList.vue";
import BlogPost from "../views/BlogPost.vue";
import UserProfile from "../views/UserProfile.vue";
import UserProfileInfo from "../views/UserProfileInfo.vue";
import UserProfileSettings from "../views/UserProfileSettings.vue";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";

const routes = [
  { path: "/", name: "Home", component: Home }, // [cite: 76]
  { path: "/blog", name: "BlogList", component: BlogList }, // [cite: 78]
  { path: "/blog/:id", name: "BlogPost", component: BlogPost }, // Route động [cite: 35, 80]
  { path: "/login", name: "Login", component: Login }, // [cite: 108]
  
  // Route lồng nhau & Alias [cite: 31, 46, 83-106]
  {
    path: "/profile",
    name: "UserProfile",
    component: UserProfile,
    alias: "/me", // 
    children: [
      { path: "info", name: "UserProfileInfo", component: UserProfileInfo }, // [cite: 32]
      { path: "settings", name: "UserProfileSettings", component: UserProfileSettings }, // [cite: 33]
    ],
  },
  
  // Route được bảo vệ [cite: 41, 111-117]
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true }, // Đánh dấu cần xác thực
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Route Guard bảo vệ Dashboard [cite: 39-41, 130-146]
router.beforeEach((to, from, next) => {
  // Kiểm tra trạng thái đăng nhập từ localStorage (giả lập)
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  if (to.matched.some((record) => record.meta.requiresAuth) && !isAuthenticated) {
    next({ name: "Login" }); // Chuyển hướng về Login nếu chưa xác thực
  } else {
    next();
  }
});

export default router;