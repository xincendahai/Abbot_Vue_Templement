<template>
	<div class="base-eacharts" :id="id+'model'" >
		<div :id="id"></div>
	</div>
</template>

<script>
	import echarts from 'echarts'
	export default {
		name: 'pieEcharts',
		props: {
			option: {},
			timeStamp:{}
		},
		data() {
			return {
				id:'echarts-'+(new Date()).getTime()+'-'+this.$Frandom.num(),
				myChart:'',
				defaultConfig:{
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b}: {c} ({d}%)"
					},
					legend: {
						orient: 'horizontal',
						type: 'scroll',
						y:'top',
						x: 'right',
						data:[]
					},
					series: [
						{
							name:'饼状图',
							type:'pie',
							radius: ['60%', '80%'],
							center:['50%','55%'],
							label: {
								normal: {
									formatter: '{b}\n{d}%',
									// formatter: '{b}\n{c}\n{d}%',
								}
							},
							data:[]
						}
					]
				}
			}
		},
		watch: {
			timeStamp() {
				let self = this;
				if (self.id) {
					self.$nextTick(()=>{
						self.initChart();
					});
				}
			}
		},
		methods: {
			// 处理数据
			init(){
				this.defaultConfig.series[0].data = [];
				for(let j = 0 ; j < 5 ; j++){
					this.defaultConfig.legend.data.push('数据'+(j+1));
					this.defaultConfig.series[0].data.push({
						'name':'数据'+(j+1),
						'value':Math.round(Math.random()*100)
					});
				}
				this.initChart();
			},
			calculate_legend(){
				let self = this;
				let _legend = (self.option&&self.option.legend) || self.defaultConfig.legend;
				let _series = (self.option&&self.option.series) || self.defaultConfig.series;
				_legend.data = _series[0].data.map((item)=>item['name'])
				return _legend;
			},
			calculate_series(){
				let self = this;
				let _series = self.option.series || self.defaultConfig.series;
				_series[0].name = _series[0].name||'';
				_series[0].type = _series[0].type|| self.defaultConfig.series[0].type;
				
				_series[0].radius = _series[0].radius|| self.defaultConfig.series[0].radius;
				_series[0].center = _series[0].center|| self.defaultConfig.series[0].center;
				_series[0].label = _series[0].label|| self.defaultConfig.series[0].label;
				_series[0].data = _series[0].data|| self.defaultConfig.series[0].data;
				
				return _series;
			},
			// 画图
			initChart(){
				let self = this;
				// 基于准备好的dom，初始化echarts实例
				self.myChart = echarts.init(document.getElementById(self.id), 'light')
				// 绘制图表
				if (self.option) {
					self.myChart.setOption({
						title: self.option['title']||self.defaultConfig.title,
						legend: self.calculate_legend(),
						tooltip: self.option['tooltip']||self.defaultConfig.tooltip,
						series: self.calculate_series(),
					});
				} else{
					self.myChart.setOption(self.defaultConfig);
				}
				
			}
		},
		mounted() {
			let self = this;
			self.$nextTick(()=>{
				self.init();
			});
			self.$FeleResize.on(document.getElementById(self.id+'model'),()=>{
				self.myChart.resize();
			});
		}
	}
</script>

<style scoped>
	.base-eacharts,
	.base-eacharts>div{
		width: 100%;
		height: 100%;
	}
</style>
