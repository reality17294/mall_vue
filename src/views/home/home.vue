<template>
<div id="home">
    <nav-bar class="navbar-home">
        <template v-slot:center>购物街</template>
    </nav-bar>
    <back-to-top @click.native="toTop" v-show="isShowBack"></back-to-top>
    <betterScroll class="wrapper" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pullUp="pullUp">
        <template v-slot>
            <home-swiper :banners="banners"></home-swiper>
            <home-recommend :recommends="recommends"></home-recommend>
            <home-hot :recommends="recommends"></home-hot>
            <home-tab-control class="home-tab-control" @tabClick="tabClick"></home-tab-control>
            <goodsList :goods="goods[currentType].list"></goodsList>
        </template>
    </betterScroll>
</div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import backToTop from "components/common/backToTop/backToTop";
import {
    getHomeData,
    getHomeGoodsData
} from "network/home";
import homeSwiper from "./homeComponents/homeSwiper";
import homeRecommend from "./homeComponents/homeRecommend";
import homeHot from "./homeComponents/homeHot";
import homeTabControl from "./homeComponents/homeTabControl";
// import homeGoodsData from "./homeComponents/homeGoods";
import goodsList from "components/content/goodsList/goodsList";
import betterScroll from "components/common/betterScroll/betterScroll";
export default {
    name: "home",
    data() {
        return {
            banners: [],
            recommends: [],
            goods: {
                pop: {
                    page: 0,
                    list: [],
                },
                new: {
                    page: 0,
                    list: [],
                },
                sell: {
                    page: 0,
                    list: [],
                },
            },
            currentType: "pop",
            isShowBack: false,
        };
    },
    components: {
        NavBar,
        homeSwiper,
        homeRecommend,
        homeHot,
        homeTabControl,
        // homeGoodsData,
        goodsList,
        betterScroll,
        backToTop,
    },
    created() {
        this.getHomeData();
        this.getHomeGoodsData("pop");
        this.getHomeGoodsData("new");
        this.getHomeGoodsData("sell");
    },
    methods: {
        // 事件监听的方法

        // 点击tabControl来决定请求什么数据
        tabClick(index) {
            switch (index) {
                case 0:
                    this.currentType = "pop";
                    break;
                case 1:
                    this.currentType = "new";
                    break;
                case 2:
                    this.currentType = "sell";
                    break;
            }
        },
        toTop() {
            this.$refs.scroll.scroll.scrollTo(0, 0, 1000);
        },
        contentScroll(position) {
            this.isShowBack = -position.y > 1000 ? true : false;
            // console.log(position);
        },
        pullUp() {
            this.getHomeGoodsData(this.currentType);
            this.$refs.scroll.scroll.refresh();
        },

        // 网络请求相关的方法
        // 请求到轮播图的数据
        getHomeData() {
            getHomeData().then((res) => {
                // console.log(res);
                //保存接收的数据
                this.banners = res.data.data.banner.list;
                this.recommends = res.data.data.recommend.list;
            });
        },

        // 请求到goods的数据
        getHomeGoodsData(type) {
            const page = this.goods[type].page + 1;
            getHomeGoodsData(type, page).then((res) => {
                this.goods[type].list.push(...res.data.data.list);
                this.goods[type].page += 1;
                // console.log(this.goods[type].list);
            });
        },
    },
};
</script>

<style scoped>
#home {
    position: relative;

    height: 100vh;
    padding-top: 40px;
}

.navbar-home {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: deeppink;
    color: #fff;
}

.wrapper {
    height: calc(100% - 89px);
}

/*兼容性不好 虽然可以实现控制栏在滚动屏幕时固定
.home-tab-control {
    position: sticky;
    top: 40px;

}*/
</style>
