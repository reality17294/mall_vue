<template>
    <goods-list :goods="goods"></goods-list>
</template>

<script>
    import goodsList from "components/content/goodsList/goodsList";
    import {
        getRecommendData
    } from "network/recommend.js";
    export default {
        name: "",
        data() {
            return {
                goods: []
            }

        },
        components: {
            goodsList,
        },
        created() {
            getRecommendData().then((res) => {
                this.goods = res.data.data.list

            });
        },
    };
</script>

<style scoped>
</style>