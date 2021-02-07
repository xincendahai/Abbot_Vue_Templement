<template>
    <div style="width:100%;height: 100%;" >
    <div v-if="this.$store.state.theme.sidebarLogo">
        <div class="layout_logo" v-if="!collapsed" style="padding: 0 1rem" 
        :class="this.$store.state.theme.themeColor == false ? 'layout_logoColor':'layout_logo' "
        >
            {{ $t('home.title')}}	
        </div>
        <div class="layout_logo" v-else>
                <a-icon type="global" />
        </div>
    </div>
    <a-menu
        mode="inline"
        :theme= this.$store.state.theme.theme
        @click="eventMenuClick"
        :default-selected-keys="[$route.path]"
        :selectedKeys="[$route.path]" 
		 :inline-collapsed="this.collapsed"
    >
        <template v-for="(item,index) in menuList">
        <a-menu-item v-if="item.child.length === 0" :key="item.menuUrl">
            <a-icon type="pie-chart" />
            <span>
               {{$t('system.'+ item.menuName)}}
            </span>
        </a-menu-item>
        <a-sub-menu v-else :key="index">
            <span slot="title"><a-icon type="mail" />
            <span>
                 {{$t('system.'+ item.menuName)}}
             </span>
            </span>
                <a-menu-item v-for="val in item.child" :key="val.menuUrl">
                     {{$t('system.'+ val.menuName)}}
                </a-menu-item>
        </a-sub-menu>
    </template>
    </a-menu>
    </div>
</template>

<script>
	export default {
	  data() {
	    return {
          collapsed : false,
          menuList :[],
          defaultKey :'',
	    };
      },
      watch: {       
       
		},
	  methods: {
          //获取menu的列表
          getMenuData(){
              this.menuList = JSON.parse(sessionStorage.getItem("menuList")); 
              if(this.menuList.length>0){
                  if(this.menuList[0].child.length > 0){
                      this.defaultKey = this.menuList[0].child[0].menuUrl
                  }else{
                      this.defaultKey = this.menuList[0].menuUrl
                  }
              } 
              this.$bus.$emit('indexMenu', this.defaultKey) 
          },
          //切换路由
          eventMenuClick({ item, key, keyPath }) {
             this.$router.push({
                path: key
            })
          },  
        },


        mounted() {
             this.$bus.$on('clickMenu', mes => {
                this.collapsed = mes 
            })
            this.getMenuData();  
                          
        }
	};
</script>

<style scoped lang="less">
.layout_logo{
    width: 100%;
    height: 6.4rem;
    line-height: 6.4rem;
    color: white;
    text-align: center;
    font-size: 2.2rem;
}
.layout_logoColor{
    width: 100%;
    height: 6.4rem;
    line-height: 6.4rem;
    color: #0F5B42;
    text-align: center;
    font-size: 2.2rem;
}



</style>
