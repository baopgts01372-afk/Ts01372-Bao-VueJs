<template>
  <div>
    <h2>Thêm sản phẩm mới</h2>
    <input v-model="name" placeholder="Tên sản phẩm (thay cho Tiêu đề)" />
    
    <input v-model="price" type="number" placeholder="Giá tiền (thay cho Tác giả)" />
    
    <textarea v-model="description" placeholder="Mô tả sản phẩm"></textarea>
    
    <button @click="submitPost">Thêm sản phẩm</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['add-post'])

// Đổi tên biến state
const name = ref('')
const price = ref('')
const description = ref('')

function submitPost() {
 
  if (name.value && price.value && description.value) {
    const newPost = {
      name: name.value,         
      price: price.value,        
      description: description.value 
    }

    emit('add-post', newPost)

    // Reset fields
    name.value = ''
    price.value = ''
    description.value = ''
  }
}
</script>

<style>

input, textarea {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
}
button {
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>