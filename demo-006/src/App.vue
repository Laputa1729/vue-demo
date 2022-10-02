<template>
    <div class="app-container">
        <h1>App 根组件</h1>

        <hr>

        <button @click="compName = 'Left'">展示 Left</button>
        <button @click="compName = 'MyRight';">展示 Right</button>

        <div class="box">
            <!-- 把 Left 组件和 Right 组件放进来 -->
            <keep-alive exclude="MyRight">
                <component :is="compName"></component>
            </keep-alive>
        </div>
    </div>
</template>

<script>
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'

export default {
    data() {
        return {
            compName: 'Left',
        };
    },
    // 注册私有组件
    components: {
        'Left': Left,
        'MyRight': Right
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
