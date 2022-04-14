import useHttp from "@/utils/HTTP/useHttp";
import { BasicResp } from "../types";
import { GetPosts, PostPosts } from "./postType";

//获取首页贴子
export const reqGetPosts = () => useHttp<BasicResp<GetPosts[]>>({ url: `/post/getAllPosts`, method: 'get', });
//发布贴子
export const reqPosts = (message: PostPosts) => useHttp<BasicResp<null>>({ url: '/post/publish', method: 'post', data: { ...message } })

