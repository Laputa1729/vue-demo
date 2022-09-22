// 1. 使用 ES6 导入语法，导入 jQuery。就不要再用 <script src=""></script> 引入基础库了。
import $ from 'jquery';
// 导入样式（在 webpack 中，一切皆模块，都可以通过 ES6 语法导入使用）
// 非 js 文件 webpack 会报错，需要对应的第三方 loader(加载器) 处理
import './css/index.css';
import './css/index.less';

// 导入图片
import logo from './images/logo.png';

console.log(logo);

// 2. 定义 jQuery 的入口函数
$(function () {
    // 3. 实现奇偶行变色
    $('li:odd').css('background-color', 'red');
    $('li:even').css('background-color', 'yellow');

    $('.box').attr('src', logo);
});

// 配置别名：@ 表示 src 源代码目录，方便从上级往下级查找想要的资源，可以替代 ../../ 相对路径
// 导入 src/js/test/info.js
import '@/js/test/info.js';
