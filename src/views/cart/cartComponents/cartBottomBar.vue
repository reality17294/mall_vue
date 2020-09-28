<template>
    <div class="bottomBar">
        <div class="left-part">
            <cart-button class="button"></cart-button>
            <span>全选</span>
            <div class="price">
                合计：￥{{totalPrice}}
            </div>


        </div>

    </div>
</template>

<script>
    import cartButton from './cartButton.vue'
    export default {
        name: '',
        components: {
            cartButton
        },
        computed: {
            totalPrice() {
                if (this.$store.state.cartList.length !== 0) {
                    return this.$store.state.cartList.filter(item => item.checked).reduce((pre, item) => {
                        return pre + item.count * item.price
                    }, 0)
                } else {
                    return 0
                }
            }
        }
    }
</script>
<style scoped>
    .bottomBar {
        position: fixed;
        left: 0;
        right: 0;
        height: 40px;
        font-size: 14px;
        background-color: #ccc;
    }

    .left-part {
        display: flex;
        margin: 10px 0 0 10px;
    }

    .button {
        width: 20px;
        height: 20px;
        border-radius: 10px;
        margin-right: 5px;
    }

    .price {
        margin-left: 10px;
    }
</style>