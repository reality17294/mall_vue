<template>
    <div class="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from "better-scroll";
    export default {
        name: "",
        data() {
            return {
                scroll: null,
            };
        },
        props: {
            probeType: {
                type: Number,
                default: 0,
            },
            pullUpLoad: {
                type: Boolean,
                default: false,
            },
        },
        methods: {
            sendData() {
                this.$emit("moreData");
            },
            refresh() {
                this.scroll.refresh();
            },
        },
        mounted() {
            this.scroll = new BScroll(document.querySelector(".wrapper"), {
                probeType: this.probeType,
                pullUpLoad: this.pullUpLoad,
                click: true,
            });
            this.scroll.on("scroll", (position) => {
                this.$emit("scroll", position);
            });
            if (this.pullUpLoad) {
                this.scroll.on("pullingUp", () => {
                    this.$emit("pullUp");
                    setTimeout(() => {
                        this.scroll.finishPullUp();
                    }, 2000);
                });

            }

        },
    };
</script>

<style scoped>
</style>