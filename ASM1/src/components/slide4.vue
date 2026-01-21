<template>
    <div>
        <h1>hien thi ow day</h1>
        <h6 v-html="content" v-bind:style="styleData" v-bind:class="className"></h6>
        <h6 class="red" style="font-size: 5rem">{{ content }}</h6>
    <h2>{{ message }}</h2>
        <h2 v-html="number + 4"></h2>
        <h4>{{ sayhi() }}</h4>
        <button @click="change()">change</button>

    </div>
</template>
<script>
export default {
data() {
    return {
       message : 'xin chao vuejs',
       number: 10,
       className: 'blue',
       styleData: 'font-size: 5rem',
         content: 'day la noi dung ban dau'
    }
},
methods: {
    sayhi() {
        return `Day la phuong thuc `;
    },
    changeContent() {
        this.message = 'day la noi dung moi';
    },
    change() {
        this.content = 'da doi noi dung';
        this.className = 'text-red';

    }
}
}
</script>  
<style>
.red {
    color: red;
}
</style>
<style>
.blue {
    color: blue;
}
</style>
