<template>
    <div class="right-container">
        <h3>Right 组件</h3>

    </div>
</template>

<script>
export default {
    // 自由配置组件的名称
    name: 'MyRight',  // 这个 name 就是 Vue-Devtools 里看到的标签名称
    data() {
        return {
        }
    },
};
</script>

<style lang="less">
.right-container {
    padding: 0 20px 20px;
    background-color: lightskyblue;
    min-height: 250px;
    flex: 1;
}
</style>