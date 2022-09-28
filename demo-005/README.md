# $refs 引用

---

-   使用`$refs`引用，获取`dom`对象

    ```javascript
    <h1 ref='myH1'>App 根组件</h1>;
    this.$refs.myH1;
    ```

-   使用`$refs`引用，获取子组件

    ```javascript
    <Left ref='comLeft'></Left>;
    this.$refs.comLeft;
    ```

-   `this.$nextTick(callback)`的用法

    ```javascript
    this.$nextTick(() => {
        this.$refs.myInput.focus();
    });
    ```
