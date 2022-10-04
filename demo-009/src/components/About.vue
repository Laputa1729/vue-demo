<template>
    <div class="about-container">
        <h3>About 组件</h3>
        <router-link to="/about/tab1">tab1</router-link>
        <router-link to="/about/tab2">tab2</router-link>

        <hr>

        <!-- 子级路由占位符 -->
        <router-view></router-view>

    </div>
</template>

<script>
export default {
    name: 'About',
    data() {
        return {
        };
    },
};
</script>

<style lang="less" scoped>
.about-container {
    min-height: 200px;
    padding: 15px;
    background-color: skyblue;

    >a {
        margin-right: 10px;
    }
}
</style>
