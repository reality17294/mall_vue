<!--
因为不只是首页需要展示  有一些推荐也需要展示这些东西，所以单独封装 已经成功分离出去了 增强可复用性 
所以这个弃用

<template>
<div class="home-goods">
    <div class="home-goods-item" v-for="(item,index) in goods" :key="index">
        <a :href="item.link">
            <img :src="item.show.img" alt />
        </a>
        <div class="context">{{item.title}}</div>
    </div>
</div>
</template>

<script>
export default {
    name: "",
    props: {
        goods: {
            type: Array,
            default () {
                return [];
            },
        },
    },
};
</script>

<style scoped>
.home-goods-item {
    display: inline-block;
    width: 160px;
    text-align: center;
}

.home-goods-item img {
    width: 90%;
}

.context {
    font-size: 8px;
}
</style>
-->
