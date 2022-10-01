<template>
    <div class="footer-container">
        <!-- 左侧的全选 -->
        <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="checkAll" :checked="isCheckAll"
                @change="checkAllChange">
            <label class="custom-control-label" for="checkAll">全选</label>
        </div>

        <!-- 中间的合计 -->
        <div>
            <span>合计：</span>
            <span class="total-price">￥{{ amount.toFixed(2) }}</span>
        </div>

        <!-- 结算按钮 -->
        <button type="button" class="btn btn-primary btn-settle">结算（{{ total }}）</button>
    </div>
</template>

<script>
export default {
    props: {
        isCheckAll: {
            default: true,
            type: Boolean
        },
        amount: {
            default: 0,
            type: Number
        },
        total: {
            default: 0,
            type: Number
        }
    },
    methods: {
        // 监听全选checkbox
        checkAllChange(e) {
            this.$emit('checkAll-change', e.target.checked);
        }
    }
};
</script>

<style lang="less" scoped>
.footer-container {
    font-size: 12px;
    height: 50px;
    width: 100%;
    border-top: 1px solid #efefef;
    position: fixed;
    bottom: 0;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
}

.custom-checkbox {
    display: flex;
    align-items: center;
}

#checkAll {
    margin-right: 5px;
}

.btn-settle {
    height: 80%;
    min-width: 110px;
    border-radius: 25px;
    font-size: 12px;
    color: #fff;
    background-color: #1d7bff;
    border: 0;
}

.total-price {
    font-weight: bold;
    font-size: 14px;
    color: red;
}
</style>

