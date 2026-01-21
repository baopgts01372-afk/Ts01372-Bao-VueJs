<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
    <div class="container">
      <router-link class="navbar-brand" to="/">Vue Blog</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Trang chủ</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/create-post">Đăng bài</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/profile">Tài khoản</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Đăng nhập</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/register">Đăng ký</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>