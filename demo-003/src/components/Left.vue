<template>
    <div class="left-container">
        <h3>Left 组件</h3>
        <hr />
        <!-- v-bind 给自定义属性绑定 -->
        <!-- 此处的9，数据类型是Number -->
        <MyCount :init="9"></MyCount>
    </div>
</template>

<script>
import Count from './Count.vue';
export default {
    components: { Count },
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
/deep/ h5 {
    color: pink;
}
</style>
