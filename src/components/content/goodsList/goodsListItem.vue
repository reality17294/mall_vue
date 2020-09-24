<template>
<div class="home-goods-item">
    <a :href="items.link">
        <img :src="items.show.img" alt @load="imgLoad" />
    </a>
    <div class="context">
        <p>{{ items.title }}</p>
        <span>{{ items.price }}</span>
    </div>
</div>
</template>

<script>
export default {
    name: "",
    props: {
        items: {
            type: Object,
            default () {
                return {};
            },
        },
    },
    methods: {
        imgLoad() {
            this.$bus.$emit("itemImgLoad");
        },
    },
};
</script>

<style scoped>
.home-goods-item {
    width: 50%;
    padding: 5px;
    text-align: center;
}

.home-goods-item img {
    width: 100%;
    border-radius: 5px;
}

.context {
    font-size: 8px;
}

.context p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.context span {
    color: red;
}
</style>
