<template>
  <div class="wrapadd">
    <a-button type="primary" @click="showModal" class="float_right">
       {{$t('system.add')}}
    </a-button>
    <a-modal 
      v-model="visible" 
      :title="$t('system.add')" 
      @ok="handleSubmit"
      @cancel="handleReset"
      :okText="$t('system.confirm')"
      :cancelText="$t('system.cancel')"
    >
    <a-form :form="form" @submit="handleSubmit">
    <a-form-item v-bind="formItemLayout" :label="$t('system.roleName')">
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
    <a-form-item v-bind="formItemLayout" :label="$t('system.description')" has-feedback>
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
  </div>
</template>
<script>
import { AddRoleMenu , QueryMenuAll } from './../../../network/service'
export default {
  data() {
    return {
      visible: false,
      form: this.$form.createForm(this, { name: 'add' }),
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
    showModal() {
      this.visible = true;
      this.getTreeData();
    },
    handleOk(e) {
      this.visible = false;
    },
    handleSubmit(e){
      e.preventDefault();
      this.form.validateFields((error, values) => {
        values.menuArr = this.checkedKeys
        AddRoleMenu(values).then(res => {
        if (res.status == 200) {
              this.visible = false;
              this.$emit("success", "refresh");
              this.form.resetFields();
              this.$message.success('新增角色成功');
        }else{
              this.$message.error(res.msg);
         }
        });
    });
   },
    // 获取树的节点
    getTreeData(){
         QueryMenuAll().then(res => {
			if (res.status == 200) {
         let treeData = res.data
         treeData.map((item,index)=>{
              treeData[index].key = item.id 
              treeData[index].title = this.$t('system.'+ item.name)
              if(item.children.length > 0){
                  item.children.map((val1,key1)=>{
                      treeData[index].children[key1].title = this.$t('system.'+ val1.name)
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
    handleReset(){
         this.form.resetFields();
    },

    onExpand(expandedKeys) {
      console.log('onExpand', expandedKeys);
      this.expandedKeys = expandedKeys;
      this.autoExpandParent = false;
    },
    onCheck(checkedKeys) {
      this.checkedKeys = checkedKeys;
    },
    onSelect(selectedKeys, info) {
      this.selectedKeys = selectedKeys;
    },
    
  }
};
</script>
<style scoped>
.wrapadd{
    width: 100%;
    height: 40px;
}
.tree{
  margin-left: 60px;
}


</style>