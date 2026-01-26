<template>
  <div class="container">
    <h2 class="mb-4 text-center">Bài viết mới nhất</h2>
    <div class="row">
      <div class="col-md-4 mb-4" v-for="n in 6" :key="n">
        <div class="card h-100 shadow-sm">
          <img src="https://via.placeholder.com/350x200" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Tiêu đề bài viết {{ n }}</h5>
            <p class="card-text text-muted">Mô tả ngắn về nội dung bài</p>
          </div>
          <div class="card-footer bg-white d-flex justify-content-between align-items-center">
            <small class="text-muted">Đăng bởi: Admin</small>
            <button class="btn btn-outline-primary btn-sm">Xem chi tiết</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>