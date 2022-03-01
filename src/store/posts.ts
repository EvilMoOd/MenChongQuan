import { defineStore } from 'pinia';
import { reqGetPosts, reqPost } from '../api';

export const postsStore = defineStore('posts', {
state: () => {
return {
    posts:[],
}
},
actions: {
    async getPosts() {
        let result = await reqGetPosts()
        if (result.code == 200) {
            //这里将ok：true返回给注册页
            this.posts = result.data
        }
    },
    async postPosts(message:any) {
        let result = await reqPost(message)
        if (result.code == 200) {
            //这里将ok：true返回给注册页
            return 'ok'
        }else{
            return Promise.reject(new Error('发布失败,请检查网络'))
        }
    }
},
getters: {},
})