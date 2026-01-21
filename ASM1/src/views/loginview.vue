<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-4">
        <div class="card shadow">
          <div class="card-header bg-primary text-white text-center">
            <h4>Đăng Nhập</h4>
          </div>
          <div class="card-body">
            <form>
              <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" placeholder="Nhập email...">
              </div>
              <div class="mb-3">
                <label class="form-label">Mật khẩu</label>
                <input type="password" class="form-control" placeholder="Nhập mật khẩu...">
              </div>
              <button type="submit" class="btn btn-primary w-100">Đăng nhập</button>
            </form>
          </div>
          <div class="card-footer text-center">
            Chưa có tài khoản? <router-link to="/register">Đăng ký ngay</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>