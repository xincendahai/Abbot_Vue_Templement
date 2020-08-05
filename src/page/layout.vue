<template>
	<div id="layout_container">
		 <div class="nav-left">
            <layoutSide></layoutSide>    
         </div>
		  <div class="main">
                 <layoutHeader/>
				 <layoutCrumbs/>
				 <div class="content_center">
					  <router-view/>
				 </div>  
          </div>
	</div>

</template>

<script>
   import layoutHeader from '@/components/layout/header.vue'
   import layoutSide from '@/components/layout/side.vue'
   import layoutCrumbs from '@/components/layout/crumbs.vue'
	export default {
		name: 'layout',
		components: {
			layoutHeader,
			layoutSide,
			layoutCrumbs,
		},
		data() {
			return {

			}
		},
		methods: {

		},
	}
</script>

<style scoped lang="less">

</style>
