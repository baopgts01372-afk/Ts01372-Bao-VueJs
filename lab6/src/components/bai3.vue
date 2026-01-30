<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Kiến thức sức khỏe cộng đồng</h1>
    <div class="row">
      <div class="col-sm-4 mb-4" v-for="(item, index) in items" :key="index">
        <div class="card h-100">
          <img :src="item.image" class="card-img-top" alt="Hình ảnh" style="height: 200px; object-fit: cover;" />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ item.title }}</h5>
            
            <p class="card-text flex-grow-1">
              {{ item.isExpanded ? item.content : item.content.substring(0, 70) + '...' }}
            </p>

            <button 
              class="btn mt-auto" 
              :class="item.isExpanded ? 'btn-secondary' : 'btn-info text-white'"
              @click="toggleExpand(index)"
            >
              {{ item.isExpanded ? 'Thu gọn' : 'Xem chi tiết' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
  {
    title: '8 loại rau củ quả giàu canxi',
    // Nội dung dài để test chức năng ẩn/hiện
    content: 'Canxi là khoáng chất cần thiết đối với cơ thể người. Có nhiều cách để bổ sung canxi, trong đó bổ sung qua đường ăn uống là cách tốt nhất. Có 8 loại rau củ giàu canxi bao gồm súp lơ, rau bina, cải xoăn...',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    isExpanded: false // Trạng thái mặc định là đóng
  },
  {
    title: 'Các loại gia vị tốt cho sức khỏe',
    content: 'Một số loại gia vị cung cấp nhiều polyphenol chống oxy hóa cao hơn các loại gia vị quen thuộc khác. Với một lượng nhỏ các món ăn đã thêm hương thơm và vị hấp dẫn, đồng thời giúp tăng cường hệ miễn dịch.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    isExpanded: false
  },
  {
    title: '9 loại đậu bổ dưỡng nên dùng nhiều',
    content: 'Đậu lăng, đậu nành, đậu phộng, đậu Hà Lan giàu chất xơ, protein cùng nhiều vitamin và khoáng chất giúp giảm lượng đường trong máu, tốt cho tim mạch và hỗ trợ giảm cân hiệu quả.',
    image: 'https://images.unsplash.com/photo-1515543904379-3d75adc8d09f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    isExpanded: false
  }
]);

// Hàm xử lý khi bấm nút
function toggleExpand(index) {
  // Đảo ngược giá trị true -> false và ngược lại
  items.value[index].isExpanded = !items.value[index].isExpanded;
}
</script>