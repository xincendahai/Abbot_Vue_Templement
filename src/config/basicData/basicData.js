/**
 * 基础配置数据
 */
const basicData = {
    //分页
    pag: {
      //每页数据数量数组
      pageEach:[10, 50, 100],
      //默认每页数据数量
      pageSize: 10,
      //默认当前页码
      currentPage: 1,
  
    },
    ruleIpmi:[
      {
        key:'1',
        value:'取最大值',
      },
      {
        key:'2',
        value:'求和',
      },
      {
        key:'3',
        value:'不判断sensorStateValid',
      },
    ]
  }
  
  export default basicData
  