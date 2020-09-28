<template>
    <div class="button" :class="{check:isChecked}">
        <img src="~assets/img/cart/tick.svg" alt="">
    </div>
</template>

<script>
    export default {
        name: '',


        props: {
            isChecked: {
                type: Boolean
            },

        },




    }
</script>
<style scoped>
    .button {
        height: 16px;
        border-radius: 5px;
        border: 1px solid #aaa;

    }

    .check {
        background-color: red;

    }
</style>