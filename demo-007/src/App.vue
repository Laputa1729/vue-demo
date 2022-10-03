<template>
    <div class="app-container">
        <h1 v-myColor="color[1]">App 根组件</h1>
        <p v-myColor="'green'">测试</p>

        <button @click="changeColor">改变 myColor 的颜色</button>

        <hr>

        <Article>
            <template v-slot:title>
                <h3>一首诗</h3>
            </template>

            <template #content="{ _msg, _user}">
                <section>
                    白日依山尽...
                    <p>{{ _msg }}</p>
                    <p>{{ _user }}</p>
                </section>
            </template>

            <template #author>
                <div>作者：王之涣</div>
            </template>
        </Article>

        <hr>

        <!-- 暂时隐藏 -->
        <div class="box" style="display: none;">
            <!-- 把 Left 组件和 Right 组件放进来 -->
            <Left>
                <!-- 指名道姓，要放到哪个插槽里 -->
                <template v-slot:default123>
                    <p>放进插槽里去。</p>
                </template>
            </Left>
        </div>
    </div>
</template>

<script>
import Left from '@/components/Left.vue'
import Article from '@/components/Article.vue'

export default {
    data() {
        return {
            color: ['blue', 'orange']
        };
    },
    // 私有自定义指令
    directives: {
        // 定义自定义指令
        myColor: {
            // bind 函数只会被调用一次，dom 更新也不会再次触发
            bind: function (el, binding) {
                el.style.color = binding.value;
            },
            // 每次 dom 更新
            update: function (el, binding) {
                console.log(binding)
                el.style.color = binding.value;
            }
        }
    },
    // 注册私有组件
    components: {
        'Left': Left,
        'Article': Article
    },
    methods: {
        changeColor() {
            // this.color[1] = 'green';
            this.color = ['blue', 'green'];
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
