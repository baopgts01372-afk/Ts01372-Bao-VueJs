<template>
  <div class="card mb-4">
    <div class="card-header bg-primary text-white">Bài 1: Sự kiện & Binding</div>
    <div class="card-body">
      <p><strong>Thông điệp:</strong> {{ message }}</p>
      <button class="btn btn-dark" @click="updateMessage">Thay đổi thông điệp</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const message = ref('Thông điệp ban đầu');
const updateMessage = () => {
  message.value = 'Thông điệp đã được thay đổi!';
};
</script>