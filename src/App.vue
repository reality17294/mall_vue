<template>
    <div id="nav">
        <keep-alive exclude="detail">
            <router-view></router-view>
        </keep-alive>
        <mainTabbar></mainTabbar>
    </div>
</template>

<script>
    import mainTabbar from "components/content/mainTabbar";
    import router from "./router";
    export default {
        components: {
            mainTabbar,
        },


    };

    router.beforeEach((to, from, next) => {

        document.title = to.name;
        next();
    });
</script>

<style lang="less">
    @import "assets/css/base.css";
</style>