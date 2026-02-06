// src/utils/storage.js

// --- 1. DỮ LIỆU MẪU (Sẽ tự hiện khi vào web lần đầu) ---
const defaultPosts = [
  {
    id: 1,
    title: "Khám phá vẻ đẹp thiên nhiên Việt Nam",
    image: "https://picsum.photos/id/15/800/400", // Ảnh thác nước hùng vĩ
    content: "Việt Nam có rất nhiều cảnh đẹp từ Bắc chí Nam. Hãy cùng nhau khám phá những địa điểm du lịch nổi tiếng...",
    author: "Admin",
    date: new Date().toISOString(),
    comments: [
      { id: 101, user: "Hùng Lâm", content: "Bài viết rất hay, ảnh đẹp quá!", date: new Date().toISOString() }
    ]
  },
  {
    id: 2,
    title: "Công nghệ VueJS thay đổi lập trình Web",
    image: "https://picsum.photos/id/0/800/400", // Ảnh Laptop làm việc
    content: "VueJS là một Framework mạnh mẽ giúp xây dựng giao diện người dùng tương tác cao một cách dễ dàng...",
    author: "Dev Pro",
    date: new Date().toISOString(),
    comments: [] // Bài này chưa có comment
  },
  {
    id: 3,
    title: "Bí quyết sống khỏe mỗi ngày",
    image: "https://picsum.photos/id/43/800/400", // Ảnh phong cách sống
    content: "Ăn uống điều độ, tập thể dục thường xuyên là chìa khóa để có một cơ thể khỏe mạnh và tinh thần minh mẫn...",
    author: "Health Coach",
    date: new Date().toISOString(),
    comments: []
  }
];

// --- 2. CÁC HÀM XỬ LÝ (LOGIC) ---

export const getUsers = () => JSON.parse(localStorage.getItem('users')) || [];

export const registerUser = (user) => {
  const users = getUsers();
  if (users.find(u => u.email === user.email)) return { success: false, message: 'Email đã tồn tại!' };
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
  return { success: true };
};

export const loginUser = (email, password) => {
  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    return { success: true, user };
  }
  return { success: false, message: 'Sai email hoặc mật khẩu!' };
};

export const getCurrentUser = () => JSON.parse(localStorage.getItem('currentUser'));

export const logoutUser = () => {
  localStorage.removeItem('currentUser');
  window.location.reload();
};

// --- QUẢN LÝ BÀI VIẾT ---

export const getPosts = () => {
  const posts = localStorage.getItem('posts');
  // NẾU CHƯA CÓ BÀI NÀO -> LẤY DỮ LIỆU MẪU Ở TRÊN LƯU VÀO
  if (!posts) {
    localStorage.setItem('posts', JSON.stringify(defaultPosts));
    return defaultPosts;
  }
  return JSON.parse(posts);
};

export const getPostById = (id) => {
  const posts = getPosts();
  return posts.find(p => p.id == id);
};

export const addPost = (post) => {
  const posts = getPosts();
  const newPost = {
    ...post,
    id: Date.now(), // ID tự sinh theo thời gian (để không trùng ID 1, 2, 3)
    date: new Date().toISOString(),
    comments: []
  };
  posts.unshift(newPost); // Thêm bài mới lên đầu danh sách
  localStorage.setItem('posts', JSON.stringify(posts));
};

export const addComment = (postId, content, userName) => {
  const posts = getPosts();
  const index = posts.findIndex(p => p.id == postId);
  
  if (index !== -1) {
    // Đảm bảo mảng comments luôn tồn tại
    if (!posts[index].comments) posts[index].comments = [];

    posts[index].comments.push({
      id: Date.now(),
      user: userName,
      content,
      date: new Date().toISOString()
    });
    localStorage.setItem('posts', JSON.stringify(posts));
  }
};