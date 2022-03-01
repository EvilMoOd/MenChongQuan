//配置路由
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
	//重定向
	{
		path: "/",
		redirect: "/home",
	},
	{
		path: "/home",
		component: () => import("../pages/home.vue")
	},
	{
		path: "/person",
		component: () => import("../pages/person.vue")
	},
	{
		path: "/message",
		component: () => import("../pages/message.vue"),
	},
	{
		path: "/ReLo",
		component: () => import("../pages/relo.vue"),
	},
	{
		path: "/detail/:pid",
		component: () => import("../pages/detail.vue"),
	},
];

export default createRouter({
	history: createWebHashHistory(),
	routes,
	scrollBehavior(_to, _from, _savePosition) {
		return { top: 0 };
	},
});
