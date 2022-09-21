<template>
    <div class="main">
        <div v-for="(profile, index) in profiles" :key="profile.id" class="profile">
            <div @click="$router.push(`/profile/${profile.id}`)" style="cursor: pointer">
                <div class="name">
                    {{ profile.user.name }} {{ index }}
                </div>
                <div class="user_name">
                    @{{ profile.user.username }}
                </div>
                <div> 
                    <img class="photo_profile" :src="profile.user.profile_image.small">
                </div>
                <div>
                    <img class="img" :src="profile.urls.small">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                profiles: {}
            }; 
        },
        mounted(){
            this.loadPage()
        },
        methods: {
            loadPage(){
                axios
                .get(`https://api.unsplash.com/photos/?client_id=vSZ88YrTBknu6CphDdw2FVIyBVwNW_ZR3SYuAFMc67c`)
                .then(response => {
                    this.profiles = response.data
                });
            },
        }
    }
</script>

<style>
    .main {
        max-width: 1000px;
        margin: 10px auto 100px auto
    }
    @media(max-width: 1000px ){
        .main{
            max-width: 768px;
        }
    }
    @media(max-width: 768px){
        .main{
            max-width: 480px;
        }
    }
    @media(max-width:480px ){
        .main{
            max-width: 320px;
        }
    }
    
    .profile {
        display: inline-block;
        border: 1px solid;
        margin: 0px 10px 10px 10px;
        width: 440px;
        height: 380px;
    }
    @media(max-width: 1000px){
        .profile{
            width: 320px;
            height: 230px;
        }
    }
    @media(max-width: 768px){
        .profile{
            width: 440px;
            height: 380px;
        }
    }
    @media(max-width: 480px){
        .profile{
            width: 320px;
            height: 230px;
        }
    }
    
    .name{
        position: absolute;
        font-weight: bold;
        float: left;
        margin: 10px 0px 0px 50px;
        color: #333333;
    }
    @media(max-width: 320px){
        .name{
            display: none;
        }
    }
    .user_name{
    position: absolute;
    float: left;
    margin: 27px 0px 0px 50px;
    color: #8D8D8D;
}
    @media(max-width: 320px){
        .user_name{
            display: none;
        }
    }
    .photo_profile{
    float: left;
    margin: 10px;
    border-radius: 100px;
    width: 30px;
    height: 30px;
}
    @media(max-width: 320px){
        .name{
            float: none;
        }
    }

    .img {
        width: 440px;
        height: 300px;
    }
    @media(max-width: 1000px){
        .img{
            width: 320px;
            height: 230px;
        }
    }
    @media(max-width: 768px){
        .img{
            width: 440px;
            height: 300px;
        }
    }
    @media(max-width: 480px){
        .img{
            width: 320px;
            height: 230px;
        }
    }
</style>