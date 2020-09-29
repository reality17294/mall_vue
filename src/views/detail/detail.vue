<template>
    <div id="detail">
        <nav-bar class="detail-nav">
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
        <back-to-top @click.native="toTop" v-show="isShowBack"></back-to-top>
        <better-scroll class="contentScroll" ref="scroll" :probe-type="3" @scroll="contentScroll ">
            <detail-swiper :topImage="topImage"></detail-swiper>
            <detail-goods-info :goods="goods" ref="goodsInfo"></detail-goods-info>
            <detail-shop-info :shop="shop"></detail-shop-info>
            <detail-infos :detail-info="detailInfo" @imageLoad="imageLoad"></detail-infos>
            <detail-param-info :param-info="paramInfo" ref="param"></detail-param-info>
            <detail-comment-info :commentInfo="commentInfo" ref="comment"></detail-comment-info>
            <detail-recommend ref="recommend"></detail-recommend>
        </better-scroll>
        <detail-bottom-bar @addToCart="addCart"></detail-bottom-bar>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import betterScroll from "components/common/betterScroll/betterScroll";
    import backToTop from 'components/common/backToTop/backToTop'
    import {
        getDetailData,
        Goods,
        Shops,
        GoodsParam
    } from "network/detail.js";
    import {
        debounce
    } from "common/util.js";

    import detailSwiper from "./detailComponents/detailSwiper.vue";
    import detailGoodsInfo from "./detailComponents/detailGoodsInfo.vue";
    import detailShopInfo from "./detailComponents/detailShopInfo.vue";
    import detailInfos from "./detailComponents/detailInfo.vue";
    import detailParamInfo from './detailComponents/detailParamInfo.vue'
    import detailCommentInfo from './detailComponents/detailCommentInfo.vue'
    import detailRecommend from './detailComponents/detailRecommend.vue'
    import detailBottomBar from './detailComponents/detailBottomBar.vue'
    export default {
        name: "detail",
        components: {
            NavBar,
            backToTop,
            detailSwiper,
            detailGoodsInfo,
            detailShopInfo,
            detailInfos,
            detailParamInfo,
            detailCommentInfo,
            detailRecommend,
            detailBottomBar,
            betterScroll,
        },
        data() {
            return {
                isShowBack: false,
                iid: null,
                title: ["商品", "参数", "评论", "推荐"],
                currentIndex: 0,
                topImage: [],
                goods: {},
                shop: {},
                detailInfo: {},
                paramInfo: {},
                commentInfo: {},
                moveOffseTop: [],
                product: {},
                getMoveOffseTop: null,
                toastShow: true
            };
        },
        created() {
            this.iid = this.$route.params.iid;
            getDetailData(this.iid).then((res) => {
                this.topImage = res.data.result.itemInfo.topImages;
                this.goods = new Goods(
                    res.data.result.itemInfo,
                    res.data.result.columns,
                    res.data.result.shopInfo.services
                );
                this.shop = new Shops(res.data.result.shopInfo)
                this.detailInfo = res.data.result.detailInfo
                this.paramInfo = new GoodsParam(res.data.result.itemParams.info, res.data.result.itemParams
                    .rule)
                if (res.data.result.rate.list) {
                    this.commentInfo = res.data.result.rate.list[0];
                }
                this.product.iid = res.data.result.itemInfo.iid
                this.product.desc = res.data.result.itemInfo.desc
                this.product.price = res.data.result.itemInfo.lowNowPrice
                this.product.title = res.data.result.itemInfo.title
                this.product.image = res.data.result.itemInfo.topImages[0]


                const refresh = debounce(this.$refs.scroll.refresh, 100);
                this.$bus.$on("detailItemImgLoad", () => {
                    // this.$refs.scroll.refresh();
                    refresh();
                });
            });
            this.getMoveOffseTop = debounce(() => {
                this.moveOffseTop = []
                this.moveOffseTop.push(0)
                this.moveOffseTop.push(this.$refs.param.$el.offsetTop)
                this.moveOffseTop.push(this.$refs.comment.$el.offsetTop)
                this.moveOffseTop.push(this.$refs.recommend.$el.offsetTop)
            }, 200)
        },
        methods: {
            itemClick(index) {
                this.currentIndex = index;
                // console.log(index);
                this.$refs.scroll.scroll.scrollTo(0, -this.moveOffseTop[index] + 40, 10)
            },
            back() {
                this.$router.go(-1);
            },
            imageLoad() {
                this.$refs.scroll.refresh()
                this.getMoveOffseTop()

            },
            toTop() {
                this.$refs.scroll.scroll.scrollTo(0, 0, 1000);
            },
            contentScroll(position) {
                this.isShowBack = -position.y > 800 ? true : false;

                let positionY = -position.y + 40
                if (positionY >= 0 && positionY < this.moveOffseTop[1]) {
                    this.currentIndex = 0
                } else if (positionY >= this.moveOffseTop[1] && positionY < this.moveOffseTop[2]) {
                    this.currentIndex = 1
                } else if (positionY >= this.moveOffseTop[2] && positionY < this.moveOffseTop[3]) {
                    this.currentIndex = 2
                } else if (positionY > this.moveOffseTop[3]) {
                    this.currentIndex = 3

                }

            },
            addCart() {
                this.$store.dispatch('addCart', this.product).then(res => {
                    this.$toast.show(res)
                })
            }
        },
    };
</script>

<style scoped>
    #detail {
        position: relative;
        z-index: 9;
        background-color: #fff;
        height: 100vh;
    }

    .contentScroll {
        height: calc(100% - 89px);

    }

    .detail-nav {
        position: relative;
        z-index: 9;
        background-color: #fff;
    }

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