<template>
  <span class="wrapadd">
    <span @click="showModal" class="ModifyBtn">
       {{$t('system.modify')}}
    </span>
    <a-modal v-model="visible" :title="$t('system.modify')" @ok="handleSubmit"
    @cancel="handleReset"
    >
    <a-form :form="form" @submit="handleSubmit">
    <a-form-item v-bind="formItemLayout" :label="$t('system.userName')">
      <a-input
        v-decorator="[
          'username',
          {
            rules: [
              {
                required: true,
                message: '请输入用户名',
              },
            ],
          },
        ]"
      />
    </a-form-item>
    <a-form-item v-bind="formItemLayout" :label="$t('system.email')">
      <a-input
        v-decorator="[
          'email',
          {
            rules: [
              {
                type: 'email',
                message: '请输入正确的邮箱',
              }
            ],
          },
        ]"
      />
    </a-form-item>
     <a-form-item v-bind="formItemLayout" :label="$t('system.mobile')">
      <a-input
        v-decorator="[
          'mobile'
        ]"
      />
    </a-form-item>
     <a-form-item v-bind="formItemLayout" :label="$t('system.roleName')">
      <a-select
        v-decorator="[
          'roleId',
          { rules: [{ required: true, message: '请选择角色名' }] },
        ]"
        
      >
        <a-select-option  v-for="(item,index) in this.roleClassificationData"
        :key="index"
        :value="item.id"
        >
          {{item.value}}
        </a-select-option>
      </a-select>
    </a-form-item>
    </a-form>
    </a-modal>
  </span>
</template>
<script>
import { ModifyUserData } from './../../../network/service'

export default {
  props: {
    item:{},
    roleClassificationData:{}
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
      
    };
  },
  methods: {
    showModal() {
      this.visible = true;
      this.getData()
    },
    handleOk(e) {
      this.visible = false;
    },
    //获取数据
    getData(){
         this.form.resetFields();
         this.$nextTick(() => {
              this.form.setFieldsValue({
                username:this.item.username,
                email:this.item.email,
                mobile:this.item.mobile,
                roleId:this.item.roleId
             })
        });
    },
    handleSubmit(e){
      e.preventDefault();
      this.form.validateFields((error, values) => {
          values.id = this.item.id
          ModifyUserData(values).then(res => {
			      if (res.status == 200) {
                this.visible = false;
                this.$emit("success", "refresh");
                this.form.resetFields();
                this.$message.success('修改用户成功');
		     	}else{
				     this.$message.error(res.msg);
		     	}
	    	});
      });
    },
    handleReset(){
         this.form.resetFields();
    },
  },
};
</script>
<style scoped>
.wrapadd{
    width: 100%;
    height: 40px;

}
.addBtn{
    float:right;
}


</style>