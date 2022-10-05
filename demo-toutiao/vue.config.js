// vue-cli 项目配置文件
const { defineConfig } = require('@vue/cli-service');
// webpack 在进行打包的时候，底层用到了 node.js
// 因此，在 vue.config.js 中，可以导入并使用 node.js 中的核心模块
const path = require('path');
const themePath = path.join(__dirname, './src/theme.less');

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // 关闭语法检查
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量
            // 'nav-bar-background-color': '#007bff',
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            hack: `true; @import "${themePath}";`,
          },
        },
      },
    },
  },
});
