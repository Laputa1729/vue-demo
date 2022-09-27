<template>
    <div class="app-container">
        <h1>App 根组件 --- {{ countFromSon }}</h1>

        <hr>

        <div class="box">
            <!-- 把 Left 组件和 Right 组件放进来 -->
            <Left :msg="message" :user="userinfo"></Left>
            <Right @numChange="getNewCount"></Right>
        </div>
    </div>
</template>

<script>
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'

export default {
    data() {
        return {
            message: 'Hello 拉普达！',
            userinfo: { name: 'Laputa', age: 18 },
            // 定义 countFromSon 来接收子组件传递过来的数据
            countFromSon: 0
        };
    },
    // 注册私有组件
    components: {
        'Left': Left,
        'Right': Right
    },
    methods: {
        // 子组件触发自定义事件,完成子向父传值
        getNewCount(val) {
            this.countFromSon = val;
        }
    }
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
