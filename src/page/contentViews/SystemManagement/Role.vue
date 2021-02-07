<!-- 角色 -->
<template>
	<div class="content">
		<!-- 搜索 -->
		<div id="components-form-demo-advanced-search">
		    <a-form class="ant-advanced-search-form" :form="form" @submit="handleSearch">
		      <a-row :gutter="24">
		       <a-col
		         :span="6"
		       >
		         <a-form-item label="用户名">
		           <a-input
		             v-decorator="[
		               username,
		             ]"
		           />
		         </a-form-item>
		       </a-col>
			   <a-col
			     :span="6"
			   >
			     <a-form-item label="邮箱">
			       <a-input
			         v-decorator="[
			           username
			         ]"
			       />
			     </a-form-item>
			   </a-col>
			   <a-col :span="12" :style="{ textAlign: 'right' }">
				   <a-button type="primary" html-type="submit">
				     搜索
				   </a-button>
				   <a-button :style="{ marginLeft: '8px' }" @click="handleReset">
				     清空
				   </a-button>
				 </a-col>
		      </a-row>
		    </a-form>
		  </div>
		<!-- 表格 -->
		<a-card :style="{ marginTop: '10px' }">
		 <Role-AddRole @success="refresh"></Role-AddRole>
		 <a-table 
		 		  rowKey='id'
		 		  :columns="columns" 
		          :data-source="data"
				  :pagination="pagination"
				  @change="handleTableChange"
				  showSizeChanger:true
				  expandIconAsCell={false}
                  expandIconColumnIndex={-1}
				  >
			 <span slot="action" slot-scope="text,record">
				<Role-ModifyRole @success="refresh" :item="record"></Role-ModifyRole>
                <a-divider type="vertical" />
				<a-popconfirm
                  :title="$t('system.isDeleteData')"
                  @confirm="() =>deleteData(record.id)"
                  :ok-text="$t('system.yes')"
                  :cancel-text="$t('system.no')">
                  <a href="javascript:;" class="DeleteBtn">{{$t('system.delete')}}</a>
               </a-popconfirm>
            </span>
        </a-table>
    </a-card>
	</div>
</template>

<script>
const columns = [
  {
	title: '角色名',
    dataIndex: 'roleName',
	key: 'roleName',
	ellipsis: true,
	width: '25%'
  },
  {
    title: '描述',
    dataIndex: 'description',
	key: 'description',
	ellipsis: true,
	width: '25%'
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
	key: 'createTime',
	ellipsis: true,
	width: '30%'
  },
  {
    title: '操作',
	key: 'action',
	width: '20%',
	scopedSlots: { customRender: 'action' },
  },
];


import { RoleData , DeleteRole } from './../../../network/service'
export default {
  name:'role',
  data() {
    return {
	  form: this.$form.createForm(this, { name: 'advanced_search' }),
	  data:[],
	  columns,
	   username:"",
	   email:'',
	  pagination: {
		total: 0,
		pageSize: this.$basicData.pag.pageSize,
		showSizeChanger: true,
		pageSizeOptions:  this.$basicData.pag.pageSizeOptions,//每页中显示的数据
		showTotal: total => `共有 ${total} 条数据`,  //分页中显示总的数据
      },
    };
  },

  methods: {
	getData(){
		let dataList = {
			page:1,
			pageSize:10,
		}
		this.getQueryAll(dataList)	
	},

	getQueryAll(dataList){
		RoleData(dataList).then(res => {
			if (res.status == 200) {
				this.data = res.data.rows
				this.pagination= {
					 total: res.data.records,
					 pageSize: 10,//每页中显示10条数据
					 showSizeChanger: true,
					 pageSizeOptions: ["10", "20", "50", "100"],//每页中显示的数据
					 showTotal: total => `共有 ${res.data.records} 条数据`,  //分页中显示总的数据
				}
			}else{
				this.$message.error(res.msg);
			}
		});
	},

	getDatas (pagination){
		let dataList = {
			page:pagination.current,
			pageSize:pagination.pageSize,
			isActive:1
		}
		this.getQueryAll(dataList)
	},

	deleteData(id){
		DeleteRole({id:id}).then(res => {
			if (res.status == 200) {
				this.$message.error("删除数据成功");
				this.getData()
			}else{
				this.$message.error(res.msg);
			}
		});
	},

	handleTableChange(pagination) {
		this.getDatas(pagination)
    },

	 // 数据操作成功刷新数据
    refresh (val) {
      if (val == "refresh") {
        this.getData();
      } else if (val == "refresh-now") {
        // 刷新当前页
        this.getData();
      }
    },
	
    handleSearch(e) {
      e.preventDefault();
      this.form.validateFields((error, values) => {
        console.log('error', error);
        console.log('Received values of form: ', values);
      });
	},
	

    handleReset() {
      this.form.resetFields();
	},
	
  },
   mounted () {
    this.getData();
  }
};
</script>
<style lang="less">
.ant-advanced-search-form {
  background: #fbfbfb;
  border-radius: 6px;
}

.ant-advanced-search-form .ant-form-item {
  display: flex;
}

.ant-advanced-search-form .ant-form-item-control-wrapper {
  flex: 1;
}


#components-form-demo-advanced-search {
  padding: 16px;
  border-radius: 2px;
  background-color: #fafafa;
  text-align: center;
  .ant-row{
	height: 45px !important;
  }
}
.ant-card-body {
    padding: 16px !important;
    zoom: 1;
}

</style>