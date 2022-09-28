<template>
    <div class="left-container">
        <h3>Left 组件</h3>

    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
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
