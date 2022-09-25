<template>
    <div class="left-container">
        <h3>Left 组件</h3>
        <hr />
        <!-- v-bind 给自定义属性绑定 -->
        <MyCount :init="9"></MyCount>
    </div>
</template>

<script>
import Count from "./Count.vue";
export default {
    components: { Count },
};
</script>

<style lang="less">
.left-container {
    padding: 0 20px 20px;
    background-color: orange;
    min-height: 250px;
    flex: 1;
}
</style>