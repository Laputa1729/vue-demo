import Vue from 'vue'; // 得到 Vue 构造函数
import App from './App.vue';
// 导入路由模块
// tips: 在进行模块化导入时，如果路径简写'@/router'，则默认行为，去找文件夹下的 index.js 文件
import router from '@/router/index.js';

Vue.config.productionTip = false;
// 注册全局组件
// Vue.component('Child', Child);

// 创建 Vue 实例对象
new Vue({
    // 把 render 函数指定的组件，渲染到 html 页面中，根节点<div id="app"></div>会被覆盖掉
    // render 中，把谁丢进去，谁就是根组件
    render: (h) => h(App),
    // 挂载路由
    router: router,
}).$mount('#app');

// `el: '#app'` 等同于 `.$mount('#app')`
