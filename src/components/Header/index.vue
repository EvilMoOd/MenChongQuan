<template>
	<div>
		<el-menu
			:default-active="activeIndex"
			class="el-menu-demo right"
			mode="horizontal"
			router
		>
			<el-menu-item index="/home">首页</el-menu-item>
			<!-- 登录成功之后记得写个if去掉 -->
			<el-menu-item index="/ReLo">登录/注册</el-menu-item>
			<el-submenu index="/person">
				<template slot="title">个人主页</template>
				<el-menu-item index="/Person"> 我的主页 </el-menu-item>
				<el-menu-item index="/Person">我的贴子</el-menu-item>
				<el-menu-item index="/Person">我的评论</el-menu-item>
			</el-submenu>
			<el-menu-item index="/message">消息中心</el-menu-item>
		</el-menu>
		<div class="line"></div>
	</div>
</template>

<script>
export default {
	name: "Header",
	data() {
		return {
			activeIndex: "1",
			activeIndex2: "1",
		};
	},
	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		},
	},
};
</script>

<style lang="scss" scoped>
.right {
	display: flex;
	justify-content: flex-end;
	position: absolute;
	z-index: 90;
	width: 100%;
	animation: headerNoOpacity 1s;
}
a{
	text-decoration: none;
}
</style>
