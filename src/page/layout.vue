<template>
	<div id="layout_container">
		 <div class="nav-left" :class="this.$store.state.theme.themeColor == false ? 'nav-leftLight':''">
            <layoutSide/>   
         </div>
		  <div class="main">
                 <layoutHeader/>
				 <layoutCrumbs/>
				 <div class="content_center" :class="this.$store.state.theme.openTagsView == false ? 'contentHidden':''">
					  <router-view/>
				 </div>  
          </div>
		<div class="p">
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
				themeColor : this.$store.state.theme.themeColor
			}
		},
		methods: {

		},
	}
</script>

<style scoped lang="less">
.p{
	width: 4rem;
	height: 4rem;
	position:absolute;
	bottom: 10%;
	right: 15%;
	overflow: hidden;
}
</style>
