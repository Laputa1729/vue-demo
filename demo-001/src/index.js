// 1. 使用 ES6 导入语法，导入 jQuery。就不要再用 <script src=""></script> 引入基础库了。
import $ from 'jquery';

// 2. 定义 jQuery 的入口函数
$(function () {
    // 3. 实现奇偶行变色
    $('li:odd').css('background-color', 'red');
    $('li:even').css('background-color', 'pink');
});
