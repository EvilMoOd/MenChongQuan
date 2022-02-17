import axios from "axios";
//进度条
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import store from "../store";

//二次封装
const requests = axios.create({
    //基础路径自带/api
    baseURL: "/api",
    //请求超过20s则超时
    timeout: 20000,
});
//请求和响应拦截器
requests.interceptors.request.use((config) => {
    // token带给服务器
    if(store.state.user.token){
        config.headers.token = store.state.user.token
    }
    nprogress.start();
    return config;
});

requests.interceptors.response.use((res) => {
    nprogress.done();
    return res.data;
}, (error) => {
    return Promise.reject(new Error('faile'))
});

export default requests;