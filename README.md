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




