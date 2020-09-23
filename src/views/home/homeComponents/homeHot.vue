<template>
<div class="home-hot">
    <div class="title">本周流行</div>

    <ul>
        <li v-for="(item,index) in recommends" :key="index">
            <div class="itembox">
                <a :href="item.link">
                    <img :src="item.image" alt />
                    <div>精美</div>
                </a>
            </div>
        </li>
    </ul>
    <ul>
        <li v-for="(item,index) in recommends" :key="index">
            <div class="itembox">
                <a :href="item.link">
                    <img :src="item.image" alt />
                    <div>精美</div>
                </a>
            </div>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: "",
    props: {
        recommends: {
            type: Array,
        },
    },
};
</script>

<style scoped>
.title {
    width: 100%;
    padding: 10px 0;
    text-align: center;
}

.home-hot {
    margin-bottom: 20px;
}

.home-hot ul {
    display: flex;
}

.home-hot .itembox {
    width: 80px;
    text-align: center;
    margin-bottom: 3px;
}

.home-hot ul li img {
    width: 75%;
}
</style>
