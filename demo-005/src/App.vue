<template>
    <div class="app-container">
        <h1 ref="myH1">App 根组件</h1>
        <button @click="showThis">打印 this</button>
        <button @click="resetComLeft">重置 Left 组件的 count</button>
        <hr>

        <input type="text" @blur="showButton" ref="iptRef" v-if="inputVisible">
        <button @click="showInput" v-else>展示输入框</button>

        <hr>
        <div class="box">
            <!-- 把 Left 组件和 Right 组件放进来 -->
            <Left ref="comLeft"></Left>
        </div>
    </div>
</template>

<script>
import Left from '@/components/Left.vue'

export default {
    data() {
        return {
            inputVisible: false
        };
    },
    // 注册私有组件
    components: {
        'Left': Left
    },
    methods: {
        showInput() {
            this.inputVisible = true;  // 布尔值变成 true，但是 dom 还没更新，故，this.$refs.iptRef 拿不到东西，为 undefined
            // this.$refs.iptRef.focus();  // TypeError: Cannot read properties of undefined (reading 'focus')

            // 暂不使用 lifecycle，演示 this.$nextTick(callback) 的用法
            // 在下次 dom 更新完毕后执行延迟回调
            // 在修改数据之后立即使用这个方法，获取更新后的 dom
            this.$nextTick(() => {
                this.$refs.iptRef.focus();
            });
            // 为什么不用 lifecycle => updated ？
        },
        showButton() {
            this.inputVisible = false;
        },
        showThis() {
            console.log(this);
            console.log(this.$refs.myH1);
            this.$refs.myH1.style.color = 'red';
        },
        resetComLeft() {
            this.$refs.comLeft.resetCount();
        }
    },
    updated() {
        // 当this.inputVisible 变成 false，又触发了一次 updated
        // 因为 v-if 的原因，this.$refs.iptRef 又拿不到东西，导致报错
        // this.$refs.iptRef.focus();
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
