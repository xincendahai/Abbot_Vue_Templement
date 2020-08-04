/**
 * 时间操作
 * updatedDate:2019.01.21
 */

const moment = {
	/**
	 * @desc 	按格式转换时间
	 * @return 	{String}
	 */
	conversion: function(egtime, dateType) {
		
		var timeSting;
		
		if (egtime) {
			var time = new Date(parseInt(egtime)); //获取时间
			
			var year = time.getFullYear(); //获取完整的年份(4位,1970-????)
		
			var month = time.getMonth() + 1; //获取当前月份(0-11,0代表1月)
			if (month < 10) {
				month = '0' + month;
			}
			var date = time.getDate(); //获取当前日(1-31)
			if (date < 10) {
				date = '0' + date;
			}
			
			var weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
			var day = time.getDay(); //获取当前日(星期)
			
			var hour = time.getHours(); //获取当前小时数(0-23)
			if (hour < 10) {
				hour = '0' + hour;
			}
			var minute = time.getMinutes(); //获取当前分钟数(0-59)
			if (minute < 10) {
				minute = '0' + minute;
			}
			var second = time.getSeconds(); //获取当前秒数(0-59)
			if (second < 10) {
				second = '0' + second;
			}
			 
			 if (dateType == 'yyyy-mm-dd') {
				timeSting = year + '-' + month + '-' + date;
			} else if (dateType == 'yyyy') {
				timeSting = year ;
			} else if (dateType == 'mm') {
				timeSting = month ;
			} else if (dateType == 'dd') {
				timeSting = date ;
			} else if (dateType == 'hh:mm:ss') {
				timeSting = hour + ':' + minute + ':' + second;
			} else if (dateType == 'hh:mm') {
				timeSting = hour + ':' + minute;
			} else if (dateType == 'hh') {
				timeSting = hour;
			} else if (dateType == 'yyyy年mm月dd日 hh:mm:ss') {
				timeSting = year + '年' + month + '月' + date + '日 ' + hour + ':' + minute + ':' + second;
			} else if (dateType == 'yyyy年mm月dd日 星期* hh:mm:ss') {
				timeSting = year + '年' + month + '月' + date + '日 ' + weekday[day] + +hour + ':' + minute + ':' + second;
			} else if (dateType == 'array') {
				timeSting = [year, month, date, weekday[day], hour, minute, second];
			} else if (dateType == 'int') {
				timeSting = parseInt(egtime);
			} else if (dateType == 'date') {
				timeSting = (new Date(parseInt(egtime)));
			} else {
				timeSting = year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second;
			}
		} else {
			timeSting = ''
		}
		return timeSting;
	}, //按格式转换时间-end
	/**
	 * @desc 	按格式获取当前时间
	 * @return 	{String}
	 */
	getNowTime: function(dateType) {
		var timeSting;
		var now = (new Date()).getTime(); //获取时间
		timeSting = this.conversion(now,dateType)
		return timeSting;
	}, //按格式获取当前时间-end
	
	/**
	 * @desc   距现在的时间……个小时的时间
	 * @param  {type} +、-   
	 * @param  {number} 
	 * @param  {dateType} 
	 * @return {string}
	 */
	previousTime: function(type,number,dateType) {
		
		var nowTimes = (new Date()).getTime();
		
		var times = 60 * 60 * 1000 * parseInt(number);
		
		if (type == '+') {
			nowTimes += times;
		} else if (type == '-') {
			nowTimes -= times;
		}
		
		return this.conversion(nowTimes,dateType)
		
	},
	/**
	 * @desc   格式化现在距${endTime}的剩余时间
	 * @param  {Date} endTime  
	 * @return {String}
	 */
	formatRemainTime: function(endTime) {
		var startDate = new Date(); //开始时间
		var endDate = new Date(endTime); //结束时间
		var t = endDate.getTime() - startDate.getTime(); //时间差
		var d = 0,
			h = 0,
			m = 0,
			s = 0;
		if (t >= 0) {
			d = Math.floor(t / 1000 / 3600 / 24);
			h = Math.floor(t / 1000 / 60 / 60 % 24);
			m = Math.floor(t / 1000 / 60 % 60);
			s = Math.floor(t / 1000 % 60);
		}
		return d + "天 " + h + "小时 " + m + "分钟 " + s + "秒";
	},
	/**
	 * @desc   格式化${startTime}距现在的已过时间
	 * @param  {Date} startTime 
	 * @return {String}
	 */
	formatPassTime: function(startTime) {
		var _startTime = (new Date(startTime)).getTime();
		var currentTime = Date.parse(new Date()),
			time = currentTime - _startTime,
			day = parseInt(time / (1000 * 60 * 60 * 24)),
			hour = parseInt(time / (1000 * 60 * 60)),
			min = parseInt(time / (1000 * 60)),
			month = parseInt(day / 30),
			year = parseInt(month / 12);
		if (year) return year + "年前"
		if (month) return month + "个月前"
		if (day) return day + "天前"
		if (hour) return hour + "小时前"
		if (min) return min + "分钟前"
		else return '刚刚'
	}
};

export default moment;
