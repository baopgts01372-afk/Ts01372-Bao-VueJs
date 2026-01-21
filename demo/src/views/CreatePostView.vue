<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card shadow-sm">
          <div class="card-body">
            <h3 class="card-title mb-4">Tạo bài viết mới</h3>
            <form>
              <div class="mb-3">
                <label class="form-label fw-bold">Tiêu đề bài viết</label>
                <input type="text" class="form-control" placeholder="Nhập tiêu đề...">
              </div>
              <div class="mb-3">
                <label class="form-label fw-bold">Hình ảnh (URL)</label>
                <input type="text" class="form-control" placeholder="https://example.com/image.jpg">
              </div>
              <div class="mb-3">
                <label class="form-label fw-bold">Nội dung</label>
                <textarea class="form-control" rows="8" placeholder="Nội dung bài viết..."></textarea>
              </div>
              <div class="d-flex justify-content-end">
                <button type="button" class="btn btn-secondary me-2">Hủy</button>
                <button type="submit" class="btn btn-primary">Đăng bài</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>