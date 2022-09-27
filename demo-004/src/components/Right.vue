<template>
    <div class="right-container">
        <h3>Right 组件 --- {{ count }}</h3>
        <button @click="add">+1</button>

        <hr>

        <p>{{ msgFromLeft }}</p>
    </div>
</template>

<script>
import bus from './eventBus.js'

export default {
    data() {
        return {
            count: 0,  // 实践，把 count 传给父组件
            msgFromLeft: '',
        }
    },
    methods: {
        add() {
            this.count += 1;
            // $emit() 触发自定义事件
            this.$emit('numChange', this.count);
        }
    },
    created() {
        // 为 bus 绑定自定义事件
        bus.$on('share', (val) => {
            console.log('Right 组件中定义的 share 事件被触发了！', val)
            this.msgFromLeft = val;
        })
    }
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