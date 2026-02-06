<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue' // Import thanh menu vào
</script>

<template>
  <div class="d-flex flex-column min-vh-100">
    <Navbar />

    <main class="flex-grow-1">
      <RouterView />
    </main>

    <footer class="bg-dark text-white text-center py-3 mt-5">
      <div class="container">
        <small>&copy; 2024 Blog Cá Nhân - VueJS Assignment</small>
      </div>
    </footer>
  </div>
</template>

<style>
/* Thêm font chữ đẹp cho toàn bộ web */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

body {
  font-family: 'Poppins', sans-serif;
  background-color: #f8f9fa;
}
</style>