<template>
  <div class="blog-list-container">
    <h1>📝 Danh sách bài viết mới nhất</h1>
    
    <div class="blog-grid">
      <div v-for="post in posts" :key="post.id" class="blog-card">
        
        <img :src="post.image" alt="Ảnh bài viết" class="blog-image" />
        
        <div class="blog-content">
          <h3>{{ post.title }}</h3>
          <p class="date">{{ post.date }} - Tác giả: {{ post.author }}</p>
          <p class="desc">{{ post.desc }}</p>
          
          <router-link 
            :to="{ name: 'BlogPost', params: { id: post.id } }" 
            class="read-more-btn"
          >
            Đọc tiếp &rarr;
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogList",
  data() {
    return {
    
      posts: [
        {
          id: 1,
          title: "Làm quen với Vue Router",
          desc: "Vue Router là thư viện định tuyến chính thức cho Vue.js, giúp xây dựng Single Page Application dễ dàng.",
          author: "Admin",
          date: "06/02/2026",
          image: "https://via.placeholder.com/300x150/42b983/ffffff?text=Vue+Router"
        },
        {
          id: 2,
          title: "Tìm hiểu về Nested Routes",
          desc: "Hướng dẫn cách tạo các route lồng nhau để hiển thị giao diện phức tạp như trang Profile.",
          author: "FPT Poly",
          date: "05/02/2026",
          image: "https://via.placeholder.com/300x150/35495e/ffffff?text=Nested+Routes"
        },
        {
          id: 3,
          title: "Bảo vệ Route (Navigation Guards)",
          desc: "Cách sử dụng router.beforeEach để ngăn người dùng chưa đăng nhập truy cập trang Dashboard.",
          author: "Giảng viên",
          date: "04/02/2026",
          image: "https://via.placeholder.com/300x150/ff5f5f/ffffff?text=Route+Guard"
        }
      ]
    };
  }
};
</script>

<style scoped>

.blog-list-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.blog-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.blog-card:hover {
  transform: translateY(-5px);
}

.blog-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.blog-content {
  padding: 15px;
  text-align: left;
}

.date {
  font-size: 0.85em;
  color: #888;
  margin-bottom: 10px;
}

.desc {
  font-size: 0.95em;
  color: #555;
  margin-bottom: 15px;
  line-height: 1.4;
}

.read-more-btn {
  display: inline-block;
  background-color: #42b983;
  color: white;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
}

.read-more-btn:hover {
  background-color: #3aa876;
}
</style>