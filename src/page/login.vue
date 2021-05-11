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
import { UserLogin  , GetGurisdiction} from './../network/service'
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
								localStorage.setItem("userData",JSON.stringify(res.data));
								this.getMenu()
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
			},

			getMenu(){
				GetGurisdiction().then(res => {
						if (res.status == 200) {		
								let treeData = []
								if(res.data == null){
									this.$message.error("请联系管理员");
								}
								if(res.data.length > 0){
									res.data.map((item,index)=>{
									treeData[index] = {}
									treeData[index].menuName = item.name
									treeData[index].menuUrl = item.url
									if(item.children.length > 0){
										treeData[index].child = []
										item.children.map((val1,key1)=>{
											let obj = {
												menuName:val1.name,
												menuUrl:val1.url,
												child:[]
											}
											treeData[index].child.push(obj)
										})
									}else{
										treeData[index].child = []
									}
								  })
								  
								sessionStorage.setItem("menuList",JSON.stringify(treeData));
								  if(treeData[0].child.length > 0){
									  this.$router.push(treeData[0].child[0].menuUrl);
								  }else{
									  this.$router.push(treeData[0].menuUrl);
								  }
								}else{
										this.$message.error("请联系管理员");
								}
								
						}else{
							this.$message.error(res.msg);
						}
				});
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
