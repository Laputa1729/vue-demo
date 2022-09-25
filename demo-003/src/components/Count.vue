<template>
    <div>
        <h5>Count 组件</h5>
        <p>count 的值：{{ count }}</p>
        <button @click="add">+1</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: this.init, // 调用者，通过配自定义属性，传个[初始值]过来
        };
    },
    // props 是自定义属性，允许使用者通过自定义属性，为当前组件指定初始值
    // props 中的数据，可以直接在模板中使用
    // props 中的数据是[只读]的。
    props: ["init"],
    methods: {
        add() {
            this.count++;
        },
        test: function () {
            console.log("stack test");
        },
    },
};
</script>

<style lang="less">
</style>