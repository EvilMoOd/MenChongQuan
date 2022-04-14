import useHttp from '../../utils/HTTP/useHttp';
import { BasicResp } from '../types';
import { PostDetail, SubmitComment } from './postDetailType';
//获取贴子详情页
export const reqGetPostDetail = (pid: string|string[]) => useHttp<BasicResp<PostDetail>>({ url: `/detail/${pid}`, method: 'get' })
//评论贴子，盖楼
export const reqPublishComment = (msg: SubmitComment) => useHttp<BasicResp<null>>({ url: `/detail/comment`, method: 'post', data: { ...msg } })

