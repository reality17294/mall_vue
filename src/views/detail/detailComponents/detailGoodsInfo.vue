<template>
    <div v-if="Object.keys(goods).length !== 0">
        <!-- 不加判断就会报错 -->
        <h4>{{ goods.title }}</h4>

        <div class="price-box">
            <span class="price">{{ goods.price }}</span>
            <span class="oldPrice">{{ goods.oldPrice }}</span>
            <span v-if="goods.discount" class="discount">{{goods.discount}}</span>

        </div>
        <div class="sell-box">
            <div class="sell">{{ goods.columns[0] }}</div>
            <div class="sell">{{ goods.columns[1] }}</div>
            <div class="sell">
                {{ goods.services[goods.services.length - 1].name }}
            </div>
        </div>
        <div class="info-service">
            <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
                <img :src="goods.services[index-1].icon">
                <span>{{goods.services[index-1].name}}</span>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        props: {
            goods: {
                type: Object,
                default () {
                    return {};
                },
            },
        },
    };
</script>

<style scoped>
    h4 {
        padding: 5px;
    }

    .price {
        padding-left: 15px;
        font-size: 20px;
        color: red;
    }

    .oldPrice {
        color: #ccc;
        text-decoration: line-through;
    }

    .sell-box {
        text-align: center;
        display: flex;
    }

    .sell {
        flex: 1;
        justify-content: space-around;
    }

    .discount {
        display: inline-block;
        width: 50px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        margin-left: 5px;
        border-radius: 10px;
        font-size: 12px;
        color: aliceblue;
        background-color: #f13e3a;
    }

    .info-service {
        display: flex;
        justify-content: space-between;
        line-height: 40px;
        border-bottom: 5px solid #f3eaea;
        padding-bottom: 10px;
    }

    .info-service-item img {
        width: 14px;
        height: 14px;
        position: relative;
        top: 2px;
    }

    .info-service-item span {
        font-size: 13px;
        color: #333;
    }
</style>