<template>
    <div class="test-container">
        <h3>Test.vue 组件 --- {{ books.length }} 本书</h3>
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
    // 第 1 个生命周期函数，此阶段 props/data/methods 还不可用
    beforeCreate() {
        // console.log(this.info);
        // console.log(this.message);
        // this.show();
    },
    // 第 2 个生命周期函数，此阶段 props/data/methods 已创建好，可以访问
    // 场景：发起 ajax 请求拿数据
    created() {
        console.log(this.info);
        console.log(this.message);
        this.show();
        this.initBookList();
    },
};
</script>

<style lang="less" scoped>
.test-container {
    background-color: pink;
    height: 200px;
}
</style>