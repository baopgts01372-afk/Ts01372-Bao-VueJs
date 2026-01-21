<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-4 text-center">
        <div class="card shadow-sm mb-3">
          <div class="card-body">
            <img src="https://via.placeholder.com/150" class="rounded-circle mb-3" alt="Avatar">
            <h4>Nguyễn Văn A</h4>
            <p class="text-muted">nguyenvana@example.com</p>
            <button class="btn btn-outline-primary btn-sm">Đổi ảnh đại diện</button>
          </div>
        </div>
      </div>
      
      <div class="col-md-8">
        <div class="card shadow-sm">
          <div class="card-header bg-white">
            <h5 class="mb-0">Cập nhật thông tin</h5>
          </div>
          <div class="card-body">
            <form>
              <div class="row mb-3">
                <div class="col-md-6">
                  <label class="form-label">Họ tên</label>
                  <input type="text" class="form-control" value="Nguyễn Văn A">
                </div>
                <div class="col-md-6">
                  <label class="form-label">Email</label>
                  <input type="email" class="form-control" value="nguyenvana@example.com" disabled>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label">Mật khẩu mới</label>
                <input type="password" class="form-control" placeholder="Để trống nếu không đổi">
              </div>
              <button type="submit" class="btn btn-primary">Lưu thay đổi</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>