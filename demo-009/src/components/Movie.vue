<template>
    <div class="movie-container">
        <h3>Movie 组件 --- {{ 'mid: ' + this.$route.params.mid }} --- {{ mid }}</h3>
        <button @click="showThis">打印 this</button>
    </div>
</template>

<script>
export default {
    name: 'Movie',
    props: ['mid'],
    data() {
        return {
        };
    },
    methods: {
        showThis() {
            console.log(this);
        }
    }
};
</script>

<style lang="less" scoped>
.movie-container {
    min-height: 200px;
    padding: 15px;
    background-color: #ffa07a;
}
</style>
