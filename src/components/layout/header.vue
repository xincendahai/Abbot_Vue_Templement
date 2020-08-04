<template>
	<div class="header">
		<div class="left">
			<a-button  style="margin-left:1.5rem" @click="toggleCollapsed">
		      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
		   </a-button>
		</div>
		<div class="right" style="margin-left:4rem;">
			<a-avatar shape="square" size="small" icon="user" />
			小明
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
	// display: flex;
    align-items: center;
    height: 6.4rem;
    padding: 0;
    background: #fff;
	box-shadow: 0 1px 4px rgba(0,21,41,.08);
	line-height: 6.4rem;
}

</style>
