// 使用 Node.js 中的导出语法，向外导出一个 webpack 的配置对象
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlPlugin({
    template: './src/index.html', // 指定要复制哪个页面
    filename: './index.html', // 指定复制出来的文件名和存放路径
});

module.exports = {
    // 开发时，追求的是打包速度，一定要用 development
    // 发布上线时，用 production，压缩资源体积，提升项目性能
    mode: 'development', // mode 用来指定构建模式，可选 development 和 production

    // 示例：自定义打包入出口
    // entry: path.join(__dirname, './src/index123.js'), // 入口文件路径，指定要处理哪个文件
    // output: {
    //     path: path.join(__dirname, './dist'), // 输出文件的存放路径
    //     filename: 'main123.js', // 输出文件的名称
    // },

    plugins: [htmlPlugin],
};
