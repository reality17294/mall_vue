<template>
    <div class="goods">
        <goodListItem :items="item" v-for="(item,index) in goods" :key="index"></goodListItem>
    </div>
</template>

<script>
    import goodListItem from "./goodsListItem";
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
        components: {
            goodListItem,
        },
    };
</script>

<style scoped>
    .goods {
        display: flex;
        flex-wrap: wrap;
    }
</style>