<template>
    <div class="home-container">
        <h3>Home 组件</h3>

        <hr>

        <button @click="gotoTokyo">跳到 “东京爱情故事”</button>

        <hr>

        <router-link to="/main">访问 Main</router-link>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
        };
    },
    methods: {
        gotoTokyo() {
            this.$router.push('/movie/1')
        }
    }
};
</script>

<style lang="less" scoped>
.home-container {
    min-height: 200px;
    padding: 15px;
    background-color: pink;
}
</style>
