

> basicData基础数据

使用：
1.	编写basicData.js、session.js文件
2.	在main.js中注册
```
//引入全局基础数据
import basicData from './config/basicData'

// 注册全局基础数据
Vue.use(basicData);
```
3.	在其他vue组件文件中使用
```

this.$basicData.数据名
this.$session.数据名

```




