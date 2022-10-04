// 创建路由模块
// 1. 导入
import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/components/Home.vue';
import Movie from '@/components/Movie.vue';
import About from '@/components/About.vue';

import Tab1 from '@/components/tabs/Tab1.vue';
import Tab2 from '@/components/tabs/Tab2.vue';

import Login from '@/components/Login.vue';
import Main from '@/components/Main.vue';

// 2. 调用 Vue.use() 函数，把 VueRouter 安装为 Vue 的插件
Vue.use(VueRouter);

// 3. 创建路由的实例对象
const router = new VueRouter({
    // 定义 hash 与组件之间的对应关系
    routes: [
        // 路由规则
        { path: '/', redirect: '/home' }, // 路由重定向
        { path: '/home', component: Home },
        {
            path: '/movie/:mid', // 动态路由，用 : 接收参数
            component: Movie,
            props: true, // 为这条路由开启 props 传参
        },
        {
            path: '/about',
            component: About,
            redirect: '/about/tab1', // 默认打开第 1 个 tab
            // 子路由
            children: [
                { path: '', component: Tab1 }, // path 为空，叫做默认子路由
                { path: 'tab1', component: Tab1 },
                { path: 'tab2', component: Tab2 },
            ],
        },
        { path: '/login', component: Login },
        { path: '/main', component: Main },
    ],
});

// 声明全局前置守卫，控制路由的访问权限
// 只要发生路由跳转，必然触发 beforeEach 的回调函数
router.beforeEach(function (to, from, next) {
    // 3 个形参
    // to   要访问的$route对象
    // from 要离开的$route对象
    // next 是一个函数，调用 next() 表示放行，next(false) 表示不放行，next('/login') 强制跳到指定页面

    if (to.path === '/main') {
        const token = localStorage.getItem('token');
        if (token) {
            next();
        } else {
            next('/login');
        }
    } else {
        next();
    }
});

// 4. 向外共享路由的实例对象
export default router;
