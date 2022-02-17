import Mock from 'mockjs';
//webpack里json、图片默认对外暴露
import login from './login.json'

//两个参数：请求地址，请求数据
Mock.mock("/mock/login",{code:200,data:login});

