import Vue from 'vue'; // 得到 Vue 构造函数
import App from './App.vue';
import Test from './Test.vue';
import Count from '@/components/Count.vue';

Vue.config.productionTip = false;
// 注册全局组件
Vue.component('MyCount', Count);

// 创建 Vue 实例对象
new Vue({
    // 把 render 函数指定的组件，渲染到 html 页面中，根节点<div id="app"></div>会被覆盖掉
    // render 中，把谁丢进去，谁就是根组件
    render: (h) => h(App),
}).$mount('#app');

// `el: '#app'` 等同于 `.$mount('#app')`
