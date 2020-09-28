<template>
    <div class="cartItem">
        <!-- {{product}}{{$store.state.num}} -->
        <div class="cartButton">
            <cart-button @click.native="checkedChange" :is-checked="product.checked">
            </cart-button>
        </div>
        <div class="img">
            <img :src="product.image" alt="">
        </div>
        <div class="itemInfo">
            <div class="title">{{product.title}}</div>
            <div class="desc">{{product.desc}}</div>
            <span>￥{{product.price}}</span>
        </div>
        <div class="counter">
            X{{product.count}}
        </div>
    </div>
</template>

<script>
    import cartButton from './cartButton.vue'

    export default {
        name: '',
        components: {
            cartButton,
        },
        data() {
            return {
                check: this.product.checked
            }
        },
        props: {
            product: {
                type: Object,
                default () {
                    return {}
                }
            }
        },
        methods: {
            checkedChange() {
                this.$store.dispatch('checkChange', this.product)
                // this.product.checked = !this.product.checked;
                // this.check = this.product.checked
            }
        }


    }
</script>
<style scoped>
    .cartItem {
        position: relative;
        display: flex;
        padding: 10px;
        border-bottom: 1px solid rgba(0, 0, 0, .5);
    }

    .img {
        flex: 3;
        height: 100px;
    }

    .img img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }

    .itemInfo {
        flex: 6;
        padding-left: 10px;

    }

    .title,
    .desc {
        width: 200px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    .desc {
        font-size: 12px;
        color: #cabcbc;
        margin: 10px 0 35px;
    }

    .itemInfo span {
        color: red;
    }

    .counter {
        position: absolute;
        right: 10px;
        bottom: 4px;
    }

    .cartButton {
        padding-right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>