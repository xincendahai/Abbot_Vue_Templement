<template>
	<div class="Login_wrap">
		<div class="login_model">
			<div class="login_header">
					{{ $t('home.title')}}			
			</div>
			<div class="components-input-demo-presuffix centerMessage">
				 <a-form :form="form" @submit="handleSubmit">
				   <a-form-item>
					  <a-input
						v-decorator="[
						  'username',
						  { rules: [{ required: true, message: 'Please input your username!' }] },
						]"
						:placeholder="$t('home.putUserName')"
						class="inputStyle"
					  >
					   <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
					 </a-input>
					</a-form-item>
					<a-form-item>
					  <a-input-password allow-clear
						v-decorator="[
						  'password',
						 { rules: [{ required: true, message: 'Please input your password!' }] },
						]"
						:placeholder="$t('home.outPassWord')"
						class="inputStyle"
						type="password"
					  >
					   <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
					  </a-input-password>
					</a-form-item>
					  <a-form-item>
					      <a-checkbox :checked="checkNick" @change="handleChange" style="float: left;
						  line-height: 20px;margin-top: -10px;">
							{{$t('home.rememberNum')}}
					      </a-checkbox>
					    </a-form-item>
					<a-form-item>
					      <a-button type="primary" html-type="submit" style="width: 100%;color: #FFFFFF;">
					       	{{ $t('home.login')}}
					      </a-button>
					</a-form-item>	   
				</a-form>
			</div>
		</div>
		<div class="language">
		<lang-lang/>
		</div>
	</div>
</template>

<script>
import { UserLogin } from './../network/service'
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
						UserLogin(values).then(res => {
							if (res.status == 200) {
								// sessionStorage.setItem("menuList",JSON.stringify(menu));
								let menu = this.$session.get.menuList();
								localStorage.setItem("userData",JSON.stringify(res.data));
								let menuList = JSON.parse(sessionStorage.getItem("menuList"))
								if (menuList[0].menuUrl) {
									this.$router.push(menuList[0].menuUrl);
								} else {
									for (let i = 0; i < menuList[0].child.length; i++) {
										this.$router.push(menuList[0].child[i].menuUrl);
										break;
									}
								}
							}else{
								 this.$message.error(res.msg);
							}
						});
			        }
			      });
			},
			//修改状态
			 handleChange(e) {
			      this.checkNick = e.target.checked;
			},

			//把国际化存到localStorage
			setLocal(){
				localStorage.setItem("locale",this.$i18n.locale);
			}

		},
		mounted() {
			this.setLocal()	
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

	.language{
		position: absolute;
		top: 10%;
		right: 5%;
	}
</style>
