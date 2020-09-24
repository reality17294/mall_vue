<template>
<div class="detailSwiper">
    <swiper class="swiper-box">
        <swiper-item v-for="(item, index) in topImage" :key="index">
            <img :src="item" alt="" />
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
    components: {
        Swiper,
        SwiperItem,
    },
    props: {
        topImage: {
            type: Array,
        },
    },
};
</script>

<style scoped>
.swiper-box {
    height: 200px;
    overflow: hidden;
}

.swiper-box img {
    width: 100%;
    height: 100%;
}
</style>
