<template>
<Tabbar>
    <template v-slot:one>
        <TabbarItem path="/home">
            <template v-slot:icon>
                <img src="~assets/img/tabbar/home.svg" alt />
            </template>
            <template v-slot:icon-actived>
                <img src="~assets/img/tabbar/home_active.svg" alt />
            </template>
            <template v-slot:content>
                <div>首页</div>
            </template>
        </TabbarItem>
        <TabbarItem path="/category">
            <template v-slot:icon>
                <img src="~assets/img/tabbar/category.svg" alt />
            </template>
            <template v-slot:icon-actived>
                <img src="~assets/img/tabbar/category_active.svg" alt />
            </template>
            <template v-slot:content>
                <div>分类</div>
            </template>
        </TabbarItem>
        <TabbarItem path="/shopcart">
            <template v-slot:icon>
                <img src="~assets/img/tabbar/shopcart.svg" alt />
            </template>
            <template v-slot:icon-actived>
                <img src="~assets/img/tabbar/shopcart_active.svg" alt />
            </template>
            <template v-slot:content>
                <div>购物车</div>
            </template>
        </TabbarItem>
        <TabbarItem path="/profile">
            <template v-slot:icon>
                <img src="~assets/img/tabbar/profile.svg" alt />
            </template>
            <template v-slot:icon-actived>
                <img src="~assets/img/tabbar/profile_active.svg" alt />
            </template>
            <template v-slot:content>
                <div>我的</div>
            </template>
        </TabbarItem>
    </template>
</Tabbar>
</template>

<script>
import Tabbar from "components/common/tabbar/Tabbar";
import TabbarItem from "components/common/tabbar/TabbarItem";
export default {
    name: "",
    components: {
        Tabbar,
        TabbarItem,
    },
};
</script>

<style scoped>
.bar-items {
    flex: 1;
    height: 49px;
    text-align: center;
    font-size: 14px;
}

.bar-items img {
    width: 25px;
    height: 25px;
    margin-top: 3px;
    vertical-align: middle;
}
</style>
