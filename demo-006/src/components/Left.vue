<template>
    <div class="left-container">
        <h3>Left 组件 --- {{ count }}</h3>

        <button @click="count++">+1</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0
        }
    },
    created() {
        console.log('Left 组件被创建了！');
    },
    destroyed() {
        console.log('Left 组件被销毁了~~~！');
    },
    // 被 <keep-alive> 标签包裹的组件，才可以使用这两个生命周期函数
    // 激活
    activated() {
        console.log('Left 组件被激活了，activated')
    },
    // 缓存
    deactivated() {
        console.log('Left 组件被缓存了，deactivated')
    }
};
</script>

<style lang="less" scoped>
.left-container {
    padding: 0 20px 20px;
    background-color: orange;
    min-height: 250px;
    flex: 1;
}

h3 {
    color: red;
}

/* 配置 deep 使父组件的样式覆盖到子组件 */
/* 可应用于修改第三方组件的样式的场景 */
:deep(h5) {
    color: pink;
}
</style>
