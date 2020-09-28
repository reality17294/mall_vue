<template>
    <div class="cart-box">
        <nav-bar class="cart">
            <template v-slot:center>购物车({{cartLength}})</template>
        </nav-bar>

        <better-scroll class="content" ref="scroll">

            <car-list></car-list>

        </better-scroll>
        <cart-bottom-bar></cart-bottom-bar>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";

    import carList from './cartComponents/cartList.vue'
    import cartBottomBar from './cartComponents/cartBottomBar.vue'

    import betterScroll from "components/common/betterScroll/betterScroll";

    export default {
        name: "shopcart",
        components: {
            NavBar,
            carList,
            cartBottomBar,
            betterScroll
        },
        computed: {
            cartLength() {
                return this.$store.state.cartList.length
            }
        },
        activated() {
            this.$refs.scroll.refresh();
        },

    };
</script>

<style scoped>
    .cart-box {
        height: 100vh;
    }

    .cart {
        position: relative;
        top: 0;
        left: 0;
        right: 0;
        z-index: 9;
        color: seashell;
        background-color: rgb(255, 20, 147);
    }

    .content {
        height: calc(100% - 129px);
        overflow: hidden;
    }
</style>