<template>
<div class="tab-control">
    <div class="tab-control-item" v-for="(item, index) in titles" :key="index" :class="{ active: index === currentIndex }" @click="btnClick(index)">
        <span>{{ item }}</span>
    </div>
</div>
</template>

<script>
export default {
    name: "",
    data() {
        return {
            currentIndex: 0,
        };
    },
    methods: {
        btnClick(index) {
            this.currentIndex = index;
            this.$emit("tabClick", index);
        },
    },
    props: {
        titles: {
            type: Array,
        },
    },
};
</script>

<style scoped>
.tab-control {
    display: flex;
    border-top: 1px solid red;
}

.tab-control-item {
    flex: 1;
    text-align: center;
    height: 30px;
    line-height: 30px;
}

.active {
    color: red;
}

.active span {
    padding: 3px 5px;
    border-bottom: 2px solid red;
}
</style>
