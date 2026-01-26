<template>
  <div>
    <h3>Danh sách bài viết</h3>
    <div 
      v-for="(post, index) in posts" 
      :key="index"
      :class="{ 'border-danger border-3': post.title.length > 20 }"
      :style="{ backgroundColor: post.backgroundColor, color: post.textColor }"
      class="card mb-3 p-3"
    >
      <h4 class="text-success">{{ post.title }}</h4>
      <h6 class="text-danger">{{ post.author }}</h6>
      <p>{{ post.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
};
</script>