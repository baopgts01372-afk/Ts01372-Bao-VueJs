<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card shadow">
          <div class="card-header bg-warning text-white">
            <h4 class="mb-0">Chỉnh sửa bài viết (ID: {{ postId }})</h4>
          </div>
          <div class="card-body">
            <form @submit.prevent="updatePost">
              <div class="mb-3">
                <label class="form-label fw-bold">Tiêu đề bài viết</label>
                <input type="text" class="form-control" v-model="post.title">
              </div>
              
              <div class="mb-3">
                <label class="form-label fw-bold">Hình ảnh (URL)</label>
                <input type="text" class="form-control" v-model="post.image">
                <img :src="post.image" v-if="post.image" class="mt-2 rounded" style="height: 150px">
              </div>

              <div class="mb-3">
                <label class="form-label fw-bold">Nội dung</label>
                <textarea class="form-control" rows="6" v-model="post.content"></textarea>
              </div>

              <div class="d-flex justify-content-end gap-2">
                <router-link to="/" class="btn btn-secondary">Hủy</router-link>
                <button type="submit" class="btn btn-primary">Lưu cập nhật</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

// Lấy ID từ URL (ví dụ: /edit-post/1 -> postId = 1)
const postId = route.params.id;

// Biến chứa dữ liệu bài viết
const post = ref({
  title: '',
  image: '',
  content: ''
});

// Giả lập việc lấy dữ liệu cũ lên form khi vừa vào trang
onMounted(() => {
  // Ở thực tế: Gọi API lấy chi tiết bài viết theo postId
  // Ở đây: Mình gán cứng dữ liệu giả để test giao diện
  post.value = {
    title: 'Bài viết số ' + postId,
    image: 'https://via.placeholder.com/600x300',
    content: 'Nội dung bài viết cũ đang hiển thị ở đây để bạn sửa...'
  };
});

const updatePost = () => {
  // Logic gọi API cập nhật sẽ viết ở đây
  alert('Đã cập nhật bài viết thành công!');
  router.push('/'); // Quay về trang chủ
}
</script>