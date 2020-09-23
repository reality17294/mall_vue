<template>
<div>
    <nav-bar>
        <template v-slot:center>购物车</template>
    </nav-bar>
</div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
    name: "shopcart",
    components: {
        NavBar,
    },
};
</script>

<style scoped>
</style>
