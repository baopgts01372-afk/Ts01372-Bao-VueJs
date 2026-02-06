<template>
  <div id="app">
    <nav>
      <router-link :to="{ name: 'Home' }">Home</router-link> |
      <router-link :to="{ name: 'BlogList' }">Blog</router-link> |
      <router-link to="/me">Profile (Alias /me)</router-link> | 
      <router-link :to="{ name: 'Dashboard' }">Dashboard (Protected)</router-link> |
      <router-link :to="{ name: 'Login' }">Login</router-link>
    </nav>
    <hr>
    <router-view/>
  </div>
</template>

<style>
nav { padding: 30px; }
nav a { font-weight: bold; color: #2c3e50; margin: 0 10px; }
nav a.router-link-exact-active { color: #42b983; }
</style>