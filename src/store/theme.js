export default {
	state: {
		openTagsView : true,
		sidebarLogo : true,
		themeColor : true,
		theme : "dark"
	},

	mutations: {
		
		onOpenTagsView: (state , payload) =>{
		  return state.openTagsView = payload
		},

		onSidebarLogo: (state , payload) =>{
			return state.sidebarLogo = payload
		},

		onThemeColor: (state , payload) =>{
			return state.themeColor = payload
		},
		
		modifytheme:  (state , payload) =>{
			if(payload == true){
				return state.theme = "dark"
			}else{
				return state.theme = "light"
			}
		
		},
	},

	actions:{
	
	},

	getters: {
	
	}
}