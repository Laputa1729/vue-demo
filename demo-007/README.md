# 插槽 `Slot`

为**组件的封装者**提供的功能，允许开发者在封装组件时，把不确定的、希望用户指定的部分定义为插槽。

---

-   vue 官方规定：每一个 `slot` 都要有 `name` 属性

    -   若省略，则默认：`<slot name="default"></slot>`

-   用法

    -   ```html
        <MyLeft>
            <!-- 指名道姓，要放到哪个插槽里去 -->
            <template v-slot:default123>
                <p>放进插槽里去。</p>
            </template>
        </MyLeft>

        <slot name="default123"></slot>
        ```

-   `v-slot` 指令只能用在 `<template>` 虚拟标签上

-   `v-slot` 指令的简写

    -   ```html
        <template #default123>
            <!-- something. -->
        </template>
        ```

## 具名插槽

**作用域插槽**

-   `slot` 上配自定义属性，可以，以对象的形式传递给父组件

    -   ```html
        <slot name="mySlot1" _id="123" _msg="hello vue.js"></slot>

        <template v-slot:mySlot1="obj">
            <div>{{ obj }}</div>
            <!-- { "_id": "123", "_msg": "hello vue.js" } -->
        </template>
        ```
