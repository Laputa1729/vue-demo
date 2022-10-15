<template>
    <div class="app-container">

        <Header title="购物车案例"></Header>

        <!-- <Goods v-for="item in list" :key="item.id" :id="item.id" :title="item.goods_name" :pic="item.goods_img"
            :price="item.goods_price" :state="item.goods_state" :count="item.goods_count" @state-change="getNewState">
        </Goods> -->

        <Goods v-for="item in list"
               :key="item.id"
               :id="item.id"
               :title="item.goods_name"
               :pic="item.goods_img"
               :price="item.goods_price"
               :state="item.goods_state"
               :count="item.goods_count"
               @state-change="getNewState">

            <Counter slot="default123" :num="item.goods_count" @num-change="getNewNum(item, $event)"></Counter>

        </Goods>

        <Footer :isCheckAll="checkAllState" :amount="amount" :total="total" @checkAll-change="getCheckAllState">
        </Footer>

    </div>
</template>

<script>
import axios from 'axios'
import Header from '@/components/Header/Header.vue'
import Goods from '@/components/Goods/Goods.vue'
import Footer from '@/components/Footer/Footer.vue'

// 导入 Counter 组件，实现 slot 的应用
import Counter from '@/components/Counter/Counter.vue'

import bus from '@/components/eventBus.js'

export default {
    data() {
        return {
            list: []
        };
    },
    computed: {
        checkAllState() {
            return this.list.every(function (item) {
                return item.goods_state === true;
            });
        },
        amount() {
            // 应用场景：求和
            // let arr = [7, 12, 12, 11, 5, 45, 22, 11, 78, 45, 5];
            // let a = arr.reduce((total, item, index, arr) => {
            //     // total  初始值
            //     // item   当前元素
            //     // index  索引
            //     // arr    数组对象
            //     return total += item;
            // });
            // console.log(a);  // 253

            // 1.筛选出 goods_state 为 true 的项
            let x = this.list.filter(function (item, index) {
                return item.goods_state;
            });
            let y = x.reduce(function (total, item) {
                return total += item.goods_price * item.goods_count;
            }, 0);
            // console.log(y);

            return y;
        },
        // 已勾选的商品总数量
        total() {
            return this.list.filter(item => item.goods_state).reduce((t, item) => {
                return t += item.goods_count;
            }, 0);
        }
    },
    // 注册私有组件
    components: {
        'Header': Header,
        'Goods': Goods,
        'Footer': Footer,
        'Counter': Counter
    },
    methods: {
        // 请求列表
        async initCartList() {
            const { data: res } = await axios.get('https://www.escook.cn/api/cart');
            console.log(res)
            // 拿到的数据转存到 data 中
            if (res.status === 200) {
                this.list = res.list;
            }
        },
        // 接收子组件传递过来的值
        getNewState(obj) {
            this.list.some(function (item) {
                if (item.id === obj.id) {
                    item.goods_state = obj.value
                    return true;
                }
            });
            // this.list.some(item => {
            //     if (item.id === obj.id) {
            //         item.goods_state = obj.value
            //         return true;
            //     }
            // });
        },
        // 接收子组件 Footer 传递过来的全选checkbox的状态
        getCheckAllState(val) {
            this.list.forEach(function (item) {
                item.goods_state = val;
            })
        },
        // 获取 Counter 组件发过来的最新商品数量
        getNewNum(item, e) {
            item.goods_count = e;
        }
    },
    created() {
        this.initCartList();

        // bus.$on('share', (val) => {
        //     this.list.some(item => {
        //         if (item.id === val.id) {
        //             item.goods_count = val.value;
        //             return true;
        //         }
        //     });
        // });
    }
};
</script>

<style lang="less" scoped>
.app-container {
  position: relative;
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
