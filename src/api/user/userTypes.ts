//注册
export interface Register {
  username: string;
  password: string;
  email: string;
}
//登录
export interface Login {
  username: string;
  password: string;
}

export interface LoginData {
  info: UserInfo;
  token: string;
}

export interface UserInfo {
  uid?: number;
  username: string;
}

