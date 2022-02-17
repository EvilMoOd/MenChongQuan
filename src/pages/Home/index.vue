<template>
	<div class="page">
		<!-- 壁纸 -->
		<header class="full_page">
			<h1>二次元栈</h1>
		</header>
		<br />
		<br />
		<br />
		<br />
		<main class="layout">
			<!-- 贴子区 -->
			<article class="post-place">
				<div class="post bg-light"></div>
				<div class="post bg-light"></div>
				<div class="post bg-light"></div>
				<div class="post bg-light"></div>
			</article>
			<!-- 侧边栏 -->
			<aside class="aside">
				<div class="aside-tips"></div>
				<div class="aside-tips"></div>
				<div class="aside-tips"></div>
				<div class="aside-tips"></div>
			</aside>
		</main>
		<footer class="foot mt-5 mb-5">
			<!-- 页码 -->
			<el-button round class="more">加载更多</el-button>
		</footer>
	</div>
</template>

<script>
export default {
	name: "Home",
	components: {},
};
</script>

<style lang="scss" scoped>
.page {
	.full_page {
		height: 100vh;
		background-image: url('~@/assets/images/wlop.jpg');
		display: flex;
		justify-content: center;
		align-items: center;
		h1 {
			font-size: 4rem;
			font-weight: bold;
			white-space: nowrap;
			overflow: hidden;
			letter-spacing: 5px;
			color: #fff;
			position: relative;
			animation: typing 3s steps(5) forwards infinite alternate-reverse;
			&::after {
				content: "";
				display: block;
				position: absolute;
				top: 0;
				right: 0;
				width: 2px;
				height: 100%;
				background-color: #fff;
				animation: blink 1s linear infinite;
			}
		}
	}

	@keyframes blink {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
	@keyframes typing {
		0% {
			width: 0;
		}
		100% {
			width: 345px;
		}
	}
	.layout {
		display: flex;
		margin: 0 auto;
		padding: 2rem 15px;
		max-width: 1200px;
		background-color: #ccc;
		.post-place {
			width: 75%;
			@media screen and (max-width: 900px) {
				width: 100%;
			}
			.post {
				margin-top: 1rem;
				height: 300px;
				border-radius: 10px;
			}
		}
		.aside {
			width: 25%;
			padding-left: 15px;
			@media screen and (max-width: 900px) {
				display: none;
			}
			.aside-tips {
				height: 200px;
				width: 95%;
				margin-top: 2rem;
				background-color: gray;
				border-radius: 10px;
			}
		}
	}
	.foot {
		display: flex;
		justify-content: center;
	}
}
</style>
