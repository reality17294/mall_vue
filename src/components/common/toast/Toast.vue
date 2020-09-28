<template>
    <div class="toast" v-show="isShow">
        <div> {{message}}</div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                message: '',
                isShow: false
            }
        },
        methods: {
            show(message, duration = 1500) {
                this.isShow = true
                this.message = message
                setTimeout(() => {
                    this.isShow = false
                    this.message = ''
                }, duration)
            }
        }
    }
</script>
<style scoped>
    .toast {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 250px;
        height: 60px;
        z-index: 999;
        text-align: center;
        line-height: 60px;
        color: seashell;
        background-color: rgba(0, 0, 0, .6);
    }
</style>