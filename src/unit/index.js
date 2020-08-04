import cookie from './lib/cookie.js'
import eleResize from './lib/eleResize.js'
import md5 from './lib/md5.js'
import other from './lib/other.js'
import random from './lib/random.js'
import regExp from './lib/regExp.js'
import storage from './lib/storage.js'
import time from './lib/time.js'


const MyUnit = {}
MyUnit.install = function(Vue) {
	// 添加实例方法
	Vue.prototype.$Fcookie = cookie;
	Vue.prototype.$FeleResize = eleResize;
	Vue.prototype.$Fmd5 = md5;
	Vue.prototype.$Fother = other;
	Vue.prototype.$Frandom = random;
	Vue.prototype.$FregExp = regExp;
	Vue.prototype.$Fstorage = storage;
	Vue.prototype.$Ftime = time;

}


export default MyUnit
