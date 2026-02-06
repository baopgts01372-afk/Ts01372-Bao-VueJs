<template>
  <div>
    <h1>Bảng điều khiển (Dashboard)</h1>
    <p>Chào mừng bạn đã đăng nhập thành công!</p>
    <button @click="logout">Đăng xuất</button>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem("isAuthenticated");
      this.$router.push({ name: 'Login' });
    }
  }
}
</script>