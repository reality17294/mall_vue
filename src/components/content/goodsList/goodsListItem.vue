<template>
<div class="home-goods-item" @click="itemClick">
    <img :src="items.show.img" alt @load="imgLoad" />

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
        itemClick() {
            this.$router.push("/detail/" + this.items.iid);
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
