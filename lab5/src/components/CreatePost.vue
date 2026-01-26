<template>
  <div class="card mb-3">
    <div class="card-header">Tạo bài viết mới</div>
    <div class="card-body">
      <div class="mb-2">
        <input v-model="title" class="form-control" placeholder="Tiêu đề bài viết" />
      </div>
      <div class="mb-2">
        <input v-model="author" class="form-control" placeholder="Tên tác giả" />
      </div>
      <div class="mb-2">
        <textarea v-model="content" class="form-control" placeholder="Nội dung bài viết"></textarea>
      </div>
      <button class="btn btn-primary" @click="submitPost">Đăng bài</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['add-post']);
const title = ref('');
const content = ref('');
const author = ref('');

function submitPost() {
  if (title.value && content.value && author.value) {
    const newPost = {
      title: title.value,
      content: content.value,
      author: author.value,
      backgroundColor: '#f8f9fa', // Màu nền mặc định
      textColor: '#212529'        // Màu chữ mặc định
    };
    emit('add-post', newPost); // Gửi dữ liệu ra cha
    
    // Reset form
    title.value = '';
    content.value = '';
    author.value = '';
  } else {
    alert('Vui lòng nhập đủ thông tin');
  }
}
</script>