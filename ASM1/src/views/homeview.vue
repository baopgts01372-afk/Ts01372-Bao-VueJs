<template>
  <div>
    <div class="bg-primary text-white py-5 mb-5 text-center shadow-sm">
      <div class="container">
        <h1 class="display-4 fw-bold">Blog Cá Nhân</h1>
        <p class="lead">Quản lý và chia sẻ bài viết của bạn dễ dàng.</p>
        <router-link to="/create-post" class="btn btn-light btn-lg text-primary fw-bold mt-3 shadow-sm">
          + Viết bài mới
        </router-link>
      </div>
    </div>

    <div class="container mb-5">
      <h3 class="mb-4 border-start border-4 border-primary ps-3 text-dark fw-bold">Danh sách bài viết</h3>
      
      <div class="row g-4">
        <div class="col-md-4" v-for="post in posts" :key="post.id">
          <div class="card h-100 border-0 shadow-sm hover-card">
            
            <img :src="post.image" class="card-img-top" alt="Blog Image" style="height: 200px; object-fit: cover;">
            
            <div class="card-body">
              <h5 class="card-title fw-bold text-dark">{{ post.title }}</h5>
              <p class="card-text text-secondary text-truncate">{{ post.content }}</p>
            </div>

            <div class="card-footer bg-white border-top-0 d-flex justify-content-between pb-3">
              <button class="btn btn-outline-secondary btn-sm">Xem</button>
              
              <div>
                <router-link :to="{ name: 'edit-post', params: { id: post.id } }" class="btn btn-warning btn-sm me-2 text-white">
                  <i class="bi bi-pencil-square"></i> Sửa
                </router-link>
                
                <button class="btn btn-danger btn-sm" @click="deletePost(post.id)">
                  <i class="bi bi-trash"></i> Xóa
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Dữ liệu giả lập (Sau này sẽ lấy từ Backend)
const posts = ref([
  { 
    id: 1, 
    title: 'Lập trình VueJS cơ bản', 
    content: 'Học VueJS giúp bạn xây dựng giao diện web tương tác...',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085'
  },
  { 
    id: 2, 
    title: 'Bootstrap 5 có gì mới?', 
    content: 'Bootstrap 5 loại bỏ jQuery và thêm nhiều tính năng hay...',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8'
  },
  { 
    id: 3, 
    title: 'Kinh nghiệm học IT', 
    content: 'Chia sẻ lộ trình tự học lập trình hiệu quả cho người mới...',
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159'
  }
]);

// Hàm xử lý xóa bài viết (chỉ xóa trên giao diện tạm thời)
const deletePost = (id) => {
  if(confirm('Bạn có chắc chắn muốn xóa bài viết này không?')) {
    posts.value = posts.value.filter(p => p.id !== id);
  }
}
</script>

<style scoped>
.hover-card {
  transition: transform 0.2s;
}
.hover-card:hover {
  transform: translateY(-5px);
}
</style>