import Vue from 'vue'
import Router from 'vue-router'
//导入Notification提示框库
//import { Notification } from 'element-ui';
// import session from '@/config/basicData/session.js';

 import login from '../page/login.vue'
 import layout from '../page/layout.vue'
// import transit from '../page/transit.vue'

Vue.use(Router);

//自动化部署
const requireComponent = require.context('../page/contentViews', true, /\.vue$/);
const content_views_routes = requireComponent.keys().map(fileName => {
	// 获取组件配置
	const componentConfig = requireComponent(fileName);
	// 剥去文件名开头的 `./` 和结尾的扩展名
	const componentName = fileName.replace(/^\.\//, '').replace(/\.vue$/, '');
	// 全局注册组件
	const component = Vue.component(
		componentName.replace(/\//, '-'),
		// 如果这个组件选项是通过 `export default` 导出的，
		// 那么就会优先使用 `.default`，
		// 否则回退到使用模块的根。
		componentConfig.default || componentConfig
	);
	let router_ojb = {
		path: '/' + componentName,
		name: componentName.replace(/\//, '-'),
		component
	}
	console.log(router_ojb)
	return router_ojb;
});

const routes = [
	{
	path: '/login',
	name:'login',
	component: login,
	},
	{
	path: '/layout',
	name:'layout',
	component: layout,
	children: content_views_routes
	},
	// {
	// path: '/transit',
	// name:'transit',
	// component: transit,
	// }
  ]


//首页重定向
let resetPage = {
	path: '/',
	redirect: 'login'
};
routes.push(resetPage);
//添加404页面路由
// let notFoundPage = {
// 	path: '*',
// 	redirect: 'transit'
// };
// routes.push(notFoundPage);


const router = new Router({
	routes
});

/*
 * 全局验证登录-拦截页面路由
 */
// router.beforeEach((to, from, next) => {
//
// 	let _loginInfo = session.get.loginInfo();
//
// 	if ((to.path.indexOf('/login')>-1)) {
// 		next();
// 	} else {
// 		// 不是是登录页
// 		//验证前端登录标识
// 		if (_loginInfo) {
// 			//验证后端登录标识
// 			// admin.checkLogin((res) => {
// 				//登录有效，继续提交
// 				next();
// 			// });
// 		} else {
// 			Notification({
// 				title: '提示',
// 				message: '请登录！',
// 				type: 'warning',
// 				position: 'bottom-right'
// 			});
// 			next({
// 				path: '/login',
// 				// query:{id:sessionStorage.getItem('sd_system_id')}
// 			});
// 		}
// 	}
//
// });

export default router;
