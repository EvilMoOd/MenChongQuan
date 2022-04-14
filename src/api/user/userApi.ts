import useHttp from '@/utils/HTTP/useHttp';
import { BasicResp } from '@/api/types';
import { Login, LoginData, UserInfo, Register } from './userTypes'

//注册
export const reqUserRegister = (params: Register) => {
  return useHttp<BasicResp<null>>({
    url: `/signup`,
    method: 'post',
    data: { ...params }
  });
};

//登录
export const reqUserLogin = (params: Login) => {
  return useHttp<BasicResp<LoginData>>({
    url: `/login`,
    method: 'post',
    data: { ...params },
  });
};

//获取用户信息
export const reqUserInfo = () => {
  return useHttp<BasicResp<UserInfo>>({
    url: `/user/detail`,
    method: 'get',
  });
};

