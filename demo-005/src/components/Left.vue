<template>
    <div class="left-container">
        <h3>Left 组件 --- {{ count }}</h3>
        <button @click="count += 1">+1</button>
        <button @click="resetCount">重置</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        resetCount() {
            this.count = 0;
        }
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
