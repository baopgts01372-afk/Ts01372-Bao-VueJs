<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-5">
        <div class="card shadow">
          <div class="card-header bg-success text-white text-center">
            <h4>Đăng Ký Tài Khoản</h4>
          </div>
          <div class="card-body">
            <form>
              <div class="mb-3">
                <label class="form-label">Họ và tên</label>
                <input type="text" class="form-control" placeholder="Nhập họ tên...">
              </div>
              <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" placeholder="Nhập email...">
              </div>
              <div class="mb-3">
                <label class="form-label">Mật khẩu</label>
                <input type="password" class="form-control" placeholder="Nhập mật khẩu...">
              </div>
              <div class="mb-3">
                <label class="form-label">Xác nhận mật khẩu</label>
                <input type="password" class="form-control" placeholder="Nhập lại mật khẩu...">
              </div>
              <button type="submit" class="btn btn-success w-100">Đăng ký</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>