import basicData from './basicData.js';
import session from './session.js';

const MybasicData = {}
MybasicData.install = function (Vue) {
  // 添加实例方法
  Vue.prototype.$basicData = basicData;
  Vue.prototype.$session = session;
}
export default MybasicData