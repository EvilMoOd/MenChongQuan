import { reqGetPosts, reqPost } from '../api';
const state = {
    posts: [],
}
const mutations = {
    GETPOSTS(state, data) {
        state.posts = data.data
    }
}
const actions = {
    async getPosts({ commit }) {
        let result = await reqGetPosts()
        if (result.code == 200) {
            //这里将ok：true返回给注册页
            commit('GETPOSTS', result.data)
        }
    },
    async postPosts({ commit },message) {
        let result = await reqPost(message)
        if (result.code == 200) {
            //这里将ok：true返回给注册页
            return 'ok'
        }else{
            return Promise.reject(new Error('发布失败,请检查网络'))
        }
    }
}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}