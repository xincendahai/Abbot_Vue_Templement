<template>
	<div class="configure">
    <a-button type="primary" @click="showDrawer">
      Open
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
			visible: false,
			openTagsView : this.$store.state.theme.openTagsView,
			sidebarLogo : this.$store.state.theme.sidebarLogo,
			onThemeColor : this.$store.state.theme.themeColor,
			}
		},
		methods: {
			showDrawer() {
				this.visible = true;
			},
			onClose() {
				this.visible = false;
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
	height: 4rem;
	background: hotpink;	
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
</style>
