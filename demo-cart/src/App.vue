<template>
    <div class="app-container">
        <Header></Header>
        <h1>App 根组件</h1>

    </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'

export default {
    data() {
        return {
        };
    },
    // 注册私有组件
    components: {
        'Header': Header
    },
};
</script>

<style lang="less" scoped>
.app-container {
    position: relative;
    padding-top: 45px;
    padding-bottom: 50px;
}
</style>
