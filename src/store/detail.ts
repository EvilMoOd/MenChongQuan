import { defineStore } from "pinia";
import { reqGetPostDetail, reqPublishComment } from "../api";

export const detailStore = defineStore("detail", {
	state: () => {
		return {
			postDetail: { pname: String, floor:[]},
			token: localStorage.getItem("TOKEN"),
		};
	},
	actions: {
		//获取贴子信息
		async getPostDetail(pid: any) {
			try {
				let result = await reqGetPostDetail(pid);
				this.postDetail = result.data;
			} catch {
				return Promise.reject(new Error("获取贴子失败,请检查网络"));
			}
		},
		//发帖
		async publishComment({ rcontent, pid }: any) {
			try {
				await reqPublishComment({ rcontent, pid });
				return "ok";
			} catch {
				return Promise.reject(new Error("发布失败,请检查网络"));
			}
		},
	},
	getters: {},
});
