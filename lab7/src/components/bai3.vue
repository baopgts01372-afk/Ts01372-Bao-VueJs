<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <h3>Form Đăng Ký</h3>
        <form @submit.prevent="register">
          <div class="mb-3">
            <label>Họ tên:</label>
            <input type="text" class="form-control" v-model="form.name" placeholder="Nhập họ tên">
          </div>
          
          <div class="mb-3">
            <label>Email:</label>
            <input type="email" class="form-control" v-model="form.email" placeholder="Nhập email">
          </div>
          
          <div class="mb-3">
            <label>Mật khẩu:</label>
            <input type="password" class="form-control" v-model="form.password" placeholder="Nhập mật khẩu">
          </div>
          
          <div class="mb-3">
            <label>Ngày sinh:</label>
            <input type="date" class="form-control" v-model="form.dob">
          </div>
          
          <div class="mb-3">
            <label>Giới tính: </label>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" value="Nam" v-model="form.gender"> Nam
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" value="Nữ" v-model="form.gender"> Nữ
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" value="Khác" v-model="form.gender"> Khác
            </div>
          </div>
          
          <div class="mb-3">
            <label>Ngôn ngữ: </label>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" value="Tiếng Việt" v-model="form.languages"> Tiếng Việt
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" value="Tiếng Anh" v-model="form.languages"> Tiếng Anh
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" value="Tiếng Nhật" v-model="form.languages"> Tiếng Nhật
            </div>
          </div>
          
          <button type="submit" class="btn btn-primary">Đăng ký</button>
        </form>
      </div>

      <div class="col-md-6" v-if="isSubmitted">
        <h3>Thông tin đã đăng ký:</h3>
        <p><strong>Họ tên:</strong> {{ form.name }}</p>
        <p><strong>Email:</strong> {{ form.email }}</p>
        <p><strong>Ngày sinh:</strong> {{ form.dob }}</p>
        <p><strong>Giới tính:</strong> {{ form.gender }}</p>
        <p><strong>Ngôn ngữ:</strong> {{ form.languages.join(', ') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const isSubmitted = ref(false);

const form = reactive({
  name: '',
  email: '',
  password: '',
  dob: '',
  gender: 'Nam',
  languages: []
});

const register = () => {
  // Đánh dấu đã submit để hiển thị cột bên phải
  isSubmitted.value = true;
};
</script>