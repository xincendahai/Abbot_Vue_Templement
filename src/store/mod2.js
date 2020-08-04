export default {
	// namespaced:true,
	state: {
		allPrice:0,//总价格
		carAll : JSON.parse(window.localStorage.getItem("carShop"))?JSON.parse(window.localStorage.getItem("carShop")):[],//购物车列表
		selectedAll :true,//全选
	},
	mutations: {
		//全选
		 SELECTALL(state){
		      state.selectedAll=!state.selectedAll
		        if(state.selectedAll){
		             state.carAll.forEach((item)=>{
		                    item.selected=true
		              })
		            }else{
		                state.carAll.forEach((item)=>{
		                    item.selected=false
		                })
		            }
		        },
		//单选
		SELECTONE(state,id){
			let index=state.carAll.findIndex(item=>{
			        return item.id==id
				})
				state.carAll[index].selected=!state.carAll[index].selected
				let flag=state.carAll.some((item)=>{
					// return item.selected==false
					if(item.selected == false){
						return item.selected == false
					}
				})
				if(!flag){       //如果全部选中，则全选状态也改变
					state.selectedAll=true
				}else{   
					state.selectedAll=false
				}
			},
		//数量加
		ADDNUM(state,id){
			let index=state.carAll.findIndex(item=>{
			        return item.id==id
				})
			if(state.carAll[index].buyCount<state.carAll[index].count){ //如果买的数量大于库存的数量
				return state.carAll[index].buyCount++
			}else{
				alert('商品库存不足')
				return state.carAll[index].buyCount == state.carAll[index].count
			}
		},
		//数量减
		REDUCENUM(state,id){
			let index=state.carAll.findIndex(item=>{
				return item.id==id
			 })
			if(state.carAll[index].buyCount<=1){
				 alert('购买数量不能小于1')
			   return state.carAll[index].buyCount=1
			}else{
			   return state.carAll[index].buyCount--
			}
		},
		//删除购物车
		DELCAR(state,id){	
			console.log(id)
				var indexs = id
				var list = []
				state.carAll.forEach((item,index)=>{
					let a = index+1
						if(a == indexs){
							return
						}else{
							list.push(item)
						}	
					})
				return state.carAll = list
		},
},
	actions:{
		selectAll({commit}){
		            commit('SELECTALL')
		       },
		selectone({commit},id){
			  commit('SELECTONE',id)
		},
		addnum({commit},id){
			  commit('ADDNUM',id)
		},
		reducenum({commit},id){
			 commit('REDUCENUM',id)
		},
		delcar({commit},id){
			 commit('DELCAR',id)
		}	
	},
	getters: {
		//获取购物车列表
		carList:(state)=>{
			if(state.selectedAll){
				state.carAll.forEach((item)=>{
					item.selected = true
				})
			}
			 localStorage.setItem("search",JSON.stringify(state.carAll)); 
			            return state.carAll
		},
		//获取结算金额            
		allMoney:(state)=>{
			let price = 0
			state.carAll.forEach((item,index)=>{
				if(item.selected){
					price += item.buyCount*item.price
				}
			})
			return state.allPrice = price
		}
	}
}