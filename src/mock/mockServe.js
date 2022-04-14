import Mock from 'mockjs';
//webpack里json、图片默认对外暴露
import login from './login.json'
import Posts from '@/mock/Posts'
import detail from '@/mock/detail'
import user from '@/mock/user'

//两个参数：请求地址，请求数据
Mock.mock("/mock/signup", { code: 200, })
Mock.mock("/mock/login", login);
Mock.mock("/mock/getAllPosts", { code: 200, data: Posts })
Mock.mock("/mock/posts", { code: 200 })
Mock.mock("/mock/detail/1", detail)
Mock.mock("/mock/detail/2", detail)
Mock.mock("/mock/detail/comment", detail)
Mock.mock("/mock/getUserInfo", user)