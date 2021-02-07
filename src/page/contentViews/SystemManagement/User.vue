<!-- 用户 -->

<template>
	<div class="content">
		<!-- 搜索 -->
		<div id="components-form-demo-advanced-search">
		    <a-form class="ant-advanced-search-form" :form="form">
		      <a-row :gutter="24">
		       <a-col
		         :span="6"
		       >
		         <a-form-item :label="$t('system.userName')">
		           <a-input
		             v-decorator="[
		               username
		             ]"
		           />
		         </a-form-item>
		       </a-col>
			   <a-col
			     :span="6"
			   >
			     <a-form-item :label="$t('system.email')">
			       <a-input
			         v-decorator="[
			           email
			         ]"
			       />
			     </a-form-item>
			   </a-col>
			   <a-col :span="12" :style="{ textAlign: 'right' }">
				   <a-button type="primary"  @submit="handleSearch">
				     {{$t('system.search')}}
				   </a-button>
				   <a-button :style="{ marginLeft: '8px' }" @click="handleReset">
				     {{$t('system.empty')}}
				   </a-button>
				 </a-col>
		      </a-row>
		    </a-form>
		  </div>
		<a-card :style="{ marginTop: '10px' }">
		 <User-AddUser @success="refresh" :roleClassificationData="roleClassificationData"></User-AddUser>
		 <a-table 
		 		 rowKey='id'
		         :columns="column"
		         :data-source="data"
				 :pagination="pagination"
				 :loading="loading"
				 @change="handleTableChange"
				 showSizeChanger:true>
				 <span slot="action" slot-scope="text,record">
				<User-ModifyUser @success="refresh" :item="record"
				:roleClassificationData="roleClassificationData"
				></User-ModifyUser>
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
const column = [
  {
	title: '用户名',
    dataIndex: 'username',
	key: 'username',
	ellipsis: true,
  },
  {
    title: '邮箱',
    dataIndex: 'email',
	key: 'email',
	ellipsis: true,
  },
  {
    title: '手机号',
    dataIndex: 'mobile',
	key: 'mobile',
	ellipsis: true,
  },
  {
    title: '角色名',
    key: 'roleName',
    dataIndex: 'roleName',
	scopedSlots: { customRender: 'tags' },
	ellipsis: true,
  },
  {
    title: '操作',
    key: 'action',
	scopedSlots: { customRender: 'action' },
  },
];
const columnEN = [
  {
	title: 'User Name',
    dataIndex: 'username',
	key: 'username',
	ellipsis: true,
  },
  {
    title: 'Email',
    dataIndex: 'email',
	key: 'email',
	ellipsis: true,
  },
  {
    title: 'Mobile',
    dataIndex: 'mobile',
	key: 'mobile',
	ellipsis: true,
  },
  {
    title: 'Role Name',
    key: 'roleName',
    dataIndex: 'roleName',
	scopedSlots: { customRender: 'tags' },
	ellipsis: true,
  },
  {
    title: 'Operation',
    key: 'action',
	scopedSlots: { customRender: 'action' },
  },
];



import { QueryAll , RoleClassification , QueryUsersAll , DeleteUser } from './../../../network/service'
export default {
  name:'user',
  data() {
    return {
	  form: this.$form.createForm(this, { name: 'horizontal_user' }),
	  data:[],
	  roleClassificationData:[],
	  columnEN,
	  column,
	  loading : true,
	  username:"",
	  email:'',
	  language:this.$store.state.theme.language,
	  pagination: {
		total: 0,
		pageSize: this.$basicData.pag.pageSize,
		showSizeChanger: true,
		pageSizeOptions:  this.$basicData.pag.pageSizeOptions,//每页中显示的数据
		showTotal: total => `共有 ${total} 条数据`,  //分页中显示总的数据
      },
    };
  },
  computed: {
    
  },
  watch:{
	
	
  },
  methods: {
	getData(){
		let dataList = {
			page:1,
			pageSize:10
		}
		this.getQueryAll(dataList)	
	},

	getQueryAll(dataList){
		QueryUsersAll(dataList).then(res => {
			if (res.status == 200) {
				this.data = res.data.rows
				this.loading = false
				this.pagination= {
					 total: res.data.records,
					 pageSize: dataList.pageSize,//每页中显示10条数据
					 showSizeChanger: true,
					 pageSizeOptions: this.$basicData.pag.pageSizeOptions,//每页中显示的数据
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

	handleTableChange(pagination) {
		console.log(pagination)
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
     
      });
	},
	
	deleteData(id){
		DeleteUser({id:id}).then(res => {
			if (res.status == 200) {
				this.$message.success("删除数据成功");
				this.getData()
			}else{
				this.$message.error(res.msg);
			}
		});
	},

    handleReset() {
      this.form.resetFields();
	},
	
	getRoleClassification(){
		RoleClassification().then(res => {
			if (res.status == 200) {
				this.roleClassificationData = res.data
			}else{
				this.$message.error(res.msg);
			}
		});
	},
	// changeLanuge(){
	// 	this.columnZE = this.$store.state.theme.language == 'zh-CN' ? columnEN:columnZH;
	// }
  },
   mounted () {
	this.getData();
	// this.changeLanuge()
	this.getRoleClassification()
    this.$nextTick(() => {
      this.form.validateFields();
    });
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