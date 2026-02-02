<template>
  <!-- <div id="app">
    <h1>Quản lý Linh kiện PC</h1>
    <CreatePost @add-post="addPost" />
    <PostList :posts="posts" />
  </div> -->

  <bai1/>
</template>

<script setup>
import { ref } from 'vue'
import CreatePost from './components/CreatePost.vue'
//import PostList from './components/PostList.vue'
import bai1 from './components/bai1.vue'

// Dán dữ liệu hardwareList vào đây
const posts = ref([
    {
        name: "CPU AMD Ryzen 9 7950X",
        description: "Vi xử lý 16 nhân 32 luồng, xung nhịp lên tới 5.7GHz.",
        price: 14500000,
    },
    {
        name: "Card đồ họa NVIDIA RTX 4090",
        description: "GPU mạnh mẽ nhất hiện nay với 24GB VRAM GDDR6X.",
        price: 52000000,
    },
    {
        name: "RAM Corsair Dominator Platinum 64GB",
        description: "Bộ nhớ RAM hiệu năng cao, bus 6000MHz.",
        price: 7800000,
    },
     {
        name: "SSD Samsung 990 Pro 2TB NVMe Gen4",
        description: "Ổ cứng SSD tốc độ đọc/ghi lên tới 7450/6900 MB/s, độ bền cao, phù hợp cho Render video và làm AI.",
        price: 4500000,
    },
    {
        name: "Mainboard ASUS ROG Maximus Z790 Hero",
        description: "Bo mạch chủ cao cấp dành cho CPU Intel thế hệ 13/14, hỗ trợ PCIe 5.0 và hệ thống cấp điện 20+1 phase.",
        price: 18500000,
    },
    {
        name: "Nguồn Corsair AX1600i 1600W 80 Plus Titanium",
        description: "Bộ nguồn kỹ thuật số mạnh mẽ nhất thế giới với hiệu suất đạt chuẩn Titanium, linh kiện 100% Nhật Bản.",
        price: 12900000,
    },
    {
        name: "Tản nhiệt nước NZXT Kraken Elite 360 RGB",
        description: "Hệ thống tản nhiệt AIO có màn hình LCD tùy biến, hiệu suất làm mát vượt trội cho các dòng CPU tỏa nhiệt lớn.",
        price: 6900000,
    },
    {
        name: "Case Lian Li O11 Dynamic EVO",
        description: "Vỏ máy tính thiết kế kính cường lực hai mặt, khả năng tùy biến luồng gió cực tốt và hỗ trợ nhiều vị trí lắp quạt.",
        price: 4200000,
    },
    {
        name: "Màn hình LG UltraGear 27GR95QE-B OLED",
        description: "Màn hình chơi game 27 inch OLED, tần số quét 240Hz, thời gian phản hồi 0.03ms cho trải nghiệm mượt mà tuyệt đối.",
        price: 21000000,
    },
    {
        name: "Bàn phím cơ Custom Keychron Q1 Pro",
        description: "Bàn phím cơ không dây layout 75%, vỏ nhôm nguyên khối, hỗ trợ thay switch nóng (Hot-swappable).",
        price: 4800000,
    }

]);

function addPost(post) {
  posts.value.push(post)
}
</script>

<style>
#app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>