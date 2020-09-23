<template>
<div class="home-recommend">
    <div v-for="(item,index) in recommends" class="recommend-items" :key="index">
        <a :href="item.link">
            <img :src="item.image" alt />
        </a>
        <div>{{item.title}}</div>
    </div>
</div>
</template>

<script>
export default {
    name: "",
    props: {
        recommends: {
            type: Array,
            defalut() {
                return [];
            },
        },
    },
};
</script>

<style scoped>
.home-recommend {
    display: flex;
    border-bottom: 10px solid #ccc;
}

.recommend-items {
    flex: 1;
    font-size: 12px;
    text-align: center;
    margin-bottom: 20px;
}

.recommend-items img {
    width: 80%;
    margin-top: 5px;
}
</style>
