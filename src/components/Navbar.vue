<template>
    <div class="navbar">
       <my-button @click="$router.push('/')">Главная</my-button>
       <my-button @click="$router.push('/posts')">Посты</my-button>
    </div>
</template>

<script>
import MyButton from './UI/MyButton.vue';
    export default {
    components: { MyButton }
}
</script>

<style>
    .navbar {
        height: 50px;
        background-color: #333;
        box-shadow: 2px 2px 4px gray;
    }
</style>