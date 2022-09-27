<template>
    <div class="left-container">
        <h3>Left 组件</h3>
        <p>msg的值：{{ msg }}</p>
        <p>user的值：{{ user }}</p>

        <hr>

        <button @click="sendMsg">把诗发给 Right</button>
    </div>
</template>

<script>
import bus from './eventBus.js'

export default {
    props: ['msg', 'user'],  // [只读]
    data() {
        return {
            str: `醉里挑灯看剑！`
        }
    },
    methods: {
        sendMsg() {
            // 通过 eventBus 来发送数据
            bus.$emit('share', this.str);
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
