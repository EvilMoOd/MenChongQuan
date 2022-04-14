import { defineStore } from "pinia";
import { reqUserInfo, reqUserRegister, reqUserLogin } from "../api";
export const userStore = defineStore("user", {
	state: () => {
		return {
			//页面刷新时vux的state会刷新重置，所以之前dispatch的登录token会重置
			token: localStorage.getItem("TOKEN"),
			userInfo: {
				username: String,
			},
		};
	},
	actions: {
		//注册
		async userRegister(user: any) {
			let result = await reqUserRegister(user);
			if (result.code == 200) {
				//这里将ok：true返回给注册页
				return "ok";
			} else {
				return Promise.reject(new Error("账号已存在"));
			}
		},
		//登录
		async userLogin(data: any) {
			let result = await reqUserLogin(data);
			if (result.code == 200) {
				//vueX存储token
				this.token = result.data.token;
				// //存到localStorage
				localStorage.setItem("TOKEN", result.data.token);
				return "ok";
			} else {
				return Promise.reject(new Error("账号密码错误"));
			}
		},
		//退出登录
		async loginOut() {
			this.token = "";
			this.userInfo = {};
			localStorage.removeItem("TOKEN");
			location.reload();
		},
		//请求用户信息
		async getUserInfo() {
			let result = await reqUserInfo();
			if (result.code == 200) {
				this.userInfo = result.data;
			}
		},
	},
});
