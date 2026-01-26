<template>
  <div class="container mt-4">
    <h2 class="text-center mb-4">Kiến thức sức khỏe cộng đồng</h2>

    <div class=" row g-3 ">
      <div class="col-md-3 mb-3" v-for="(item, index) in items" :key="index">
        <div class="card h-100">
          <img :src="item.image" class="card-img-top" alt="Hình ảnh" style="height: 200px; object-fit: cover;" />
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">{{ item.content }}</p>
            <button class="btn btn-info text-white">Xem chi tiết</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Giả lập dữ liệu (Dùng link ảnh online để bạn chạy được ngay mà không cần tải ảnh về máy)
const items = ref([
  { 
    title: '8 loại rau củ quả giàu canxi', 
    content: 'Canxi là khoáng chất cần thiết đối với cơ thể người. Có nhiều cách để bổ sung canxi...', 
    image: 'https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?s=612x612&w=0&k=20&c=v48RE0ZNWp6BtXquBZNYDBFvefp288U7_k4Z77ddK_Q=' 
  },
  { 
    title: 'Các loại gia vị tốt cho sức khỏe', 
    content: 'Một số loại gia vị cung cấp nhiều polyphenol chống oxy hóa cao hơn...', 
    image: 'https://media.istockphoto.com/id/1297005217/photo/herbs-and-spices-for-cooking-on-dark-background.jpg?s=612x612&w=0&k=20&c=K5gMhCywYl_rEa_Q3g_WlqOQYgK-lq0zHqZq_3q_3qA=' 
  },
  { 
    title: '9 loại đậu bổ dưỡng nên dùng nhiều', 
    content: 'Đậu lăng, đậu nành, đậu phộng, đậu Hà Lan giàu chất xơ, protein...', 
    image: 'https://media.istockphoto.com/id/1186221463/photo/various-legumes-and-beans.jpg?s=612x612&w=0&k=20&c=2x_2x_2x_2x_2x' 
  },
  {
   title: 'Lợi ích của việc tập thể dục hàng ngày', 
    content: 'Tập thể dục đều đặn giúp cải thiện sức khỏe tim mạch, tăng cường cơ bắp...', 
    image: 'https://media.istockphoto.com/id/1300846594/photo/group-of-diverse-people-exercising-together-in-a-fitness-class.jpg?s=612x612&w=0&k=20&c=3x_3x_3x_3x_3x'
},
{
   title: 'Lợi ích của việc tập thể dục hàng ngày', 
    content: 'Tập thể dục đều đặn giúp cải thiện sức khỏe tim mạch, tăng cường cơ bắp...', 
    image: 'https://media.istockphoto.com/id/1300846594/photo/group-of-diverse-people-exercising-together-in-a-fitness-class.jpg?s=612x612&w=0&k=20&c=3x_3x_3x_3x_3x'
},
{
   title: 'Lợi ích của việc tập thể dục hàng ngày', 
    content: 'Tập thể dục đều đặn giúp cải thiện sức khỏe tim mạch, tăng cường cơ bắp...', 
    image: 'https://media.istockphoto.com/id/1300846594/photo/group-of-diverse-people-exercising-together-in-a-fitness-class.jpg?s=612x612&w=0&k=20&c=3x_3x_3x_3x_3x'
},
{
   title: 'Lợi ích của việc tập thể dục hàng ngày', 
    content: 'Tập thể dục đều đặn giúp cải thiện sức khỏe tim mạch, tăng cường cơ bắp...', 
    image: 'https://media.istockphoto.com/id/1300846594/photo/group-of-diverse-people-exercising-together-in-a-fitness-class.jpg?s=612x612&w=0&k=20&c=3x_3x_3x_3x_3x'
},
{
   title: 'Lợi ích của việc tập thể dục hàng ngày', 
    content: 'Tập thể dục đều đặn giúp cải thiện sức khỏe tim mạch, tăng cường cơ bắp...', 
    image: 'https://media.istockphoto.com/id/1300846594/photo/group-of-diverse-people-exercising-together-in-a-fitness-class.jpg?s=612x612&w=0&k=20&c=3x_3x_3x_3x_3x'
}


]);
</script>