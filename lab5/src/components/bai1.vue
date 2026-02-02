<template>
  <div class="p-5">
    <p>{{ message }}</p>
    <button class="btn btn-dark" @click="updateMessage">Thay đổi thông điệp</button>
    <br>
    <input v-model="gia" type="number" placeholder="Nhập giá">
  
  <input v-model="soLuong" type="number" placeholder="Nhập số lượng">

  <p>Tổng tiền: {{ gia * soLuong }}</p>
<p v-if="soLuong >= 10" style="color: red;">Số lượng sản phẩm >= 10, được giảm 50%!</p>
    <h3>Tổng thanh toán: {{ tongTien }}</h3>
  </div>
  
</template>

<script setup>
import { ref,computed} from 'vue';

const message = ref('Thông điệp ban đầu');
const gia = ref(0);
const soLuong = ref(0);

const updateMessage = () => {
  message.value = 'Thông điệp đã được thay đổi!';
};
const tongTien = computed(() => {
  const thanhTien = gia.value * soLuong.value;

  if (soLuong.value >= 10) {
    return thanhTien * 0.5; 
  }
  
  return thanhTien;

});
</script>