/**
 * storage操作
 * updatedDate:2019.01.17
 */

const storage = {
	/**
	 * @desc	localStorage操作
	 */
	local: {
		/**
		 * @desc 	判断浏览器是否禁止使用localStorage
		 * @return 	{Boolean}
		 */
		judge: function() {
			if (!!window.localStorage) {
				try {
					window.localStorage.setItem("key", "value");
					window.localStorage.removeItem("key");
					return true;
				} catch (e) {
					return false;
				}
			} else {
				return false;
			}
		}, //判断浏览器是否禁止使用localStorage-end
		/**
		 * @desc 	设置localStorage
		 * @param 	{String} name 
		 * @param 	{String} value 
		 */
		set: function(name, value) {
			let _value = JSON.stringify(value);
			localStorage.setItem(name, _value);
		}, //设置localStorage-end
		/**
		 * @desc 	根据name读取localStorage
		 * @param 	{String} name 
		 * @return 	{String}
		 */
		get: function(name) {
			let _value = localStorage.getItem(name);
			_value = JSON.parse(_value);
			return _value;
		}, //根据name读取localStorage-end
		/** 
		 * @desc 	根据name删除localStorage
		 * @param 	{String} name 
		 */
		remove: function(name) {
			localStorage.removeItem(name);
		}, //根据name删除localStorage-end
		/** 
		 * @desc 	清除localStorage
		 */
		clear: function(name) {
			localStorage.clear();
		}, //清除localStorage-end
	}, //localStorage操作-end
	/**
	 * @desc	sessionStorage操作
	 */
	session: {
		/**
		 * @desc 	判断浏览器是否禁止使用sessionStorage
		 * @return 	{Boolean}
		 */
		judge: function() {
			if (!!window.sessionStorage) {
				try {
					window.sessionStorage.setItem("key", "value");
					window.sessionStorage.removeItem("key");
					return true;
				} catch (e) {
					return false;
				}
			} else {
				return false;
			}
		}, //判断浏览器是否禁止使用sessionStorage-end
		/**
		 * @desc 	设置sessionStorage
		 * @param 	{String} name 
		 * @param 	{String} value 
		 */
		set: function(name, value) {
			let _value = JSON.stringify(value);
			sessionStorage.setItem(name, _value);
		}, //设置sessionStorage-end
		/**
		 * @desc 	根据name读取sessionStorage
		 * @param 	{String} name 
		 * @return 	{String}
		 */
		get: function(name) {
			let _value = sessionStorage.getItem(name);
			_value = JSON.parse(_value);
			return _value;
		}, //根据name读取sessionStorage-end
		/** 
		 * @desc 	根据name删除sessionStorage
		 * @param 	{String} name 
		 */
		remove: function(name) {
			sessionStorage.removeItem(name);
		}, //根据name删除localStorage-end
		/** 
		 * @desc 	清除sessionStorage
		 */
		clear: function(name) {
			sessionStorage.clear();
		}, //根据name删除sessionStorage-end
	}, //sessionStorage操作-end
} //Storage操作-end

if ((!storage.local.judge())||(!storage.session.judge())) {
	alert('浏览器已禁用localStorage，为避免影响使用，请重新设置允许使用！')
}

export default storage;
