<template>
    <div class="app-container">
        <h1>App 根组件</h1>

        <hr>

        <div class="box">
            <!-- 把 Left 组件和 Right 组件放进来 -->
            <Left></Left>
            <Right></Right>
        </div>
    </div>
</template>

<script>
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'

export default {
    data() {
        return {
        };
    },
    // 注册私有组件
    components: {
        'Left': Left,
        'Right': Right,
    },
};
</script>

<style lang="less">
.app-container {
    padding: 1px 20px 20px;
    background-color: #efefef;
}

.box {
    display: flex;
}
</style>
