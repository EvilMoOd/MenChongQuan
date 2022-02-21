import { reqGetPostDetail } from '../api';
const state = {
    postDetail: [],
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