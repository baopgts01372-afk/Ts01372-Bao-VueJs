<script setup>
import { ref, onMounted } from 'vue';
import { getCurrentUser } from '../utils/storage';
import { useRouter } from 'vue-router';

const user = ref(null);
const router = useRouter();

onMounted(() => {
  user.value = getCurrentUser();
  if (!user.value) {
    router.push('/login'); // Nếu chưa đăng nhập thì đá về trang login
  }
});
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow border-0 text-center p-5" v-if="user">
          <div class="mb-4">
             <img :src="`https://ui-avatars.com/api/?name=${user.name}&size=128&background=random`" class="rounded-circle shadow-sm">
          </div>
          <h2 class="fw-bold">{{ user.name }}</h2>
          <p class="text-muted">{{ user.email }}</p>
          <hr>
          <div class="d-grid gap-2">
            <button class="btn btn-primary">Chỉnh sửa thông tin</button>
            <button class="btn btn-outline-danger">Đổi mật khẩu</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>