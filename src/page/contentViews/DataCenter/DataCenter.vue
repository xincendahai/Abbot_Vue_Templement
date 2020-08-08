<template>
	<div id="page">
		<div class="wrap">
			<echarts-lineBarEcharts :option="option" :timeStamp="timeStamp"></echarts-lineBarEcharts>
		</div>
	</div>
</template>

<script>
export default {
    data() {
      return {
        option:{
          yAxis:{
            name:'功率（KW）',
			splitLine:{show:true},
          },
          series:[
            {
              name:'总功率',
              type:'line',
              areaStyle: {},
              smooth: true,
              data: [],
			itemStyle:{ normal:{ color:'#bda3f2' } },
            }]
        },
        timeStamp:(new Date()).getTime()
      }
    },
    methods: {
      getData(){
		  let data = [{id:"60",name:"张三"},{id:"50",name:"张12"},{id:"40",name:"张sn"},{id:"70",name:"张12"},]
		  this.option.series[0].data = [];

              data.forEach(element => {
                this.option.series[0].data.push([element.name, element.id]);
              }); 
      }
    },
    mounted() {
      this.getData();
	}
}
</script>

<style lang="less" scope>
.wrap{
	width: 100%;
	height: 50rem;
	padding: 2rem;
}
</style>
