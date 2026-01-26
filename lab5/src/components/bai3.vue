<template>
  <div class="card mb-4">
    <div class="card-header bg-info text-white">Bài 3: Thông tin cá nhân</div>
    <div class="card-body">
      <form>
        <div class="mb-2">
          <label>Họ tên:</label>
          <input v-model="userInfo.name" type="text" class="form-control" />
        </div>
        <div class="mb-2">
          <label>Tuổi:</label>
          <input v-model="userInfo.age" type="number" class="form-control" />
        </div>
        <div class="mb-2">
          <label>Email:</label>
          <input v-model="userInfo.email" type="email" class="form-control" />
        </div>
      </form>

      <div class="alert alert-secondary mt-3">
        <h6>Thông tin đã nhập:</h6>
        <p class="m-0">Tên: {{ userInfo.name }} | Tuổi: {{ userInfo.age }} | Email: {{ userInfo.email }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
const userInfo = reactive({
  name: '',
  age: null,
  email: ''
});
</script>