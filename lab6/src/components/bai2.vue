<template>
  <div class="container mt-4">
    <h3>Nhập tháng của bạn:</h3>
    <input type="number" class="form-control mb-2" v-model.number="month" placeholder="Nhập tháng (1-12)" />
    
    <p v-if="month < 1 || month > 12" style="color: red">
      Vui lòng nhập tháng từ 1 đến 12
    </p>
    
    <p v-else-if="month >= 1 && month <= 3" class="text-success fw-bold">Mùa Xuân</p>
    <p v-else-if="month >= 4 && month <= 6" class="text-danger fw-bold">Mùa Hè</p>
    <p v-else-if="month >= 7 && month <= 9" class="text-warning fw-bold">Mùa Thu</p>
    <p v-else class="text-info fw-bold">Mùa Đông</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Khởi tạo giá trị mặc định theo gợi ý tài liệu
const month = ref(1); 
</script>