<script>
import {computed} from 'vue';
import {useRoute, useRouter} from 'vue-router';

const route = useRoute();
const router = useRouter();
const search = computed({
    get() {
        return route.query.search ??'';
},
set(search){
    router.replace({query: {search}})
}
})
</script>
<template>
  <h2>About Page</h2>
  <label>
    Search: 
    <input v-model="search" placeholder="20" />
  </label>
  </template>