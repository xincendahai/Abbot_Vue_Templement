import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from "./store";
// 引入全局调整css
import './assets/customcss/main.less';
// require('!style-loader!css-loader!less-loader!./assets/customcss/main.less');

//引入element-ui组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入ant-design-vue
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';

//引入bus
import Bus from './bus'

import unit from './unit'
// 注册自定义工具库
Vue.use(unit)

// 注册全局变量
import basicData from './config/basicData'
//引入全局基础数据
import globalData  from './config/globalData'
Vue.prototype.$globalData = globalData
//  注册全局基础数据
Vue.use(basicData)

Vue.prototype.$bus = Bus
Vue.config.productionTip = false
Vue.use(Antd);
Vue.use(ElementUI);




//自动化注册全局组件
const requireComponent = require.context('./components/globle/', true, /\.vue$/)
requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName)
  // 剥去文件名开头的 `./` 和结尾的扩展名
  const componentName = fileName
    .replace(/^\.\//, '')
    .replace(/\.vue$/, '')
    .replace(/\//, '-')
  // 全局注册组件
  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  )
  // 将组件名打印出来
  // console.log('组件：' + componentName)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
