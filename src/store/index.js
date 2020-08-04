import Vue from "vue";
import Vuex from "vuex";
import mod1 from "./mod1"
import mod2 from "./mod2"
Vue.use(Vuex);
export default new Vuex.Store({
	modules: {	
		mod1:mod1,
		mod2:mod2
	}
});
