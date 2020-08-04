/**
 * random产生随机数据
 * updatedDate:2019.01.21
 */

const random = {
	/**
	 * @desc 	随机获取颜色
	 * @param 	{number} opacity	透明度
	 * @return 	{String}
	 */
	color: function(opacity) {
		var rgba_x = [];
		for(let i = 0; i < 3; i++) {
			rgba_x[i] = Math.floor(Math.random() * 255);
		}
		if(opacity) {
			return 'rgba(' + rgba_x[0] + ',' + rgba_x[1] + ',' + rgba_x[2] + ',' + opacity + ')';
		} else {
			return 'rgb(' + rgba_x[0] + ',' + rgba_x[1] + ',' + rgba_x[2] + ')';
		}
	}, //随机获取颜色-end
	/**
	 * @desc 	随机获取颜色列表
	 * @param 	{number} length	数量
	 * @param 	{number} opacity	透明度
	 * @return 	{String}
	 */
	colorList: function(length,opacity) {
		let colorx = []; 
		for (let i = 0 ; i < length ; i++) {
			let color = this.color();
			if ( colorx.includes(color) ) {
				i--;
			} else{
				colorx[i] = color;
			}
		}
		return colorx;
	}, //随机获取颜色列表-end
	/**
	 * @desc	生成指定范围的随机数
	 * @param  {Number} min 
	 * @param  {Number} max 
	 * @return {Number} 
	 */
	num: function(min, max) {
		var minx, maxx;
		if(max>min) {
			minx = min;
			maxx = max;
		} else {
			minx = 0;
			maxx = 10000;
		}
		return Math.floor(Math.random() * (maxx - minx + 1)) + minx;
	}, //生成指定范围的随机数-end
};

export default random;