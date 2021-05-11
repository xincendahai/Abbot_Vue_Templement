/**
 * 基础配置数据
 */
const basicData = {
    //分页
    pag: {
      //每页数据数量数组
      pageSizeOptions:["10", "20", "50", "100"],
      //默认每页数据数量
      pageSize: 10,
      //默认当前页码
      currentPage: 1,
    },
    jurisdiction:[
      {
        key:'1',
        value:'读权限',
      },
      {
        key:'2',
        value:'写权限',
      },
      {
        key:'3',
        value:'读写权限',
      }
    ],

  }
  
  export default basicData
  