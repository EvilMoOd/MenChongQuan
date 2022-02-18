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
				<!-- 每条贴子信息 -->
				<div class="post bg-light">
					<!-- 左侧图片 -->
					<div class="post-img">
						<router-link to="/detail">
							<img
								src="@/../public/images/postImg1.jpg"
								alt=""
								class="postImg"
							/>
						</router-link>
					</div>
					<!-- 右侧标题发帖日期，点赞数，评论数，贴子内容 -->
					<div class="post-msg">
						<router-link to="/detail" class="post-title"
							>贴子标题踢踢踢踢踢踢踢踢踢踢踢踢大概这么长</router-link
						>
						<div class="meta">
							<span class="likes">点赞数666</span>
							<span class="comments">评论数666</span>
							<span class="time">发布于 2022/2/17</span>
						</div>
						<div class="content">
							这里是内容Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Natus eos esse enim eius ipsam consequuntur, autem doloremque,
							atque sapiente nisi, molestiae temporibus ratione pariatur
							repudiandae quia dolorem qui nesciunt delectus?
						</div>
					</div>
				</div>
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
	data() {
		return {
			title: "",
		};
	},
	mounted() {
		this.$store.dispatch("getPost");
	},
};
</script>

<style lang="scss" scoped>
.page {
	.full_page {
		height: 100vh;
		background-image: url("~@/assets/images/wlop.jpg");
		background-size: cover;
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
		background-color: #eee;
		.post-place {
			width: 75%;

			@media screen and (max-width: 900px) {
				width: 100%;
			}
			.post {
				margin-top: 1rem;
				height: 20em;
				border-radius: 10px;
				display: flex;
				flex-direction: row;
				align-items: center;
				.post-img {
					height: 100%;
					width: 45%;
					overflow: hidden;
					.postImg {
						height: 100%;
						width: 100%;
						&:hover {
							transform: scale(1.1);
							transition: all 0.6s;
						}
					}
				}
				.post-msg {
					display: inline-block;
					overflow: hidden;
					padding: 0 40px;
					width: 55%;
					.post-title {
						display: inline-block;
						transition: all 0.5s;
						font-size: 1.72em;
						line-height: 1.4;
						color: black;
						margin-bottom: 1rem;
						&:hover {
							color: #49b1f5;
						}
					}
					.meta {
						color: #aaa;
						.likes {
							margin-right: 1em;
						}
						.comments {
							margin-right: 1em;
						}
						
					}
					.content{
						margin-top: 0.3rem;
					}
				}
				&:hover {
					box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.06);
					transition: all 0.3s;
				}
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
				background-color: #ccc;
				border-radius: 10px;
				&:hover {
					box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.06);
					transition: all 0.3s;
				}
			}
		}
	}
	.foot {
		display: flex;
		justify-content: center;
	}
	a {
		color: #aaa;
		text-decoration: none;
	}
}
</style>
