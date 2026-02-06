<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { registerUser } from '../utils/storage';

const router = useRouter();
const user = ref({ name: '', email: '', password: '' });

const handleRegister = () => {
  const result = registerUser(user.value);
  if (result.success) {
    alert("Đăng ký thành công! Mời bạn đăng nhập.");
    router.push('/login');
  } else {
    alert(result.message);
  }
};
</script>

<template>
  <div class="container mt-5 col-md-4">
    <div class="card shadow">
      <div class="card-header bg-success text-white text-center">
        <h3>Đăng Ký</h3>
      </div>
      <div class="card-body">
        <form @submit.prevent="handleRegister">
          <div class="mb-3">
            <label>Họ tên</label>
            <input v-model="user.name" type="text" class="form-control" required>
          </div>
          <div class="mb-3">
            <label>Email</label>
            <input v-model="user.email" type="email" class="form-control" required>
          </div>
          <div class="mb-3">
            <label>Mật khẩu</label>
            <input v-model="user.password" type="password" class="form-control" required>
          </div>
          <button class="btn btn-success w-100">Đăng Ký</button>
        </form>
      </div>
    </div>
  </div>
</template>