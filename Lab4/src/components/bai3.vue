<template>
  <div class="p-3 border rounded mb-4">
    <h2 class="text-primary">Bài 3: Event Handling</h2>
    <h3>{{ greeting }}</h3>
    
    <button class="btn btn-success" :title="buttonTitle" @click="changeGreeting">
      Click để thay đổi
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Khai báo biến reactive (dữ liệu động)
const greeting = ref('Xin chào bạn!');
const buttonTitle = ref('Nhấn để thay đổi lời chào');

// Hàm xử lý sự kiện click
const changeGreeting = () => {
  greeting.value = 'Hello, World!';
  buttonTitle.value = 'Lời chào mới đã được cập nhật';
}
</script>