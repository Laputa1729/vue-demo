<template>
    <div class="app-container">
        <h1>App 根组件</h1>

        <!-- <a href="#/home">首页</a> -->
        <!-- <a href="#/movie">电影</a> -->
        <!-- <a href="#/about">关于</a> -->

        <!-- 当安装和配置了 vue-router 以后，就可以使用 router-link -->
        <router-link to="/home">首页</router-link>
        <!-- /1,/2,/3 这种形式是【路径参数】 -->
        <router-link to="/movie/1">东京爱情故事</router-link>
        <!-- /?name=zs&age=20 这种形式是【query参数】 -->
        <router-link to="/movie/2?name=zs&age=20">悠长假期</router-link>
        <router-link to="/movie/3">恋爱世纪</router-link>
        <router-link to="/about">关于</router-link>

        <hr>

        <!-- vue-router 提供的标签，占位符 -->
        <router-view></router-view>

    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    // 注册私有组件
    components: {
    },
};
</script>

<style lang="less" scoped>
.app-container {
    margin: 10px;
    padding: 15px;
    background-color: #efefef;
    overflow: hidden;

    >a {
        margin-right: 10px;
    }
}
</style>
