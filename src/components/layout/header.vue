<template>
	<div class="header">
		<div class="leftHeader">
		    <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="toggleCollapsed" class="icon"/> 
			 <span> 
			  <!-- <a-breadcrumb-item>Home</a-breadcrumb-item> -->
              <!-- <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
              <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item> -->
			</span> 
		</div>
		<div class="rightHeader" >
			<a-avatar shape="square" size="small" icon="user" />
			小明
			<lang-lang></lang-lang>
		</div>		
	</div>
</template>

<script>
export default {
	  data() {
	    return {
		  collapsed: false,
	    };
	  },
	  methods: {
	     toggleCollapsed() {
		   this.collapsed = !this.collapsed;
		   this.$bus.$emit('clickMenu', this.collapsed)
	    },
	  },
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
	width: 150px;
	height: 100%;
}

</style>
