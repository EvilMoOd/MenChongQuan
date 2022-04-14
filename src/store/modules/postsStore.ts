import { defineStore } from 'pinia';
import { reqGetPosts, reqPosts } from '@/api/posts/postsApi';
import { GetPosts } from '@/api/posts/postType';

export const usePostsStore = defineStore('posts', {
  state: (): GetPosts[] => ([{
    pcontent: '',
    pid: -1,
    pcreate: -1,
    pname: '',
    postReply: -1,
    praise: -1,
    topic: { tid: -1 },
    user: { uid: -1, uname: '' }
  }]),
  actions: {
    async getPosts() {
      let { code, data } = await reqGetPosts()
      if (code == 200) {
        //这里将ok：true返回给注册页
        this.$state = data
      }
    },
    async postPosts(pname: string, pcontent: string) {
      let { code } = await reqPosts({ pname, pcontent })
      if (code == 200) {
        //这里将ok：true返回给注册页
        return 'ok'
      } else {
        return Promise.reject(new Error('发布失败,请检查网络'))
      }
    }
  },
})
