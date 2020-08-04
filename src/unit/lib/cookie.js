/**
 * cookie操作
 * updatedDate:2019.01.17
 */

const cookie = {
	/**
	 * @desc 	判断浏览器是否禁止使用cookie
	 * @return 	{Boolean}
	 */
	judge: function() {
		if (navigator.cookieEnabled) {
			return true;
		} else {
			return false;
		}
	}, //判断浏览器是否禁止使用cookie-end
	/**
	 * @desc 	设置Cookie
	 * @param 	{String} name 
	 * @param 	{String} value 
	 * @param 	{Number} days
	 */
	set: function(name, value, days) {
		let _value = JSON.stringify(value);
		if (days) {
			var date = new Date();
			date.setDate(date.getDate() + days);
			document.cookie = name + '=' + _value + ';expires=' + date;
		} else {
			document.cookie = name + '=' + _value + ';';
		}
	}, //设置Cookie-end
	/**
	 * @desc 	根据name读取cookie
	 * @param 	{String} name 
	 * @return 	{String}
	 */
	get: function(name) {
		let _value = '';
		var arr = document.cookie.replace(/\s/g, "").split(';');
		for (var i = 0; i < arr.length; i++) {
			var tempArr = arr[i].split('=');
			if (tempArr[0] == name) {
				_value = decodeURIComponent(tempArr[1]);
			}
		}
		_value = JSON.parse(_value);
		return _value ;
	}, //根据name读取cookie-end
	/** 
	 * @desc 	根据name删除cookie
	 * @param 	{String} name 
	 * @return 	{String}
	 */
	remove: function(name) {
		// 设置已过期，系统会立刻删除cookie
		this.set(name, ' ', -1);
	}, //根据name删除cookie-end
};

if ( !cookie.judge() ) {
	alert('浏览器已禁用cookie，为避免影响使用，请重新设置允许使用！')
}

export default cookie;

