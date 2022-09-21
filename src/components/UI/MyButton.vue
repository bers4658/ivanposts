<template>
    <button class="btn">
        <slot></slot>
    </button>
        
    
</template>

<script>
export default {
    name: 'my-button'
}
</script>

<style scoped>
.btn {
    margin: 10px 0px 0px 10px;
    height: 30px;
    background: none;
    color: white;
    border: 1px solid white;
}
</style>