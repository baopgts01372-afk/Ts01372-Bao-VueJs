<template>
  <div id="app" class="container py-4">
    <h1 class="text-center mb-5">LAB 5 - VUEJS DEMO</h1>

    <div class="row">
      <div class="col-md-5">
        <Bai1 />
        <Bai2 />
        <Bai3 />
      </div>

      <div class="col-md-7">
        <div class="p-3 border rounded bg-light">
          <h2 class="text-center mb-3">Bài 4: Hệ thống Blog</h2>
          <CreatePost @add-post="addPost" />
          <hr />
          <PostList :posts="posts" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Import các component con
import Bai1 from './components/bai1.vue';
import Bai2 from './components/bai2.vue';
import Bai3 from './components/bai3.vue';
import CreatePost from './components/CreatePost.vue';
import PostList from './components/PostList.vue';

// Dữ liệu cho Bài 4
const posts = ref([
  // Dữ liệu mẫu ban đầu (nếu muốn)
  { 
    title: 'Chào mừng đến với VueJS', 
    author: 'Admin', 
    content: 'Đây là bài viết đầu tiên.', 
    backgroundColor: '#e2e3e5', 
    textColor: 'black' 
  }
]);

// Hàm xử lý thêm bài viết mới
function addPost(post) {
  posts.value.push(post);
}
</script>

<style>
/* Đảm bảo bạn đã cài Bootstrap hoặc link CDN trong index.html để giao diện đẹp */
</style>