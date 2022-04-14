import { reqGetPostDetail, reqPublishComment } from '../api';
const state = {
    postDetail: [],
    token: localStorage.getItem("TOKEN")
}
const mutations = {
    GETPOSTDETAIL(state, data) {
        state.postDetail = data
    }
}
const actions = {
    async getPostDetail({ commit }, pid) {
        let result = await reqGetPostDetail(pid)
        if (result.code == 200) {
            commit("GETPOSTDETAIL", result.data)
        }
    },
    async publishComment({ commit, state }, { comment, pid }) {
        let { token } = state
        let result = await reqPublishComment({ token, comment, pid })
        if (result.code == 200) {
            commit("GETPOSTDETAIL", result.data)
        }else{
            return Promise.reject(new Error('发布失败,请检查网络'))
        }
    }
}
const getters = {

}
export default {
    state,
    mutations,
    actions,
    getters
}