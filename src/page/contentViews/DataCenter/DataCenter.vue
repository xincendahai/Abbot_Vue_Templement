<template>
	<div id="page">
		<div class="wrap">
        <cardDragger 
        :data="cardList"
        :colNum="3"
        :cardOutsideWidth="300"
        :cardInsideWidth="260"
        :cardOutsideHeight="310"
        :cardInsideHeight="240"
        @finishDrag="finishDrag"
        >
        </cardDragger>
		</div>
    <div class="wrap">
			<!-- <colorPicker v-model="color" /> -->
		</div>
	</div>
</template>

<script>
export default {
    data() {
      return {
        color: '#ff0000',
        cardList: [{
        positionNum: 1,
        name: "演示卡片"+1,
        id: "card"+1,
      },
      {
        positionNum: 2,
        name: "演示卡片"+2,
        id: "card"+2,
      },
      {
        positionNum: 3,
        name: "演示卡片"+3,
        id: "card"+3,
      },
      {
        positionNum: 4,
        name: "演示卡片"+4,
        id: "card"+4,
      },
      
      ],
      //   option:{
      //     yAxis:{
      //       name:'功率（KW）',
			// splitLine:{show:true},
      //     },
      //     series:[
      //       {
      //         name:'总功率',
      //         type:'line',
      //         areaStyle: {},
      //         smooth: true,
      //         data: [],
			// itemStyle:{ normal:{ color:'#bda3f2' } },
      //       }]
      //   },
        // timeStamp:(new Date()).getTime()
      }
    },
    methods: {
      getData(){
		  let data = [{id:"60",name:"张三"},{id:"50",name:"张12"},{id:"40",name:"张sn"},{id:"70",name:"张12"},]
		  this.option.series[0].data = [];
              data.forEach(element => {
                this.option.series[0].data.push([element.name, element.id]);
              }); 
      },
      
    
      finishDrag(old,newVal,item){
        console.log(old)
        console.log(newVal)
        console.log(item)
      }
    },
    mounted() {
      console.log(this.cardList)
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
