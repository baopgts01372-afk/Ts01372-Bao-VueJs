<template>
  <div class="col-sm-6 m-5 mx-auto">
    <h2>Bình luận bài viết</h2>
    <div class="card mb-3">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/800px-Good_Food_Display_-_NCI_Visuals_Online.jpg" class="card-img-top" alt="Hình ảnh" style="height: 200px; object-fit: cover;">
      <div class="card-body">
        <h3 class="card-title">8 loại rau củ quả giàu canxi</h3>
        <p class="card-text">
          Canxi là khoáng chất cần thiết đối với cơ thể người. Có nhiều cách để bổ sung canxi, trong đó bổ sung qua đường ăn uống là cách tốt nhất.
        </p>
      </div>
    </div>

    <form @submit.prevent="submitComment">
      <div class="mt-3 mb-3">
        <textarea class="form-control" v-model="commentText" placeholder="Nhập bình luận của bạn"></textarea>
      </div>
      <button type="submit" class="btn btn-success">Gửi bình luận</button>
    </form>

    <div v-if="comments.length" class="mt-4">
      <h5>Danh sách các bình luận:</h5>
      <ul class="list-group">
        <li class="list-group-item" v-for="(comment, index) in comments" :key="index">
          <p class="mb-0"><strong>{{ comment.name }}</strong>: {{ comment.text }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Nhận username từ component cha
const props = defineProps(['username']);

const commentText = ref('');
const comments = ref([]);

function submitComment() {
  if (commentText.value) {
    comments.value.push({
      name: props.username, // Lấy tên từ props
      text: commentText.value
    });
    commentText.value = ''; // Reset ô nhập
  }
}
</script>