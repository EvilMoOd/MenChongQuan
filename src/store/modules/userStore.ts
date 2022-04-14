import { defineStore } from 'pinia';
import { reqUserInfo, reqUserRegister, reqUserLogin } from "@/api/user/userApi";
import { Register,Login } from '@/api/user/userTypes';

export interface UserInfo {
  id: number;
  username: string;
  email: string;
  token: string;
}

const useUserStore = defineStore({
  id: 'user',
  state: (): Partial<UserInfo> => ({
    id: -1,
    username: '',
    email: '',
    token: '',
  }),

  actions: {
    //注册
    async register(user:Register) {
      let {code} = await reqUserRegister(user);
      if (code == 200) {
        //这里将ok：true返回给注册页
        return "ok";
      } else {
        return Promise.reject(new Error("账号已存在"));
      }
    },
    //登录
    async login(user: Login) {
      let {code,data} = await reqUserLogin(user);
      if (code == 200) {
        //vueX存储token
        this.token = data.token;
        // //存到localStorage
        localStorage.setItem("TOKEN", data.token);
        return "ok";
      } else {
        return Promise.reject(new Error("账号密码错误"));
      }
    },
    //退出登录
    async loginOut() {
      //TODO 清空state
      this.token = "";
      localStorage.removeItem("TOKEN");
      location.reload();
    },
    //请求用户信息
    async getUserInfo() {
      let {code,data} = await reqUserInfo();
      if (code == 200) {
        // TODO 更新仓库state
        this.$state = data;
      }
    },
  },
});

//create
const instance = useUserStore();

instance.$subscribe((mutation, state) => {
  localStorage.setItem(instance.$id, JSON.stringify(state));
});

//init
const val = localStorage.getItem(instance.$id);
if (val) {
  instance.login(JSON.parse(val));
}

export default useUserStore;
