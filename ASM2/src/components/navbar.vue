<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getCurrentUser, logoutUser } from '../utils/storage';

const router = useRouter();
const route = useRoute();
const user = ref(null);

// 1. BIẾN ĐIỀU KHIỂN MENU
// false = đang đóng, true = đang mở
const isDropdownOpen = ref(false);

const checkUserStatus = () => {
  user.value = getCurrentUser();
};

onMounted(() => checkUserStatus());

watch(route, () => {
  checkUserStatus();
  // 2. LOGIC QUAN TRỌNG:
  // Mỗi khi chuyển trang xong (ví dụ bấm vào Profile), 
  // ta phải tự đóng menu lại cho gọn.
  isDropdownOpen.value = false;
});

// Hàm bật/tắt menu khi bấm vào tên
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

// Hàm đăng xuất
const handleLogout = () => {
  logoutUser();
  user.value = null;
  isDropdownOpen.value = false; // Đóng menu
  router.push('/login');
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow-sm">
    <div class="container">
      <router-link class="navbar-brand fw-bold fs-4" to="/">
        <i class="bi bi-journal-text me-2"></i>BlogZone
      </router-link>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto fw-semibold align-items-center">
          <li class="nav-item"><router-link class="nav-link" to="/">Trang chủ</router-link></li>
          
          <template v-if="user">
            <li class="nav-item me-2"><router-link class="nav-link" to="/create-post">Viết bài</router-link></li>
            
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle btn btn-light text-primary px-3 rounded-pill shadow-sm" 
                 href="#" 
                 @click.prevent="toggleDropdown">
                 Hi, {{ user.name }}
              </a>

              <ul class="dropdown-menu dropdown-menu-end shadow border-0 mt-2" 
                  :class="{ show: isDropdownOpen }">
                
                <li>
                  <router-link class="dropdown-item py-2" to="/profile">
                    <i class="bi bi-person-circle me-2 text-muted"></i>Hồ sơ của tôi
                  </router-link>
                </li>
                
                <li><hr class="dropdown-divider"></li>
                
                <li>
                  <a class="dropdown-item py-2 text-danger fw-bold" href="#" @click.prevent="handleLogout">
                    <i class="bi bi-box-arrow-right me-2"></i>Đăng xuất
                  </a>
                </li>
              </ul>
            </li>
          </template>

          <template v-else>
            <li class="nav-item ms-lg-3">
              <router-link class="btn btn-light text-primary btn-sm px-3 mt-1 fw-bold" to="/login">Đăng nhập</router-link>
            </li>
            <li class="nav-item">
              <router-link class="btn btn-outline-light btn-sm px-3 mt-1 ms-1" to="/register">Đăng ký</router-link>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>