import axios from "axios";
//进度条
import nprogress from "nprogress";
import "nprogress/nprogress.css";

const token = localStorage.getItem("TOKEN");
//二次封装
const requests = axios.create({
	//基础路径自带/api
	baseURL: "http://127.0.0.1:4523/mock/619934",
	//请求超过20s则超时
	timeout: 20000,
});
//请求和响应拦截器
requests.interceptors.request.use((config) => {
	// token带给服务器
	if (token) {
        config.headers.token = token
    }
	nprogress.start();
	return config;
});

requests.interceptors.response.use(
	(res) => {
		nprogress.done();
		return res.data;
	},
	(error) => {
		nprogress.done();
		return Promise.reject(new Error("网络请求失败"));
	}
);

export default requests;
