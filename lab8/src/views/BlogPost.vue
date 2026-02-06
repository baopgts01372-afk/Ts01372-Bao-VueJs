<template>
  <div class="blog-detail-container">
    
    <div v-if="post">
      <h1 class="post-title">{{ post.title }}</h1>
      
      <div class="post-meta">
        <span> {{ post.date }}</span> | 
        <span>Tác giả: {{ post.author }}</span>
      </div>

      <img :src="post.image" alt="Ảnh bài viết" class="post-image" />
      
      <div class="post-content">
        <p class="intro">{{ post.desc }}</p>
        <hr>
        <p>
          Đây là nội dung chi tiết của bài viết <strong>{{ post.title }}</strong>. 
          Trong bài thực hành Vue Router này, chúng ta đang học cách lấy tham số 
          từ URL (cụ thể là ID: {{ $route.params.id }}) và dùng nó để hiển thị dữ liệu tương ứng.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
        </p>
      </div>
    </div>

    <div v-else class="not-found">
      <h2> Không tìm thấy bài viết!</h2>
      <p>Bài viết có ID {{ $route.params.id }} không tồn tại.</p>
    </div>

    <div class="navigation">
      <router-link :to="{ name: 'BlogList' }" class="back-btn">
        &larr; Quay lại danh sách
      </router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: "BlogPost",
  data() {
    return {
      post: null, // Biến lưu bài viết tìm được
      // Dữ liệu giả lập (Cần giống bên BlogList để đồng bộ)
      allPosts: [
        {
          id: 1,
          title: "Làm quen với Vue Router",
          desc: "Vue Router là thư viện định tuyến chính thức cho Vue.js...",
          author: "Admin",
          date: "06/02/2026",
          image: "https://via.placeholder.com/600x300/42b983/ffffff?text=Vue+Router+Detail"
        },
        {
          id: 2,
          title: "Tìm hiểu về Nested Routes",
          desc: "Hướng dẫn cách tạo các route lồng nhau...",
          author: "FPT Poly",
          date: "05/02/2026",
          image: "https://via.placeholder.com/600x300/35495e/ffffff?text=Nested+Routes+Detail"
        },
        {
          id: 3,
          title: "Bảo vệ Route (Navigation Guards)",
          desc: "Cách sử dụng router.beforeEach để bảo vệ Dashboard...",
          author: "Giảng viên",
          date: "04/02/2026",
          image: "https://via.placeholder.com/600x300/ff5f5f/ffffff?text=Route+Guard+Detail"
        }
      ]
    };
  },
  created() {
    // Khi component được tạo, gọi hàm lấy dữ liệu
    this.getPostDetails();
  },
  watch: {
    // Theo dõi nếu ID trên URL thay đổi (ví dụ user bấm Next Post) thì load lại data
    '$route.params.id': 'getPostDetails'
  },
  methods: {
    getPostDetails() {
      // 1. Lấy ID từ URL (đang là chuỗi string)
      const idFromUrl = parseInt(this.$route.params.id);
      
      // 2. Tìm bài viết trong mảng giả lập khớp với ID
      this.post = this.allPosts.find(p => p.id === idFromUrl);
    }
  }
};
</script>

<style scoped>
.blog-detail-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: left;
}

.post-title {
  color: #2c3e50;
  margin-bottom: 10px;
}

.post-meta {
  color: #7f8c8d;
  font-style: italic;
  margin-bottom: 20px;
}

.post-image {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.post-content {
  line-height: 1.6;
  font-size: 1.1em;
  color: #34495e;
}

.intro {
  font-weight: bold;
  color: #555;
}

.navigation {
  margin-top: 40px;
  text-align: center;
}

.back-btn {
  background-color: #34495e;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s;
}

.back-btn:hover {
  background-color: #2c3e50;
}

.not-found {
  text-align: center;
  color: #c0392b;
  margin-top: 50px;
}
</style>