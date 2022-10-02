<template>
    <div class="number-container d-flex justify-content-center align-items-center">
        <!-- 减 1 的按钮 -->
        <button type="button" class="btn btn-light btn-sm" @click="sub">-</button>
        <!-- 购买的数量 -->
        <span class="number-box">{{ num }}</span>
        <!-- 加 1 的按钮 -->
        <button type="button" class="btn btn-light btn-sm" @click="add">+</button>
    </div>
</template>

<script>
import bus from '@/components/eventBus.js';

export default {
    props: {
        // 接收商品的id，将来使用eventBus方案，把数量传递到app.vue的时候，需要通知App组件，更新哪个商品的数量
        // id: {
        //     required: true,
        //     type: Number,
        // },
        num: {
            default: 1,
            type: Number,
        },
    },
    methods: {
        // 点击按钮，数值加1
        add() {
            // 要发送给App的数据，id是商品的id，value是商品的数量
            // const obj = {
            //     id: this.id,
            //     value: this.num + 1,
            // }
            // 通过eventBus把obj对象发送给App.vue组件
            // bus.$emit('share', obj);

            // =================================================================

            // 通过自定义事件，把最新的数据发给父组件 App.vue
            this.$emit('num-change', this.num + 1);
        },
        // 点击按钮，数值减1
        sub() {
            if (this.num - 1 === 0) return;
            // const obj = {
            //     id: this.id,
            //     value: this.num - 1,
            // }
            // bus.$emit('share', obj);

            // =================================================================

            // 通过自定义事件，把最新的数据发给父组件 App.vue
            this.$emit('num-change', this.num - 1);
        }
    }
};
</script>

<style lang="less" scoped>
.number-box {
    min-width: 30px;
    text-align: center;
    margin: 0 5px;
    font-size: 12px;
}

.btn-sm {
    width: 30px;
}
</style>

