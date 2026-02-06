<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getPostById, addComment, getCurrentUser } from '../utils/storage';

const route = useRoute();
const post = ref(null);
const comment = ref('');
const user = ref(null);
const isLoading = ref(true); // Thêm biến trạng thái loading

const load = () => {
  const id = route.params.id;
  // Giả lập độ trễ nhẹ để tránh lỗi render quá nhanh
  setTimeout(() => {
    post.value = getPostById(id);
    user.value = getCurrentUser();
    isLoading.value = false; // Tắt loading khi tìm xong
  }, 100);
};

onMounted(load);

const sendComment = () => {
  if(!comment.value.trim()) return;
  
  if(user.value) {
    addComment(post.value.id, comment.value, user.value.name);
    comment.value = '';
    
    // Cập nhật lại dữ liệu ngay lập tức
    post.value = getPostById(route.params.id); 
  } else {
    alert("Vui lòng đăng nhập lại!");
  }
};
</script>

<template>
  <div class="container mt-5 mb-5">
    
    <div v-if="isLoading" class="text-center py-5">
      <div class="spinner-border text-primary" role="status"></div>
      <p class="mt-2 text-muted">Đang tải bài viết...</p>
    </div>

    <div v-else-if="!post" class="text-center py-5 alert alert-danger">
      <h3>⚠️ Không tìm thấy bài viết!</h3>
      <p>Có thể bài viết đã bị xóa hoặc đường dẫn không đúng.</p>
      <router-link to="/" class="btn btn-primary">Quay về trang chủ</router-link>
    </div>

    <div v-else>
      <div class="card border-0 shadow-sm mb-5">
        <img :src="post.image || 'https://via.placeholder.com/800x400?text=No+Image'" 
             class="card-img-top" 
             style="max-height: 500px; object-fit: cover;"
             @error="$event.target.src='https://via.placeholder.com/800x400?text=Image+Error'">
             
        <div class="card-body p-4 p-lg-5">
          <h1 class="fw-bold display-5 mb-3">{{ post.title }}</h1>
          
          <div class="d-flex align-items-center mb-4 text-muted border-bottom pb-3">
              <div class="d-flex align-items-center me-4">
                 <div class="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-2" style="width: 40px; height: 40px; font-weight: bold;">
                    {{ post.author.charAt(0).toUpperCase() }}
                 </div>
                 <span>{{ post.author }}</span>
              </div>
              <div>
                <i class="bi bi-calendar3 me-2"></i> 
                {{ new Date(post.date).toLocaleDateString('vi-VN') }}
              </div>
          </div>
          
          <div class="lead text-dark" style="line-height: 1.8; white-space: pre-wrap;">{{ post.content }}</div>
        </div>
      </div>

      <div class="card border-0 shadow-sm p-4 bg-light rounded-3">
        <h4 class="fw-bold mb-4 text-primary">
          <i class="bi bi-chat-dots-fill me-2"></i>Bình luận ({{ post.comments ? post.comments.length : 0 }})
        </h4>
        
        <div v-if="post.comments && post.comments.length > 0">
          <ul class="list-unstyled">
            <li v-for="(cmt, index) in post.comments" :key="index" class="mb-3 p-3 bg-white rounded shadow-sm border-start border-4 border-primary">
                <div class="d-flex justify-content-between mb-1">
                  <strong class="text-dark">{{ cmt.user }}</strong>
                  <small class="text-muted">{{ new Date(cmt.date).toLocaleString('vi-VN') }}</small>
                </div>
                <p class="mb-0 text-secondary">{{ cmt.content }}</p>
            </li>
          </ul>
        </div>
        <div v-else class="text-center text-muted fst-italic my-4">
          Chưa có bình luận nào. Hãy là người đầu tiên!
        </div>

        <div v-if="user" class="mt-4">
          <label class="form-label fw-bold">Gửi bình luận của bạn:</label>
          <div class="input-group shadow-sm">
            <input v-model="comment" type="text" class="form-control form-control-lg" placeholder="Nhập nội dung..." @keyup.enter="sendComment">
            <button @click="sendComment" class="btn btn-primary px-4 fw-bold">
              <i class="bi bi-send-fill me-1"></i> Gửi
            </button>
          </div>
        </div>

        <div v-else class="alert alert-warning mt-4 d-flex align-items-center shadow-sm">
          <i class="bi bi-exclamation-circle-fill fs-4 me-3"></i>
          <div>
            Bạn cần <strong><router-link to="/login">Đăng nhập</router-link></strong> để tham gia bình luận bài viết này.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>