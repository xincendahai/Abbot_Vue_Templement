module.exports = {
  //页面热更新
  devServer : {
    hot:true,//自动保存
    open : true,//自动启动
    port : 8080,//默认端口号
    host : "0.0.0.0"
  },
  lintOnSave: false,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            // 'primary-color': '#C00000',
            // 'link-color': '#0DA679',
            // 'border-radius-base': '2px',
            'primary-color': '#0DA679',
            'link-color': '#0DA679',
            'border-radius-base': '2px',
          },
          javascriptEnabled: true,
        },
      },
    },
  },
  lintOnSave:false,
  chainWebpack: config => {
    // 修复HMR
    config.resolve.symlinks(true);
},
};


// @primary-color: #1890ff; // 全局主色
// @link-color: #1890ff; // 链接色
// @success-color: #52c41a; // 成功色
// @warning-color: #faad14; // 警告色
// @error-color: #f5222d; // 错误色
// @font-size-base: 14px; // 主字号
// @heading-color: rgba(0, 0, 0, 0.85); // 标题色
// @text-color: rgba(0, 0, 0, 0.65); // 主文本色
// @text-color-secondary : rgba(0, 0, 0, .45); // 次文本色
// @disabled-color : rgba(0, 0, 0, .25); // 失效色
// @border-radius-base: 4px; // 组件/浮层圆角
// @border-color-base: #d9d9d9; // 边框色
// @box-shadow-base: 0 2px 8px rgba(0, 0, 0, 0.15); // 浮层阴影