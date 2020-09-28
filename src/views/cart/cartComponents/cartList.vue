<template>
    <div class="cartList">
        <cart-list-item v-for="(item,index) in cartItems" :key="index" :product="item"></cart-list-item>
    </div>
</template>

<script>
    import cartListItem from './cartListItem.vue'
    export default {
        name: '',
        components: {
            cartListItem
        },
        computed: {
            cartItems() {
                return this.$store.state.cartList
            }
        }
    }
</script>
<style scoped>

</style>