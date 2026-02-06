<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { addPost, getCurrentUser } from '../utils/storage';

const router = useRouter();
const post = ref({ title: '', image: '', content: '' });
const user = ref(null);

onMounted(() => {
  user.value = getCurrentUser();
  if (!user.value) { alert('Vui lòng đăng nhập!'); router.push('/login'); }
});

const submitPost = () => {
  addPost({ ...post.value, author: user.value.name });
  router.push('/');
};
</script>

<template>
  <div class="container mt-5">
    <div class="card shadow-lg border-0">
      <div class="card-header bg-white py-3">
        <h3 class="fw-bold text-primary mb-0"><i class="bi bi-pen me-2"></i>Viết bài mới</h3>
      </div>
      <div class="card-body p-4">
        <form @submit.prevent="submitPost">
          <div class="mb-3">
            <label class="form-label fw-bold">Tiêu đề</label>
            <input v-model="post.title" class="form-control form-control-lg" placeholder="Nhập tiêu đề hấp dẫn..." required>
          </div>
          <div class="mb-3">
            <label class="form-label fw-bold">Ảnh bìa (URL)</label>
            <input v-model="post.image" class="form-control" placeholder="https://...">
          </div>
          <div class="mb-3">
            <label class="form-label fw-bold">Nội dung</label>
            <textarea v-model="post.content" class="form-control" rows="8" placeholder="Chia sẻ câu chuyện của bạn..." required></textarea>
          </div>
          <button class="btn btn-primary btn-lg w-100 shadow-sm"><i class="bi bi-send me-2"></i>Đăng bài</button>
        </form>
      </div>
    </div>
  </div>
</template>