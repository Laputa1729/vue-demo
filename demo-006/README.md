# 动态组件

---

-   动态组件 `component` 的 `is` 属性
    -   `<component is="ComponentName"></component>`
    -   动态组件之间的切换，会 **销毁** 组件实例，切回来又要重新创建
-   `<keep-alive>` 标签

    -   **不销毁** 组件实例，缓存起来
    -   ```html
        <keep-alive>
            <component :is="ComponentName"></component>
        </keep-alive>
        ```

-   `keep-alive` 的生命周期

    -   **被缓存时：** 触发 `deactivated`
    -   **被激活时：** 触发 `activated`

-   `keep-alive` 的 `include` 属性、 `exclude` 属性
    -   限定缓存范围
    -   `include` 和 `exclude` 不能同时使用
    -   ```html
        <keep-alive include="MyLeft,MyRight">
            <!-- ,逗号后面不能+空格 -->
            <component :is="ComponentName"></component>
        </keep-alive>
        ```
