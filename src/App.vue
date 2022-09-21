<template>
  <Navbar></Navbar>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'
  import HomePage from './components/HomePage.vue';
  import PostPage from './components/PostPage.vue';

  export default {
    components: { Navbar, HomePage, PostPage }

  }
  </script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
