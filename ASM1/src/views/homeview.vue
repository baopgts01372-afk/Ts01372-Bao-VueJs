<script setup>
import { ref, onMounted } from 'vue';
import { getPosts } from '../utils/storage';

const posts = ref([]);

onMounted(() => {
  posts.value = getPosts();
});
</script>

<template>
  <div>
    <div class="bg-primary text-white py-5 mb-5 text-center shadow-sm">
      <div class="container">
        <h1 class="display-4 fw-bold">Chào mừng đến với Blog</h1>
        <p class="lead">Nơi chia sẻ kiến thức, kinh nghiệm và những câu chuyện thú vị.</p>
        <router-link to="/create-post" class="btn btn-light btn-lg text-primary fw-bold mt-3 shadow-sm">
          Viết bài ngay
        </router-link>
      </div>
    </div>

    <div class="container mb-5">
      <h3 class="mb-4 border-start border-4 border-primary ps-3 text-dark fw-bold">Bài viết mới nhất</h3>
      
      <div v-if="posts.length === 0" class="alert alert-info text-center">
        Chưa có bài viết nào. Hãy là người đầu tiên đăng bài!
      </div>

      <div class="row g-4">
        <div class="col-md-4" v-for="post in posts" :key="post.id">
          <div class="card h-100 border-0 shadow-sm hover-card">
            <img :src="post.image || 'https://via.placeholder.com/400x250'" class="card-img-top" style="height: 200px; object-fit: cover;">
            
            <div class="card-body">
              <div class="d-flex justify-content-between mb-2">
                <span class="badge bg-light text-primary border border-primary">Blog</span>
                <small class="text-muted">{{ new Date(post.date).toLocaleDateString() }}</small>
              </div>
              <h5 class="card-title fw-bold text-dark">{{ post.title }}</h5>
              <p class="card-text text-secondary text-truncate">{{ post.content }}</p>
            </div>
            
            <div class="card-footer bg-white border-top-0 d-flex justify-content-between align-items-center pb-3">
              <div class="d-flex align-items-center">
                <img :src="`https://ui-avatars.com/api/?name=${post.author}&background=random`" class="rounded-circle me-2" width="30">
                <small class="fw-bold text-muted">{{ post.author }}</small>
              </div>
              <router-link :to="`/post/${post.id}`" class="btn btn-sm btn-outline-primary">Đọc tiếp &rarr;</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hover-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.hover-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
}
</style>