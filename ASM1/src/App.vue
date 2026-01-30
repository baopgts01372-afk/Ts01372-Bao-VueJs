<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/footer.vue' // Chúng ta sẽ tạo file này ở bước 2
</script>

<template>
  <div class="d-flex flex-column min-vh-100 bg-light">
    <header>
      <Navbar />
    </header>

    <main class="flex-grow-1">
      <RouterView />
    </main>

    <Footer />
  </div>
</template>

<style>
/* Import font chữ đẹp từ Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

body {
  font-family: 'Poppins', sans-serif;
  background-color: #f8f9fa;
}
</style>