<template>
  <div>
    <h2>Danh sách sản phẩm</h2>
    <div v-for="(post, index) in posts" 
         :key="index" 
         :class="{ 'highlighted': post.name && post.name.length > 20 }"
         class="post">
      
      <h3 class="text-success">{{ post.name }}</h3>
      
      <h4 class="text-danger">{{ post.price }} đ</h4>
      
      <p>{{ post.description }}</p>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue';

// Định nghĩa props
defineProps({
  posts: {
    type: Array,
    required: true,
  }
});
</script>
<style>
.post {
  padding: 20px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 10px;
}
</style>