<template>
    <div class="bottomBar">
        <div class="left-part">
            <cart-button class="button" :class="{'active':isSelect}" @click.native="isSelectedAll"></cart-button>
            <span>全选</span>
        </div>
        <div class="price">
            合计：￥{{totalPrice}}
        </div>
        <div class="clear" @click="pay">
            去结算({{totalProduct}})
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
        methods: {
            isSelectedAll() {
                if (this.isSelect) {
                    // 全部选中，点击变为全不选中
                    this.$store.dispatch('allNoChecked')
                } else {
                    // 有没选中或者全不选中，点击变为全部选中

                    this.$store.dispatch('allChecked')

                }

            },
            pay() {
                if (this.$store.state.cartList.length === 0 || !(this.$store.state.cartList.find(item => item
                        .checked))) {
                    this.$toast.show('请选择商品')
                }
            }
        },

        computed: {
            totalPrice() {
                if (this.$store.state.cartList.length !== 0) {
                    return this.$store.state.cartList.filter(item => item.checked).reduce((pre, item) => {
                        return pre + item.count * item.price
                    }, 0).toFixed(2)
                } else {
                    return 0
                }
            },
            totalProduct() {
                let total = 0
                if (this.$store.state.cartList.filter(item => item.checked)) {
                    for (let i of this.$store.state.cartList.filter(item => item.checked)) {
                        total += i.count
                    }
                }
                return total
            },
            // 当有一个商品的checked为false时就不选中全选按钮
            isSelect() {
                if (this.$store.state.cartList.find(item => !item.checked) || this.$store.state.cartList.length === 0) {
                    return false
                } else {
                    return true
                }
            }
        },

    }
</script>
<style scoped>
    .bottomBar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: fixed;
        left: 0;
        right: 0;
        height: 40px;
        font-size: 14px;
        background-color: #ccc;
    }

    .left-part {
        display: flex;
        margin-left: 5px;
    }

    .button {
        width: 20px;
        height: 20px;
        border-radius: 10px;
    }

    /* .price {
        
    } */

    .clear {
        width: 100px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: aliceblue;
        background-color: red;
    }

    .active {
        background-color: red;
    }
</style>