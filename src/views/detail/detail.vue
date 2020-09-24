<template>
    <div id="detail">
        <nav-bar>
            <template v-slot:left>
                <div class="imgBox" @click="back">
                    <img src="~assets/img/common/back.svg" alt="" />
                </div>
            </template>
            <template v-slot:center>
                <div class="box">
                    <div v-for="(item, index) in title" :key="index" class="item" @click="itemClick(index)"
                        :class="{ active: currentIndex === index }">
                        {{ item }}
                    </div>
                </div>
            </template>
        </nav-bar>
        <detail-swiper :topImage="topImage"></detail-swiper>
        <detail-goods-info :goods="goods"></detail-goods-info>
        <detail-shop-info :shop="shop"></detail-shop-info>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import {
        getDetailData,
        Goods,
        Shops
    } from "network/detail.js";
    import detailSwiper from "./detailComponents/detailSwiper.vue";
    import detailGoodsInfo from "./detailComponents/detailGoodsInfo.vue";
    import detailShopInfo from "./detailComponents/detailShopInfo.vue";
    export default {
        name: "detail",
        components: {
            NavBar,
            detailSwiper,
            detailGoodsInfo,
            detailShopInfo
        },
        data() {
            return {
                iid: null,
                title: ["商品", "参数", "详情", "评论"],
                currentIndex: 0,
                topImage: [],
                goods: {},
                shop: {}
            };
        },
        created() {
            this.iid = this.$route.params.iid;
            getDetailData(this.iid).then((res) => {
                console.log(res);
                this.topImage = res.data.result.itemInfo.topImages;
                this.goods = new Goods(
                    res.data.result.itemInfo,
                    res.data.result.columns,
                    res.data.result.shopInfo.services
                );
                this.shop = new Shops(res.data.result.shopInfo)
            });
        },
        methods: {
            itemClick(index) {
                this.currentIndex = index;
            },
            back() {
                this.$router.go(-1);
            },
        },
    };
</script>

<style scoped>
    .imgBox img {
        width: 30%;
        vertical-align: middle;
    }

    .box {
        display: flex;
    }

    .item {
        flex: 1;
        font-size: 14px;
    }

    .active {
        color: red;
    }
</style>