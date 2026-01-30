<template>
  <div class="container py-4">
    <header class="mb-4 text-center">
      <h1 class="text-primary fw-bold">LAB 6 - VUEJS</h1>
      <p class="text-muted">Pham Gia Bao - Ts01372</p>
    </header>

    <ul class="nav nav-tabs mb-4 justify-content-center">
      <li class="nav-item">
        <button 
          class="nav-link" 
          :class="{ active: currentTab === 1 }" 
          @click="currentTab = 1"
        >
          Bài 1 (Xếp loại)
        </button>
      </li>
      <li class="nav-item">
        <button 
          class="nav-link" 
          :class="{ active: currentTab === 2 }" 
          @click="currentTab = 2"
        >
          Bài 2 (Mùa)
        </button>
      </li>
      <li class="nav-item">
        <button 
          class="nav-link" 
          :class="{ active: currentTab === 3 }" 
          @click="currentTab = 3"
        >
          Bài 3 (List Rendering)
        </button>
      </li>
      <li class="nav-item">
        <button 
          class="nav-link" 
          :class="{ active: currentTab === 4 }" 
          @click="currentTab = 4"
        >
          Bài 4 (CRUD)
        </button>
      </li>
    </ul>

    <div class="tab-content p-4 border rounded shadow-sm bg-white">
      <Bai1 v-if="currentTab === 1" />
      <Bai2 v-if="currentTab === 2" />
      <Bai3 v-if="currentTab === 3" />
      <Bai4 v-if="currentTab === 4" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Import các component bài tập
import Bai1 from './components/bai1.vue';
import Bai2 from './components/bai2.vue';
import Bai3 from './components/bai3.vue';
import Bai4 from './components/bai4.vue';

// Biến trạng thái để xác định tab đang mở (mặc định mở Bài 1)
const currentTab = ref(1);
</script>

<style>
/* Thêm một chút style nhẹ nếu cần, chủ yếu dùng Bootstrap */
body {
  background-color: #f8f9fa;
}
.nav-link {
  cursor: pointer;
  font-weight: 500;
}
.nav-link.active {
  background-color: #0d6efd !important;
  color: white !important;
}
</style>