<template>
  <div class="container d-flex justify-content-center align-items-center min-vh-75 mt-5">
    <div class="col-md-5">
      <div class="card border-0 shadow-lg rounded-3 overflow-hidden">
        <div class="card-header bg-primary text-white text-center py-4">
          <h4 class="mb-0 fw-bold">Đăng Nhập</h4>
        </div>
        <div class="card-body p-4 p-md-5">
          <form>
            <div class="form-floating mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
              <label for="floatingInput">Địa chỉ Email</label>
            </div>
            
            <div class="form-floating mb-4">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
              <label for="floatingPassword">Mật khẩu</label>
            </div>

            <div class="d-flex justify-content-between align-items-center mb-4">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="rememberMe">
                <label class="form-check-label text-muted" for="rememberMe">Ghi nhớ tôi</label>
              </div>
              <a href="#" class="text-decoration-none text-primary small">Quên mật khẩu?</a>
            </div>

            <button type="submit" class="btn btn-primary w-100 py-2 fs-5 fw-bold shadow-sm">Đăng nhập</button>
          </form>
        </div>
        <div class="card-footer text-center bg-light py-3">
          <span class="text-muted">Chưa có tài khoản? </span>
          <router-link to="/register" class="text-primary fw-bold text-decoration-none">Đăng ký ngay</router-link>
        </div>
      </div>
    </div>
  </div>
</template>