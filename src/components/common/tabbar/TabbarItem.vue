<template>
<div class="bar-items" @click="itemClick">
    <div v-if="!isActive">
        <slot name="icon"></slot>
    </div>
    <div v-else>
        <slot name="icon-actived"></slot>
    </div>
    <div :class="{active:isActive}">
        <slot name="content"></slot>
    </div>
</div>
<!--<div class="bar-items">
    <img src="../../assets/img/tabbar/home.svg" alt />
    <div>首页</div>
</div>
<div class="bar-items">
    <img src="../../assets/img/tabbar/home.svg" alt />
    <div>分类</div>
</div>
<div class="bar-items">
    <img src="../../assets/img/tabbar/home.svg" alt />
    <div>购物车</div>
</div>
<div class="bar-items">
    <img src="../../assets/img/tabbar/home.svg" alt />
    <div>我的</div>
  </div>-->
</template>

<script>
export default {
    name: "",
    data() {
        return {};
    },
    computed: {
        isActive() {
            return this.$route.path.indexOf(this.path) !== -1;
        },
    },
    props: {
        path: String,
    },
    methods: {
        itemClick() {
            this.$router.replace(this.path);
        },
    },
};
</script>

<style scoped>
.active {
    color: red;
}
</style>
