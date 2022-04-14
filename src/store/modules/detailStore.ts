import { defineStore } from "pinia";
import { reqGetPostDetail, reqPublishComment } from "@/api/postsDetail/postDetailApi";
import { pid } from "process";
import { PostDetail } from "@/api/postsDetail/postDetailType";

export const useDetailStore = defineStore("detail", {
  state: (): PostDetail => ({
    pname: '',
    pid: -1,
    floor: []
  }),
  actions: {
    //获取贴子信息
    async getPostDetail(pid: string | string[]) {
      try {
        let { data } = await reqGetPostDetail(pid);
        this.$state = data;
      } catch {
        return Promise.reject(new Error("获取贴子失败,请检查网络"));
      }
    },
    //发帖
    async publishComment(rcontent: string, pid: any) {
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

