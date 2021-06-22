# vue-admin

## Project setup

yarn install

### Compiles and hot-reloads for development

yarn serve

### Compiles and minifies for production

yarn build

### Lints and fixes files

yarn lint

# 设置主题色：
# 
# 踩坑
# npm install babel-plugin-import -D  下载按需引入
# 创建 .babelrc 文件
# {
#  "plugins": [
#    ["import", { 
#        "libraryName": "antd",
#        "libraryDirectory": "lib",  // libraryDirectory 默认为 lib
#        "style": "css" ,
#    }],
#  ],
# }   
# 把css 改成true
# => 修改主题色文件 =>跟目录vue.config.js


# 非父子组件传值建议使用bus
# 
#   this.$bus.$on('clickMenu', mes => {    
#         this.collapsed = mes
#     })
# 
#   this.$bus.$emit('clickMenu', this.collapsed) 

# 国际化 
# yarn add vue-i18n --save
# 全屏
# npm install --save screenfull

##项目结构

├── build --------------------------------- webpack相关配置文件
│   ├── build.js --------------------------webpack打包配置文件
│   ├── check-versions.js ------------------------------ 检查npm,nodejs版本
│   ├── dev-client.js ---------------------------------- 设置环境
│   ├── dev-server.js ---------------------------------- 创建express服务器，配置中间件，启动可热重载的服务器，用于开发项目
│   ├── utils.js --------------------------------------- 配置资源路径，配置css加载器
│   ├── vue-loader.conf.js ----------------------------- 配置css加载器等
│   ├── webpack.base.conf.js --------------------------- webpack基本配置
│   ├── webpack.dev.conf.js ---------------------------- 用于开发的webpack设置
│   ├── webpack.prod.conf.js --------------------------- 用于打包的webpack设置
├── config ---------------------------------- 配置文件
├── node_modules ---------------------------- 存放依赖的目录
├── src ------------------------------------- 源码（主要操作文件夹）
│   ├── assets ------------------------------ 静态文件
│   │   ├── customcss ----------------------- 自定义css文件
│   │   ├── img ----------------------------- 图片
│   │   ├── font ----------------------------- 字体
│   ├── components -------------------------- 组件 （vue组件）
│   ├── locales ------------------------------ 国际化
│   ├── network ------------------------------ 网络请求
│   ├── config ------------------------------ 自定义配置文件
│   ├── filter -------------------------------自定义过滤器
│   ├── page -------------------------------- 页面（vue页面）
│   ├── router ------------------------------ 路由文件夹
│   ├── store ------------------------------  状态管理
│   ├── unit -------------------------------- 自定义工具库
│   ├── App.vue ----------------------------- 项目入口组件
│   ├── main.js ----------------------------- 主js
├── static ---------------------------------- 外部静态文件（图片、json数据等）
├── package.json ---------------------------- node配置文件
├── .gitignore------------------------------- 配置git可忽略的文件
├── README.md ------------------------------- 项目说明





