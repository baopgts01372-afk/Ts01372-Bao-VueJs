<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-sm-4">
        <h3>{{ isEditing ? 'Cập nhật học sinh' : 'Thêm học sinh' }}</h3>
        <form @submit.prevent="submitForm">
          <div class="mb-3 mt-3">
            <label for="name">Họ tên:</label>
            <input 
              type="text" 
              class="form-control" 
              v-model="student.name" 
              id="name" 
              required 
            />
          </div>
          
          <div class="mb-3">
            <label for="score">Điểm:</label>
            <input 
              type="number" 
              max="10" 
              min="0" 
              class="form-control" 
              v-model="student.score" 
              id="score" 
              required 
            />
          </div>
          
          <div class="mb-3">
            <label for="dob">Ngày sinh:</label>
            <input 
              type="date" 
              class="form-control" 
              v-model="student.dob" 
              id="dob" 
              required 
            />
          </div>
          
          <button type="submit" class="btn" :class="isEditing ? 'btn-primary' : 'btn-success'">
            {{ isEditing ? 'Cập nhật' : 'Thêm' }}
          </button>
          
          <button 
            type="button" 
            class="btn btn-secondary ms-2" 
            v-if="isEditing" 
            @click="resetForm"
          >Hủy</button>
        </form>
      </div>

      <div class="col-sm-8">
        <h3>Danh sách học sinh</h3>
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Họ và tên</th>
              <th>Điểm</th>
              <th>Ngày sinh</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(stu, index) in students" :key="index">
              <td>{{ stu.name }}</td>
              <td>{{ stu.score }}</td>
              <td>{{ stu.dob }}</td>
              <td>
                <button class="btn btn-warning btn-sm me-2" @click="editStudent(index)">Sửa</button>
                <button class="btn btn-danger btn-sm" @click="deleteStudent(index)">Xóa</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Dữ liệu mẫu ban đầu [cite: 182-185]
const students = ref([
  { name: 'Nguyễn Chí Hùng', score: 8, dob: '2006-01-01' },
  { name: 'Phạm Thị Lan', score: 9, dob: '2006-05-15' }
]);

// Biến quản lý form [cite: 187]
const student = ref({
  name: '',
  score: null,
  dob: ''
});

// Trạng thái chỉnh sửa
let isEditing = ref(false);
let editingIndex = ref(null);

// Hàm xử lý gửi form (Thêm hoặc Sửa) [cite: 198]
function submitForm() {
  if (isEditing.value) {
    // Cập nhật thông tin học sinh
    // Sử dụng spread operator (...) để copy giá trị mới vào mảng
    students.value[editingIndex.value] = { ...student.value };
    isEditing.value = false;
    editingIndex.value = null;
  } else {
    // Thêm học sinh mới [cite: 206]
    students.value.push({ ...student.value });
  }
  // Reset form sau khi submit
  resetForm();
}

// Hàm chuẩn bị dữ liệu để sửa [cite: 212]
function editStudent(index) {
  // Copy dữ liệu từ danh sách vào form
  student.value = { ...students.value[index] };
  isEditing.value = true;
  editingIndex.value = index;
}

// Hàm xóa học sinh [cite: 217]
function deleteStudent(index) {
  if(confirm('Bạn có chắc muốn xóa học sinh này không?')) {
    students.value.splice(index, 1);
  }
}

// Hàm làm mới form [cite: 220]
function resetForm() {
  student.value = {
    name: '',
    score: null,
    dob: ''
  };
  isEditing.value = false;
  editingIndex.value = null;
}
</script>