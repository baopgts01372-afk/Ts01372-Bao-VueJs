<template>
  <div class="container py-4">
    <h1 class="text-center mb-4 text-primary">Lab 7 - Quản lý bài tập</h1>
    
    <div class="d-flex justify-content-center gap-2 mb-4">
      <button 
        class="btn" 
        :class="{ 'btn-primary': currentTab === 1, 'btn-outline-primary': currentTab !== 1 }"
        @click="currentTab = 1"
      >
        Bài 1: To-Do List
      </button>

      <button 
        class="btn" 
        :class="{ 'btn-primary': currentTab === 2, 'btn-outline-primary': currentTab !== 2 }"
        @click="currentTab = 2"
      >
        Bài 2: Đăng nhập
      </button>

      <button 
        class="btn" 
        :class="{ 'btn-primary': currentTab === 3, 'btn-outline-primary': currentTab !== 3 }"
        @click="currentTab = 3"
      >
        Bài 3: Đăng ký
      </button>

      <button 
        class="btn" 
        :class="{ 'btn-primary': currentTab === 4, 'btn-outline-primary': currentTab !== 4 }"
        @click="currentTab = 4"
      >
        Bài 4: Bình luận
      </button>
    </div>

    <div class="card shadow-sm">
      <div class="card-body">
        <div v-if="currentTab === 1">
          <Bai1 />
        </div>
        <div v-if="currentTab === 2">
          <Bai2 />
        </div>
        <div v-if="currentTab === 3">
          <Bai3 />
        </div>
        <div v-if="currentTab === 4">
          <Bai4 />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';


import Bai1 from './components/bai1.vue';
import Bai2 from './components/bai2.vue';
import Bai3 from './components/bai3.vue';
import Bai4 from './components/bai4.vue';

// Biến trạng thái để lưu tab hiện tại (mặc định là bài 1)
const currentTab = ref(1);
</script>

<style>
/* Thêm một chút style nếu cần, ví dụ background xám nhẹ cho toàn trang */
body {
  background-color: #f8f9fa;
}
</style>