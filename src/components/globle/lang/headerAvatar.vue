<template>
  <a-dropdown>
    <div class="header-avatar" style="cursor: pointer">
      <!-- <a-avatar shape="square" size="small" icon="user" class="avatar" /> -->
      <a-avatar class="avatar" size="small" shape="circle" src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"/>
      <span class="name">{{userData.username}}</span>
    </div>
    <a-menu :class="['avatar-menu']" slot="overlay">
      <a-menu-item>
        <a-icon type="user" />
        <span>个人中心</span>
      </a-menu-item>
      <a-menu-item>
        <a-icon type="setting" />
        <span>设置</span>
      </a-menu-item>
      <a-menu-divider />
      <a-menu-item>
        <a-icon style="margin-right: 8px;" type="poweroff" />
        <span @click="this.logout">退出登录</span>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
import { Logout } from './../../../network/service'
export default {
  name: 'HeaderAvatar',
   data() {
	    return {
		  userData:{},
	    };
	  },
  methods: {
    logout(){
			let data = {
				userId:this.userData.id
			}
			Logout(data).then(res => {
				if (res.status == 200) {
					localStorage.removeItem('userData')
					this.$router.push('/')
				}else{
					this.$message.error("内部错误");
				}
			})
		}
  },
  mounted() {
      this.userData = JSON.parse(localStorage.getItem("userData"))
	}
}
</script>

<style lang="less" scoped>
  .header-avatar{
    display: inline-flex;
    .avatar, .name{
      align-self: center;
    }
    .avatar{
      margin-right: 8px;
    }
    .name{
      font-weight: 500;
    }
  }
  .avatar-menu{
    width: 150px;
  }

</style>
