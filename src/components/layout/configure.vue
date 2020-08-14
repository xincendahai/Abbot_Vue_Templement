<template>
	<div class="configure" >
		<a-button type="primary" @click="showDrawer"   :style="{right:widthMove+'px'}">
		 <a-icon type="setting" v-show="!visible"/>
		 <a-icon type="close" v-show="visible"/>
		</a-button>
    <a-drawer
      title="Page style setting"
      placement="right"
      :closable="false"
      :visible="visible"
      @close="onClose"
    >
	  <a-card class="card">
         Open Tags-View
	  <a-switch v-model="openTagsView" @change="onChangeTagsView"/>
     </a-card>
	  <a-card class="card" >
		Sidebar Logo
	    <a-switch v-model="sidebarLogo" @change="onChangeSidebarLogo"/>
     </a-card>
	  <a-card class="card" >
		Menu Color
	    <a-switch v-model="onThemeColor" @change="onChangeThemeColor"/>
     </a-card>
	 
    </a-drawer>
    </div>

</template>

<script>
	export default {
		data() {
			return {
			widthMove:0,
			visible: false,
			openTagsView : this.$store.state.theme.openTagsView,
			sidebarLogo : this.$store.state.theme.sidebarLogo,
			onThemeColor : this.$store.state.theme.themeColor,
			}
		},
		methods: {
			 
			showDrawer() {
				this.visible = true;
					this.widthMove=256
			},
				
			onClose() {
				this.visible = false;
				this.widthMove=0
			},
			
			onChangeTagsView(checked) {			
					this.$store.commit('onOpenTagsView', checked)			 
			},
			
			onChangeSidebarLogo(checked) {
					this.$store.commit('onSidebarLogo', checked)		
			},

			onChangeThemeColor(checked){
					this.$store.commit('onThemeColor', checked)
					this.$store.commit('modifytheme', checked)					
			}


		}
			
	}
</script>

<style scoped lang="less">
.configure{
	width: 4rem;
	height: 3rem;
	position: relative;	
}
.ant-drawer-body {
    padding: 15px;
    font-size: 14px;
    line-height: 1.5;
    word-wrap: break-word;
}
.card{
	width: 100%;
	margin-top: 1rem;
}
.ant-switch{
	float: right;
}
.an{
	position: absolute;
	right: 0;
}
.ant-btn {
    line-height: 2.3;
    }
   
</style>
