<template>
  <div class="container mt-4">
    <div class="card">
      <div class="card-header bg-primary text-white">
        <h3>Bài 1: Xếp loại học sinh</h3>
      </div>
      <div class="card-body">
        <div class="mb-3">
          <label for="score" class="form-label">Nhập điểm trung bình:</label>
          <input
            type="number"
            id="score"
            class="form-control"
            v-model.number="score"
            placeholder="Nhập số điểm (0-10)"
            min="0"
            max="10"
          />
        </div>

        <div class="alert alert-success" role="alert" v-if="score !== null">
          <strong>Xếp loại: </strong>
          <span v-if="score < 5.0">Yếu</span>
          <span v-else-if="score >= 5.0 && score < 6.5">Trung bình</span>
          <span v-else-if="score >= 6.5 && score < 8.0">Khá</span>
          <span v-else-if="score >= 8.0 && score < 9.0">Giỏi</span>
          <span v-else>Xuất sắc</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const score = ref(null);
</script>