<template>
	<div id="layout_container">
		 <div class="nav-left"  :class="!this.$store.state.theme.themeColor? 'nav-leftLight':''"
		 :style="{width:(!this.$store.state.theme.collapsed ? '200px':'80px')}"
		 
		 >
            <layoutSide />   
         </div>
		  <div class="main">
                 <layoutHeader/>
				 <layoutCrumbs/>
				 <div class="content_center" :class="this.$store.state.theme.openTagsView == false ? 'contentHidden':''">
					  <router-view/>
				 </div>  
          </div>
		<div class="tip">
			<layoutConfigure/>
		</div>
	</div>

</template>

<script>
   import layoutHeader from '@/components/layout/header.vue'
   import layoutSide from '@/components/layout/side.vue'
   import layoutCrumbs from '@/components/layout/crumbs.vue'
   import layoutConfigure from '@/components/layout/configure.vue'

	export default {
		name: 'layout',
		components: {
			layoutHeader,
			layoutSide,
			layoutCrumbs,
			layoutConfigure,
		},
		data() {
			return {
				themeColor : this.$store.state.theme.themeColor,
				collapsed : this.$store.state.theme.collapsed,
			}
		},
		methods: {
			
			
		},
		mounted(){
			console.log(this.collapsed)
		}
	}
</script>

<style scoped lang="less">
.tip{
	height: 3rem;
	position:absolute;
	bottom: 0;
	top: 0;
	right: 0;
	margin: auto;
}


</style>
