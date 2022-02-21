import axios from "axios";
//进度条
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import store from "../store";

//二次封装
const requests = axios.create({
    //基础路径自带/api
    baseURL: "/mock",
    //请求超过5s则超时
    timeout: 5000,
});
//请求和响应拦截器
requests.interceptors.request.use((config) => {
    if (store.state.user.token) {
        config.headers.token = store.state.user.token
    }
    nprogress.start();
    return config;
});

requests.interceptors.response.use((res) => {
    nprogress.done();
    return res.data;
}, (error) => {
    nprogress.done();
    alert('服务器响应失败')
});

export default requests;