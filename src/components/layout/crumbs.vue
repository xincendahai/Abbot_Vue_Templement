<template>
	<div class="crumbs">
		<i class="operation flex-hv-center transition prev-btn el-icon-d-arrow-left" @click="move('prev')"></i>
		<ul class="crumbs-list-model transition crumbs-list" ref="crumbs_list_model">
			<li class="crumb-item left flex-hv-center transition" v-for="(item,index) in crumbsList"
			:key="index" :id="'crumb'+index" :class="nowCrumb==item.path?'active':''" @click="toPage(item.path)">
				<span class="transition">{{item.name}}</span>
				<i class="el-icon-error transition" @click.stop="remove(index)"></i>
			</li>
		</ul>
		<i class="operation flex-hv-center transition next-btn el-icon-d-arrow-right" @click="move('next')"></i>
	</div>
</template>
<script>
	export default {
		name:'globle-crumbs',
		data() {
			return {
				nowCrumb:'',
				crumbsList:[]
			}
		},
		watch: {
			$route() {
				this.judgeRouter();
			}
		},
		methods: {
			move(type){
				let pos = this.$refs.crumbs_list_model.scrollLeft;
				if (type=='prev') {
					if (pos>0&&pos<60) {
						this.$refs.crumbs_list_model.scrollTo(0, 0);
					} else{
						this.$refs.crumbs_list_model.scrollTo(pos-100, 0);
					}
				} else{
					this.$refs.crumbs_list_model.scrollTo(pos+100, 0);
				}
			},
			toPage(path){
                this.$router.push(path);
                //  this.$bus.$emit('layoutMenu', path) 
			},
			remove(index){
				const nowRoute = this.$route;
				if (this.crumbsList.length>1) {
					if (this.crumbsList[index].path == nowRoute.path) {
						let pos = index==0?1:index-1;
						this.toPage(this.crumbsList[pos].path);
					}
					this.crumbsList.splice(index,1);
				} else {
					this.$message({
						message: '请至少保留一个页面！',
						type: 'error'
					});
				}
			},
			judgeRouter(){
				const nowRoute = this.$route;
				this.nowCrumb = nowRoute.path;
				let pathArr = this.crumbsList.map(item=>item.path)
				if (pathArr.indexOf(nowRoute.path)<0) {
                    let _name = '';
                    let menuList = JSON.parse(sessionStorage.getItem("menuList"))
					menuList.forEach(item=>{
						if (item.menuUrl==nowRoute.path) {
							_name = item.menuName;
							this.crumbsList.push({
								name:_name,
								path:nowRoute.path
							});
						}else if(item.child){
							item.child.forEach(item2=>{
								if (item2.menuUrl == nowRoute.path) {
									_name = item2.menuName;
									this.crumbsList.push({
										name:_name,
										path:nowRoute.path
									});
								}
							});
						}
					});
				}
				setTimeout(()=>this.roll(),100)
			},
			roll(){
				let pathArr = this.crumbsList.map(item=>item.path)
				let _id = 'crumb'+pathArr.indexOf(this.nowCrumb);
				let el = document.getElementById(_id);
				let _pos = el.offsetLeft;
				this.$refs.crumbs_list_model.scrollTo(_pos, 0);
			},
		},
		mounted() {
            this.judgeRouter();
            this.$bus.$on('indexMenu', val => {    
                this.nowCrumb = val
            })
		}
	}
</script>
