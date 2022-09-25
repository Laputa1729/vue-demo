<template>
    <div>
        <div class="test-box">
            <h1>这是 Test 组件。{{ username }}</h1>
            <button @click="changeName">修改用户名</button>
        </div>
        <div>123</div>
    </div>
</template>

<script>
export default {
    // data 数据源
    // 注意：.vue 组件中的 data 不能像之前一样，写成对象形式
    // 注意：组件中的 data 必须是一个函数
    data: function () {
        // 这个 return 出去的对象，就是数据源
        return {
            username: 'Laputa',
        };
    },
    methods: {
        changeName() {
            console.log(this);
            this.username = 'Laputa132';
        },
    },
    // 监听器
    watch: {},
    // 计算属性
    computed: {},
    // 私有过滤器
    filters: {},
};
</script>

<style lang="less">
.test-box {
    background-color: pink;
    h1 {
        color: red;
    }
}
</style>
