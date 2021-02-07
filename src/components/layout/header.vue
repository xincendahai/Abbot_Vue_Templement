<template>
	<div class="header">
		<div class="leftHeader">
		    <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="toggleCollapsed" class="icon"/> 
			 <span> 
				  
			</span> 
			
		</div>
		<div class="rightHeader" >
			<lang-headerNotice/>
		   <lang-headerAvatar class="header-items"/>
			<!-- <a-avatar shape="square" size="small" icon="user" />
				{{userData.username}}
			<span class="exit"
			@click="layout">退出</span> -->
			<!-- <lang-lang></lang-lang> -->
		 <a-dropdown class="lang header-item">
            <div>
              <a-icon type="global"/>{{title}}
            </div>
            <a-menu slot="overlay">
					 <a-menu-item 
					 v-for="lang in langList" :key="lang.key"
			          @click="checkLanguage(lang.key)" >{{lang.value.toLowerCase() + ' ' + lang.name}}
			         </a-menu-item>
            </a-menu>
          </a-dropdown>
		</div>		
	</div>
</template>

<script>
import { ModifyLanguage } from './../../network/service'
export default {
	name: 'headerAll',
	  data() {
	    return {
		  collapsed: false,
		  userData:{},
		  langList: [
            {key: 'zh-CN', name: '简体中文', alias: '简体',value:'cn'},
            {key: 'en-US', name: 'English', alias: 'English',value:'us'}
		  ],
		  title:this.$store.state.theme.language == "zh-CN" ? "中文" : "English",
	    };
	  },
	  methods: {
	    toggleCollapsed() {
		   this.collapsed = !this.collapsed;
		   this.$bus.$emit('clickMenu', this.collapsed)
		},
	
		checkLanguage(key){
			let lang = this.$i18n.locale = key
			this.$i18n.locale = lang
			localStorage.setItem("locale",lang);
			if(lang === 'zh-CN'){
				this.changeLanuger(1)
				this.title = "中文"
			}else{
				this.changeLanuger(0)
				this.title = "English"
			}
		 },

		 changeLanuger(value){
			 ModifyLanguage({
				 statusId : value
			   }).then(res => {
				 if (res.status !== 200) {
					this.$message.error(res.msg);
				  }
			  });
		 }	
	  },
	mounted() {
		this.userData = JSON.parse(localStorage.getItem("userData"))
		this.$i18n.locale = localStorage.getItem("locale")
	}
};
</script>

<style lang="less" scoped>
.header{
    position: relative;
	display: flex;
	width: 100%;
    align-items: center;
    height: 5rem;
    padding: 0;
    background: #fff;
	line-height: 5rem;
	box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
	box-sizing: inherit;
}

.icon{
	display: inline-block;
	font-size: 2rem;
	padding-left:1rem;
	line-height: 4rem;
}
.leftHeader{
	flex: 1;
	text-align: left;
	span{
		padding-left: 2rem;
	}
}
.rightHeader{
	  display: flex;
	  color: inherit;
	  .header-item{
        color: inherit;
        padding: 0 12px;
        cursor: pointer;
        align-self: center;
        a{
          color: inherit;
          i{
            font-size: 16px;
          }
        }
      }
}
.exit{
	margin-left: 20px;
	cursor: pointer;
}
 .logo {
      height: 64px;
      line-height: 58px;
      vertical-align: top;
      display: inline-block;
      padding: 0 12px 0 24px;
      cursor: pointer;
      font-size: 20px;
      color: inherit;
      &.pc{
        padding: 0 12px 0 0;
      }
      img {
        vertical-align: middle;
      }
      h1{
        color: inherit;
        display: inline-block;
        font-size: 16px;
      }
	}
	 .header-item{
        color: inherit;
        padding: 0 12px;
        cursor: pointer;
        align-self: center;
        a{
          color: inherit;
          i{
            font-size: 16px;
          }
        }
      }
	.header-items{
		color: inherit;
        padding: 0 0 0 12px;
        cursor: pointer;
        align-self: center;
        a{
          color: inherit;
          i{
            font-size: 16px;
          }
        }
	}
</style>
