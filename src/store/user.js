import { reqLoginOut, reqUserInfo, reqUserRegister, reqUserLogin } from '../api';

const state = {
    //页面刷新时vux的state会刷新重置，所以之前dispatch的登录token会重置
    token: localStorage.getItem('TOKEN'),
    userInfo: {}
}
const mutations = {
    USERLOGIN(state, token) {
        state.token = token
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo;
    },
    LOGINOUT(state) {
        state.token = "";
        state.userInfo = {};
        localStorage.removeItem("TOKEN")
        location.reload()
    }
}
const actions = {
    //注册
    async userRegister({ commit }, user) {
        let result = await reqUserRegister(user)
        console.log(result);
        if (result.code == 200) {
            //这里将ok：true返回给注册页
            return "ok";
        } else {
            return Promise.reject(new Error("账号已存在"));
        }
    },
    //登录
    async userLogin({ commit }, data) {
        let result = await reqUserLogin(data);
        if (result.code == 200) {
            //vueX存储token
            commit("USERLOGIN", result.data.token);
            // //存到localStorage
            localStorage.setItem("TOKEN", result.data.token)
            return "ok"
        } else {
            return Promise.reject(new Error("账号密码错误"));
        }
    },
    //退出登录
    async loginOut({ commit }) {
        let result = await reqLoginOut();
        commit("LOGINOUT")
    },
    //请求用户信息
    async getUserInfo({ commit }) {
        let result = await reqUserInfo();
        if (result.code == 200) {
            commit("GETUSERINFO", result.data);
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