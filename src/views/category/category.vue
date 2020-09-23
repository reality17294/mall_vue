<template>
<div>
    <nav-bar>
        <template v-slot:left>
            <a href="javascript:;">返回</a>
        </template>
        <template v-slot:center>
            <input type="search" placeholder="搜索" />
        </template>
        <template v-slot:right>3</template>
    </nav-bar>
</div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
    name: "category",
    components: {
        NavBar,
    },
};
</script>

<style scoped>
</style>
