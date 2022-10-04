# vue-router

---

-   **安装**
    `cnpm install vue-router@3.5.2 --save`

-   **`this.$route` 路由参数对象**

    -   路径参数 `params`
    -   查询参数 `query`

-   **`this.$router` 路由导航对象**

    -   函数式导航 `API`
        -   `this.$router.push('hash地址')`
        -   `this.$router.replace('hash地址')`
        -   `this.$router.go(数值n)`
        -   `this.$router.back()`
        -   `this.$router.forward()`

-   **导航守卫，控制路由的访问权限**

    -   全局前置守卫

        ```javascript
        // 声明全局前置守卫，控制路由的访问权限
        // 只要发生路由跳转，必然触发 beforeEach 的回调函数
        router.beforeEach(function (to, from, next) {
            // 3 个形参
            // to 要访问的$route对象
            // from 要离开的$route 对象
            // next 是一个函数，调用 next() 表示放行，next(false) 表示不放行，next('/login') 强制跳到指定页面
            next();
        });
        ```
