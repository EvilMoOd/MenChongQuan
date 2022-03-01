<script lang="ts" setup>
import { ref, computed, onMounted } from "vue";
import { userStore } from "../store/user";
name:"NavHeader"
const store = userStore();

function loginOut() {
	store.loginOut();
}

let token = computed(() => {
	return store.token;
});
let username = computed(() => {
	return store.userInfo.username;
});

onMounted(() => store.getUserInfo());
</script>

<template>
	
		<el-menu
			class="el-menu-demo right"
			mode="horizontal"
			router
		>
			<el-menu-item index="/home">首页</el-menu-item>
			<!-- 登录成功之后记得写个if去掉 -->
			<el-menu-item index="/ReLo" v-if="!token">登录/注册</el-menu-item>
			<el-sub-menu index="/person" v-if="token">
				<template #title>{{username}}</template>
				<el-menu-item index="/Person"> 我的主页 </el-menu-item>
				<el-menu-item index="/Person">我的贴子</el-menu-item>
				<el-menu-item index="/Person">我的评论</el-menu-item>
				<el-menu-item index="/login" @click="loginOut">退出登录</el-menu-item>
			</el-sub-menu>
			<el-menu-item index="/message">消息中心</el-menu-item>
		</el-menu>
</template>

<style lang="scss" scoped>
.right {
	display: flex;
	justify-content: flex-end;
	position: absolute;
	z-index: 90;
	width: 100%;
	animation: headerNoOpacity 1s;
}
a {
	text-decoration: none;
}
</style>
