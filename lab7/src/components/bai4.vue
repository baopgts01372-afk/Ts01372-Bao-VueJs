<template>
  <div>
    <LoginComponent v-if="!isLoggedIn" @loggedIn="handleLoginSuccess" />
    
    <CommentComponent v-else :username="loggedInUser" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
// Nhớ import đúng đường dẫn file của bạn
import LoginComponent from './Logincomponent.vue';
import CommentComponent from './CommentComponent.vue';

const isLoggedIn = ref(false);
const loggedInUser = ref('');

// Xử lý sự kiện khi component con báo đăng nhập thành công
function handleLoginSuccess(username) {
  loggedInUser.value = username;
  isLoggedIn.value = true;
}
</script>