<template>
  <div>
    <h1>Đăng nhập</h1>
    <button @click="login">Đăng nhập ngay</button>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      // 1. Giả lập lưu trạng thái đăng nhập
      localStorage.setItem("isAuthenticated", "true");
      alert("Đăng nhập thành công!");
      
      // 2. Chuyển hướng đến Dashboard bằng lập trình [cite: 44, 157, 162]
      this.$router.push({ name: 'Dashboard' });
    }
  }
}
</script>