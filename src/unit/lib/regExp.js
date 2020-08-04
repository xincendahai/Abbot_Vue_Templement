/**
 * regExp正则判断
 * updatedDate:2019.01.18
 */

const regExp = {
	// 常用正则表达式
	_reg: {
		///^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
		phone:/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
		email: /^([\w\_\-]+)@([\w\-]+[\.]?)*[\w]+\.[a-zA-Z]{2,10}$/,
		idno: /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/,
		specialCharEn: /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im,
		specialCharCn: /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im,
		specialCharEns: /[`~@#$^&]/im,
		specialCharCns: /[#￥（——）“”]/im,
		ip:/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/,
		upperCase:/[A-Z]/,
		lowerCase:/[a-z]/,
		number:/[0-9]/,
		uHeight:/^([1-9]|[0-9]\\d|100)$/,
		numberIphone:/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$|^0\d{2,3}-?\d{7,8}$/,
		intp:!/^[1-9]\d*$/,
		port:/^([0-9]|[1-9]\d|[1-9]\d{2}|[1-9]\d{3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/
	},
	// 检测正则表达式
	_check: {
		phone: function(val) {
			return regExp._reg.phone.test(val);
		},
		numberIphone: function(val) {
			return regExp._reg.numberIphone.test(val);
		},
		port: function(val) {
			return regExp._reg.port.test(val);
		},
		email: function(val) {
			return regExp._reg.email.test(val);
		},
		idno: function(val) {
			return regExp._reg.idno.test(val);
		},
		numbers: function(val) {
			return regExp._reg.number.test(val);
		},
		intp: function(val) {
			return regExp._reg.intp.test(val);
		},
		specialChar:function(val) {
			return regExp._reg.specialCharEn.test(val)||regExp._reg.specialCharCn.test(val);
		},
		specialChars:function(val) {
			return regExp._reg.specialCharEns.test(val)||regExp._reg.specialCharCns.test(val);
		},
		ip:function(val) {
			return regExp._reg.ip.test(val);
		},
		uHeights:function(val) {
			return regExp._reg.uHeight.test(val);
		},
		passwordStrength(val,strength){
			let _strength = 0;
			if (regExp._check.specialChar(val)) {
				_strength++; 
			}
			if (regExp._reg.upperCase.test(val)) {
				_strength++; 
			}
			if (regExp._reg.lowerCase.test(val)) {
				_strength++; 
			}
			if (regExp._reg.number.test(val)) {
				_strength++; 
			}
			return _strength>=strength;
		}
	}
};

export default regExp;
