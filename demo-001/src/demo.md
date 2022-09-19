# 文档体系

## 结构

软件手册是一部完整的书，建议采用下面的结构。

-   **简介**（Introduction）：[必备] [文件] 提供对产品和文档本身的总体的、扼要的说明
-   **快速上手**（Getting Started）：[可选] [文件] 如何最快速地使用产品
-   **入门篇**（Basics）：[必备] [目录] 又称“使用篇”，提供初级的使用教程
    -   **环境准备**（Prerequisite）：[必备] [文件] 软件使用需要满足的前置条件
    -   **安装**（Installation）：[可选] [文件] 软件的安装方法
    -   **设置**（Configuration）：[必备] [文件] 软件的设置
-   **进阶篇**（Advanced)：[可选] [目录] 又称“开发篇”，提供中高级的开发教程
-   **API**（Reference）：[可选] [目录|文件] 软件 API 的逐一介绍
-   **FAQ**：[可选] [文件] 常见问题解答
-   **附录**（Appendix）：[可选] [目录] 不属于教程本身、但对阅读教程有帮助的内容
    -   **Glossary**：[可选] [文件] 名词解释
    -   **Recipes**：[可选] [文件] 最佳实践
    -   **Troubleshooting**：[可选] [文件] 故障处理
    -   **ChangeLog**：[可选] [文件] 版本说明
    -   **Feedback**：[可选] [文件] 反馈方式

下面是两个真实范例，可参考。

-   [Redux 手册](https://redux.js.org/introduction/getting-started)
-   [Atom 手册](http://flight-manual.atom.io/)

## 文件名

文档的文件名不得含有空格。

文件名必须使用半角字符，不得使用全角字符。这也意味着，中文不能用于文件名。

```
错误：名词解释.md

正确：glossary.md
```

---

#### 3.8.3 闭包

##### [建议] 在适当的时候将闭包内大对象置为 `null`。

解释：

在 JavaScript 中，无需特别的关键词就可以使用闭包，一个函数可以任意访问在其定义的作用域外的变量。需要注意的是，函数的作用域是静态的，即在定义时决定，与调用的时机和方式没有任何关系。

闭包会阻止一些变量的垃圾回收，对于较老旧的 JavaScript 引擎，可能导致外部所有变量均无法回收。

首先一个较为明确的结论是，以下内容会影响到闭包内变量的回收：

-   嵌套的函数中是否有使用该变量。
-   嵌套的函数中是否有 **直接调用 eval**。
-   是否使用了 with 表达式。

Chakra、V8 和 SpiderMonkey 将受以上因素的影响，表现出不尽相同又较为相似的回收策略，而 JScript.dll 和 Carakan 则完全没有这方面的优化，会完整保留整个 LexicalEnvironment 中的所有变量绑定，造成一定的内存消耗。

由于对闭包内变量有回收优化策略的 Chakra、V8 和 SpiderMonkey 引擎的行为较为相似，因此可以总结如下，当返回一个函数 **fn** 时：

1. 如果 **fn** 的 `[[Scope]]` 是 ObjectEnvironment（with 表达式生成 ObjectEnvironment，函数和 catch 表达式生成 DeclarativeEnvironment），则：
    1. 如果是 V8 引擎，则退出全过程。
    2. 如果是 SpiderMonkey，则处理该 ObjectEnvironment 的外层 LexicalEnvironment。
2. 获取当前 LexicalEnvironment 下的所有类型为 Function 的对象，对于每一个 Function 对象，分析其 FunctionBody：
    1. 如果 FunctionBody 中含有 **直接调用 eval**，则退出全过程。
    2. 否则得到所有的 Identifier。
    3. 对于每一个 Identifier，设其为 **name**，根据查找变量引用的规则，从 LexicalEnvironment 中找出名称为 **name** 的绑定 binding。
    4. 对 binding 添加 **notSwap** 属性，其值为 `true`。
3. 检查当前 LexicalEnvironment 中的每一个变量绑定，如果该绑定有 **notSwap** 属性且值为 `true`，则：
    1. 如果是 V8 引擎，删除该绑定。
    2. 如果是 SpiderMonkey，将该绑定的值设为 `undefined`，将删除 **notSwap** 属性。

对于 Chakra 引擎，暂无法得知是按 V8 的模式还是按 SpiderMonkey 的模式进行。

如果有 **非常庞大** 的对象，且预计会在 **老旧的引擎** 中执行，则使用闭包时，注意将闭包不需要的对象置为空引用。

##### [建议] 使用 `IIFE` 避免 `Lift 效应`。

解释：

在引用函数外部变量时，函数执行时外部变量的值由运行时决定而非定义时，最典型的场景如下：

```javascript
var tasks = [];
for (var i = 0; i < 5; i++) {
    tasks[tasks.length] = function () {
        console.log('Current cursor is at ' + i);
    };
}
var len = tasks.length;
while (len--) {
    tasks[len]();
}
```

以上代码对 tasks 中的函数的执行均会输出 `Current cursor is at 5`，往往不符合预期。

此现象称为 **Lift 效应** 。解决的方式是通过额外加上一层闭包函数，将需要的外部变量作为参数传递来解除变量的绑定关系：

```javascript
var tasks = [];
for (var i = 0; i < 5; i++) {
    // 注意有一层额外的闭包
    tasks[tasks.length] = (function (i) {
        return function () {
            console.log('Current cursor is at ' + i);
        };
    })(i);
}
var len = tasks.length;
while (len--) {
    tasks[len]();
}
```
