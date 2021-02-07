<template>
  <span class="wrapModify">
    <span @click="showModal" class="ModifyBtn">
      修改
    </span>
    <a-modal v-model="visible" title="新增" @ok="handleSubmit"
    @cancel="handleReset"
    >
    <a-form :form="form" @submit="handleSubmit">
    <a-form-item v-bind="formItemLayout" label="角色名">
      <a-input
        v-decorator="[
          'roleName',
          {
            rules: [
              {
                required: true,
                message: '请输入角色名',
              },
            ],
          },
        ]"
      />
    </a-form-item>
    <a-form-item v-bind="formItemLayout" label="描述" has-feedback>
      <a-textarea
       v-decorator="[
          'description',
          {
            rules: [
              {
                required: true,
                message: '请输入描述',
              },
            ],
          },
        ]"
        :rows="4" />
        </a-form-item>
            <a-form-item>
            <a-tree
            class="tree"
            v-model="checkedKeys"
            checkable
            :expanded-keys="expandedKeys"
            :auto-expand-parent="autoExpandParent"
            :selected-keys="selectedKeys"
            :tree-data="treeData"
            @expand="onExpand"
            @select="onSelect"
        />
        </a-form-item>
        </a-form>
        </a-modal>
  </span>
</template>
<script>
import { MobifyRoleMenu , QueryMenuAll } from './../../../network/service'
export default {
  props: {
    item:{}
  },
  data() {
    return {
      visible: false,
      form: this.$form.createForm(this, { name: 'modify' }),
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 6 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      },
      expandedKeys: [],
      autoExpandParent: true,
      checkedKeys: [],
      selectedKeys: [],
      treeData:[], 
    };
  },
  methods: {
    //打开弹框
    showModal() {
      this.visible = true;
      this.getTreeData()
      this.getData()
    },

    //关闭弹框
    handleOk(e) {
      this.visible = false;
    },

    //初始化form数据
    getData(){
         this.form.resetFields();
         this.$nextTick(() => {
              this.form.setFieldsValue({
                roleName:this.item.roleName,
                description:this.item.description
             })
        });
        let checkedKeys = []
        this.item.children.map((item)=>{
            checkedKeys.push(item.id)
        })
        this.checkedKeys = checkedKeys
    },

    // 获取树的节点
    getTreeData(){
         QueryMenuAll().then(res => {
		 if (res.status == 200) {
         let treeData = res.data
         treeData.map((item,index)=>{
              treeData[index].key = item.id
              treeData[index].title = item.name
              if(item.children.length > 0){
                  item.children.map((val1,key1)=>{
                      treeData[index].children[key1].title = val1.name
                      treeData[index].children[key1].key = val1.id
                  })
              }
          })
          this.treeData = treeData; 
			 }else{
				this.$message.error(res.msg);
			 }
		 });
    },
   
    //提交form表单
    handleSubmit(e){
      e.preventDefault();
      this.form.validateFields((error, values) => {
        values.menuArr = this.checkedKeys
        values.id = this.item.id
        MobifyRoleMenu(values).then(res => {
        if (res.status == 200) {
              this.visible = false;
              this.$emit("success", "refresh");
              this.form.resetFields();
              this.$message.success('修改角色成功');
        }else{
              this.$message.error(res.msg);
         }
        });
    });
   },
    
    //清空form表单
    handleReset(){
         this.form.resetFields();
    },

    onExpand(expandedKeys) {
      this.expandedKeys = expandedKeys;
      this.autoExpandParent = false;
    },
    onCheck(checkedKeys) {
      this.checkedKeys = checkedKeys;
    },
    onSelect(selectedKeys, info) {
      this.selectedKeys = selectedKeys;
    },
  },
};
</script>
<style scoped>
.tree{
  margin-left: 60px;
}


</style>