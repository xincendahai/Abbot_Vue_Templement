import Vue from "vue";
import Vuex from "vuex";
import theme from "./theme"
//import mod2 from "./mod2"
Vue.use(Vuex);
export default new Vuex.Store({
	modules: {	
		theme:theme,
		// mod2:mod2
	}
});
