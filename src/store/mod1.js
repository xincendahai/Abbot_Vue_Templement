export default {
	state: {
		productList: [
		            {name: 'goods 1',price: 100},
		            {name: 'goods 2',price: 200},
		            {name: 'goods 3',price: 300},
		            {name: 'goods 3',price: 400}
		        ]
	},
	mutations: {
		 reducePrice: (state, payload) => {
		        return state.productList.forEach((product) => {
		            product.price -= payload;
		        })
		    }
	},
	actions:{
		reducePriceAsync: (context, payload) => {
		        setTimeout(()=> {
		            context.commit('reducePrice', payload);  // reducePrice为上一步mutation中的属性
		        },5000)
		    }
	},
	getters: {
		 getSaledPrice: (state) => {
		            let saleProduct = state.productList.map((item) => {
		                return {
		                    name: '**' + item.name + '**',
		                    price: item.price / 2
		                }
		            })
		            return saleProduct;
		        }
	}
}