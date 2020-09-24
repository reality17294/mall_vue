<template>
<div id="home">
    <nav-bar class="navbar-home">
        <template v-slot:center>购物街</template>
    </nav-bar>
    <tab-control :titles="['流行', '新品', '热款']" class="tabCalss" v-show="tabShow" @tabClick="tabClick" ref="homeTabControl1"></tab-control>
    <back-to-top @click.native="toTop" v-show="isShowBack"></back-to-top>
    <betterScroll class="wrapper" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pullUp="pullUp">
        <template v-slot>
            <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
            <home-recommend :recommends="recommends"></home-recommend>
            <home-hot :recommends="recommends"></home-hot>
            <tab-control :titles="['流行', '新品', '热款']" @tabClick="tabClick" ref="homeTabControl2"></tab-control>
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
import tabControl from "components/common/tabControl/tabControl";
// import homeGoodsData from "./homeComponents/homeGoods";
import goodsList from "components/content/goodsList/goodsList";
import betterScroll from "components/common/betterScroll/betterScroll";
import {
    debounce
} from "common/util.js";
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
            taboffsetTop: 0,
            tabShow: false,
        };
    },
    components: {
        NavBar,
        homeSwiper,
        homeRecommend,
        homeHot,
        tabControl,
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

            this.$refs.homeTabControl1.currentIndex = index;
            this.$refs.homeTabControl2.currentIndex = index;
        },
        toTop() {
            this.$refs.scroll.scroll.scrollTo(0, 0, 1000);
        },
        contentScroll(position) {
            this.isShowBack = -position.y > 1000 ? true : false;
            this.tabShow = -position.y + 40 > this.taboffsetTop;
        },
        pullUp() {
            this.getHomeGoodsData(this.currentType);
            // this.$refs.scroll.refresh();
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
        swiperImageLoad() {
            this.taboffsetTop = this.$refs.homeTabControl2.$el.offsetTop;
        },
    },
    mounted() {
        // 1.监听图片加载以及防抖
        const refresh = debounce(this.$refs.scroll.refresh, 100);
        this.$bus.$on("itemImgLoad", () => {
            // this.$refs.scroll.refresh();
            refresh();
        });
        // 2. 获取homeTabControl的offsetTop值

        // $el获取组件元素
    },
};
</script>

<style scoped>
#home {
    position: relative;
    padding-top: 40px;
    height: 100vh;
}

.navbar-home {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
    background-color: deeppink;
    color: #fff;
}

.wrapper {
    height: calc(100% - 49px);
}

/*兼容性不好 虽然可以实现控制栏在滚动屏幕时固定
.home-tab-control {
    position: sticky;
    top: 40px;

}*/

.tabCalss {
    overflow: hidden;
    position: absolute;
    top: 40px;
    left: 0;
    right: 0;
    z-index: 9;
    background-color: #fff;
}
</style>
