<template>
	<div class="Login_wrap">
		<div class="login_model">
			<div class="login_header">
					微创系统管理
			</div>
			<div class="components-input-demo-presuffix centerMessage">
				 <a-form :form="form" @submit="handleSubmit">
				   <a-form-item>
					  <a-input
						v-decorator="[
						  'userName',
						  { rules: [{ required: true, message: 'Please input your username!' }] },
						]"
						placeholder="请输入账号"
						class="inputStyle"
					  >
					   <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
					 </a-input>
					</a-form-item>
					<a-form-item>
					  <a-input-password allow-clear
						v-decorator="[
						  'passWord',
						 { rules: [{ required: true, message: 'Please input your password!' }] },
						]"
						placeholder="请输入密码"
						class="inputStyle"
						type="password"
					  >
					   <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
					  </a-input-password>
					</a-form-item>
					  <a-form-item>
					      <a-checkbox :checked="checkNick" @change="handleChange" style="float: left;
						  line-height: 20px;margin-top: -10px;">
					        记住账号密码
					      </a-checkbox>
					    </a-form-item>
					<a-form-item>
					      <a-button type="primary" html-type="submit" style="width: 100%;color: #FFFFFF;">
					        登录
					      </a-button>
					</a-form-item>	   
				</a-form>
			</div>
		</div>
	</div>
</template>

<script>
export default {
		name: 'layout',
		data() {
			return {
				form: this.$form.createForm(this, { name: 'dynamic_rule' }),
				checkNick: false,
				path:"",
			}
		},
		
		methods: {
			//提交账号密码
			 handleSubmit(e) {
			      e.preventDefault();
			      this.form.validateFields((err, values) => {
			        if (!err) {
					  if(values.userName == "admin" && values.passWord == "123456"){
						  //获取菜单
						let menu = this.$session.get.menuList();
						sessionStorage.setItem("menuList",JSON.stringify(menu));
						let menuList = JSON.parse(sessionStorage.getItem("menuList"))
						if (menuList[0].menuUrl) {
							this.$router.push(menuList[0].menuUrl);
						} else {
							for (let i = 0; i < menuList[0].child.length; i++) {
								this.$router.push(menuList[0].child[i].menuUrl);
								break;
							}
						}
					  }
			        }
			      });
			},
			//修改状态
			 handleChange(e) {
			      this.checkNick = e.target.checked;
			},
		},
		mounted() {
			
		}
	}
</script>

<style lang="less" scoped>
	.Login_wrap{
		width: 100%;
		height: 100vh;
		background-image: url(../assets/img/background.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		position: relative;
		.login_model{
			position: absolute;
			width: 380px;
			height: 351px;
			background-color: rgba(255,255,255,.5);
			top: 30%;
			left: 50%;
			transform: translateX(-50%);
			border-radius: 6px;
			.login_header{
				width: 100%;
				height: 97px;
				line-height: 90px;
				text-align: center;
				color: white;
				font-size: 26px;
				font-weight: bold;
				font-family: PingFang SC;
				position: absolute;
				opacity:1;
			}
			.centerMessage{
				width: 80%;
				height: 248px;
				position: absolute;
				bottom: 0;
				left: 50%;
				transform: translateX(-50%);
				.ant-input {
					height: 37px;
				}
				.inputStyle{
					border-radius: 4px;
				}
				.ant-checkbox-wrapper {
					color: #0DA679;
					font-weight: bold;
				}
			}
		}
	}
</style>
