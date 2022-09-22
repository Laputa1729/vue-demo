// 使用 Node.js 中的导出语法，向外导出一个 webpack 的配置对象
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlPlugin({
    template: './src/index.html', // 指定要复制哪个页面
    filename: './index.html', // 指定复制出来的文件名和存放路径
});
// 花括号 {} 解构赋值
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    // 开发时，追求的是打包速度，一定要用 development
    // 发布上线时，用 production，压缩资源体积，提升项目性能
    mode: 'development', // mode 用来指定构建模式，可选 development 和 production

    // devtool: 'eval-source-map', // 开发模式下

    // devtool: 'nosource-source-map', // 实际发布的场景，只定位行号，不暴露源码

    // 示例：自定义打包入出口
    // entry: path.join(__dirname, './src/index123.js'), // 入口文件路径，指定要处理哪个文件

    output: {
        path: path.join(__dirname, './dist'), // 输出文件的存放路径
        filename: './js/main.js', // 输出文件的名称
    },

    module: {
        rules: [
            // 设置不同模块需要的 loader
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            // 处理 .less 文件的 loader
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            // 处理图片文件的 loader
            // outputPath 参数用于设置图片类资源 build 输出到指定目录
            {
                test: /\.jpg|png|gif$/,
                use: 'url-loader?limit=200&outputPath=images',
            },
            // 使用 babel-loader 处理高级 js 语法
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
        ],
    },

    devServer: {
        open: false, // 初次打包完成，自动打开浏览器
        host: '127.0.0.1', // 主机地址设置
        port: 8080, // 端口设置
    },

    plugins: [htmlPlugin, new CleanWebpackPlugin()],

    resolve: {
        alias: {
            // 配置别名，用 @ 指代 src 目录
            '@': path.join(__dirname, './src/'),
        },
    },
};
