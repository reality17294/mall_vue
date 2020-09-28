<template>
    <div class="goods-item" @click="itemClick">
        <img v-lazy="showImg" alt @load="imgLoad" />

        <div class="context">
            <p>{{ items.title }}</p>
            <span>{{ items.price }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "",

        props: {
            items: {
                type: Object,
                default () {
                    return {};
                },
            },
        },
        computed: {
            showImg() {
                return this.items.image || this.items.show.img
            }
        },
        methods: {
            imgLoad() {

                // 当在详情页引用时，图片加载完不需要向首页发送事件
                if (this.$route.path.indexOf('/home')) {
                    this.$bus.$emit("detailItemImgLoad");
                } else if (this.$route.path.indexOf('/detail')) {
                    this.$bus.$emit("homeItemImgLoad");
                }
            },
            itemClick() {
                if (this.items.item_id) {
                    this.$router.push("/detail/" + this.items.item_id);
                } else {
                    this.$router.push("/detail/" + this.items.iid);

                }
            },
        },
    };
</script>

<style scoped>
    .goods-item {
        width: 50%;
        padding: 5px;
        text-align: center;
    }

    .goods-item img {
        width: 100%;
        border-radius: 5px;
    }

    .context {
        font-size: 8px;
    }

    .context p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .context span {
        color: red;
    }
</style>