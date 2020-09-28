<template>
    <div class="home-hot">

        <img src="~assets/img/home/recommend.jpg" alt="">


    </div>
</template>

<script>
    export default {
        name: "",
        props: {
            recommends: {
                type: Array,
            },
        },
    };
</script>

<style scoped>
    .home-hot {
        width: 100%;
        margin-bottom: 10px;
    }


    img {
        width: 100%;
    }
</style>