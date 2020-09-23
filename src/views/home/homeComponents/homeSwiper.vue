<template>
<div>
    <swiper>
        <swiper-item v-for="(item,index) in banners" :key="index">
            <a :href="item.link">
                <img :src="item.image" />
            </a>
        </swiper-item>
    </swiper>
</div>
</template>

<script>
import {
    Swiper,
    SwiperItem
} from "components/common/swiper";
export default {
    name: "",
    props: {
        banners: {
            type: Array,
            defalut() {
                return [];
            },
        },
    },
    components: {
        Swiper,
        SwiperItem,
    },
};
</script>

<style scoped>
.slide img {
    width: 100% !important;
}
</style>
