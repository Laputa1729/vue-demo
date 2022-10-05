import Vue from 'vue';
import App from './App.vue';
import router from './router';

// 导入 Vant 组件库
import Vant from 'vant';
// 为了定制主题，后缀改成 .less，然后写新的样式变量，覆盖它
// import 'vant/lib/index.css';
import 'vant/lib/index.less';

Vue.use(Vant);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
