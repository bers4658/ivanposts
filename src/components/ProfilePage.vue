<template>
    <div>
        <h1>Это страница поста с ID = {{ $route.params.id }}</h1>
       <h1>{{ $store.state.likes }}</h1>
       <button @click="$store.commit('getProfile')">123</button>
        <div v-for="(profile, index) in $store.state.profile">
            <h1>{{ profile.id }}</h1>
        </div>
            


    </div>
  </template>
  
  <script>
  export default {
    
  }
  </script>
  
  <style scoped>

  </style>