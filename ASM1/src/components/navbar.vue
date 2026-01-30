<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow-sm">
    <div class="container">
      <router-link class="navbar-brand fw-bold fs-4" to="/">
        <i class="bi bi-journal-text me-2"></i>VueBlog
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto fw-semibold">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Trang chủ</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/create-post">Đăng bài</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/profile">Tài khoản</router-link>
          </li>
          <li class="nav-item ms-lg-3">
            <router-link class="btn btn-light text-primary btn-sm px-3 mt-1" to="/login">Đăng nhập</router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn btn-outline-light btn-sm px-3 mt-1 ms-1" to="/register">Đăng ký</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
</script>