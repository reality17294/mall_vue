<template>
    <div id="tab-bar">
        <slot name="one"></slot>
    </div>
</template>

<script>
    export default {
        name: "",
    };
</script>

<style scoped>
    #tab-bar {
        display: flex;
        position: fixed;
        left: 0;
        right: 0;
        bottom: -2px;
        box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.5);
        background-color: #f6f6f6;
    }
</style>