<template>
  <div class="card mb-4">
    <div class="card-header bg-success text-white">Bài 2: v-model Binding</div>
    <div class="card-body">
      <label>Nhập dữ liệu:</label>
      <input v-model="userInput" class="form-control mb-2" placeholder="Nhập gì đó..." />
      <p>Giá trị bạn nhập: <b>{{ userInput }}</b></p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const userInput = ref('FPL');
</script>