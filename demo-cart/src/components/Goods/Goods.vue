<template>
    <div class="goods-container">
        <!-- 左侧图片 -->
        <div class="thumb">
            <div class="custom-control custom-checkbox">
                <!-- 复选框 -->
                <input type="checkbox" class="custom-control-input" :id="'cb' + id" :checked="state"
                    @change="stateChange">
                <label class="custom-control-label" :for="'cb' + id">
                    <!-- 商品的缩略图 -->
                    <img :src="pic" alt="">
                </label>
            </div>
        </div>
        <!-- 右侧信息区域 -->
        <div class="goods-info">
            <!-- 商品标题 -->
            <h6 class="goods-title">{{ title }}</h6>
            <div class="goods-info-bottom">
                <!-- 商品价格 -->
                <span class="goods-price">￥{{ price }}</span>
                <!-- 商品的数量 -->

                <!-- [嵌套子组件的方式] -->
                <!-- <Counter :id="id" :num="count"></Counter> -->

                <!-- [引入插槽slot的方式] -->
                <slot name="default123"></slot>

            </div>
        </div>
    </div>
</template>

<script>
import Counter from '../Counter/Counter.vue'

export default {
    props: {
        // 这里为啥要配一个 id 属性呢？
        // 将来，子组件中商品的勾选状态变化后，需要通过 子 -> 父 的方式
        // 通知父组件，根据 id 修改对应商品的勾选状态
        id: {
            required: true,
            type: Number,
        },
        title: {
            default: '',
            type: String,
        },
        pic: {
            default: '',
            type: String,
        },
        price: {
            default: 0,
            type: Number,
        },
        state: {
            default: true,
            type: Boolean,
        },
        count: {
            default: 1,
            type: Number,
        }
    },
    methods: {
        // 复选框发生改变，调用这个事件
        stateChange(e) {
            // console.log(e);
            const newState = e.target.checked;
            // console.log(this.id);
            // 触发自定义事件（子传父）
            this.$emit('state-change', { id: this.id, value: newState })
        }
    },
    components: {
        Counter,
    }
};
</script>

<style lang="less" scoped>
.goods-container {
    display: flex;
    padding: 10px;

    +.goods-container {
        border-top: 1px solid #efefef;
    }

    .thumb {
        display: flex;
        align-items: center;

        img {
            width: 100px;
            height: 100px;
            margin: 0 10px;
        }
    }

    .goods-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;

        .goods-title {
            font-weight: bold;
            font-size: 12px;
        }

        .goods-info-bottom {
            display: flex;
            justify-content: space-between;

            .goods-price {
                font-weight: bold;
                color: red;
                font-size: 13px;
            }
        }
    }
}
</style>

