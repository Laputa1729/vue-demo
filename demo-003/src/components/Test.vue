<template>
    <div class="test-container">
        <h3 id="targetH3">Test.vue 组件 --- {{ books.length }} 本书</h3>
        <p>message 的值是：{{ message }}</p>
        <button @click="message += '~'">修改 message 的值</button>
    </div>
</template>

<script>
export default {
    props: ['info'],
    data() {
        return {
            message: 'Hello World',
            books: [],
        };
    },
    methods: {
        show() {
            console.log('调用了 Test 组件的 show 方法！');
        },
        initBookList() {
            let xhr = new XMLHttpRequest();
            // 使用箭头函数变化 this 指向
            xhr.addEventListener('load', () => {
                let result = JSON.parse(xhr.responseText);
                console.log(result);
                this.books = result.data;
            });
            xhr.open('GET', 'http://www.liulongbin.top:3006/api/getbooks');
            xhr.send();
        },
    },
    // 组件【创建阶段】
    // 1. 第 1 个生命周期函数，此阶段 props/data/methods 还不可用
    beforeCreate() {
        // console.log(this.info);
        // console.log(this.message);
        // this.show();
    },
    // 2. 此阶段 props/data/methods 已创建好，可以访问
    created() {  // ★场景：发起 ajax 请求拿数据
        // console.log(this.info);
        // console.log(this.message);
        this.show();
        this.initBookList();
    },
    // 3. 此阶段，template 已经编译完毕，放在内存中，将要开始渲染dom
    beforeMount() {
    },
    // 4. 此阶段，已把内存中的 html 结构渲染到浏览器中
    mounted() {  // ★场景：最早操作dom
        let dom = document.querySelector('#targetH3');
        console.log(dom);
    },
    // 【运行阶段】
    // 1. 此阶段，数据变化就触发，将要重新渲染dom
    beforeUpdate() {
    },
    // 2. 此阶段，完成了组件 dom 结构的重新渲染
    updated() {  // ★场景：数据最新，dom 也是最新
    },
    // 【销毁阶段】
    // 开始销毁
    beforeDestroy() {
        console.log(this.message)
    },
    // 组件完全移除
    destroyed() {
    }
};
</script>

<style lang="less" scoped>
.test-container {
    background-color: pink;
    height: 200px;
}
</style>