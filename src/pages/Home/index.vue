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
				<div class="post bg-light" v-for="post in posts.posts" :key="post.pId">
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
						<router-link to="/detail" class="post-title">{{
							post.pname
						}}</router-link>
						<div class="meta">
							<span class="likes">点赞数{{ post.praise }}</span>
							<span class="comments">评论数{{ post.postReply.length }}</span>
							<span class="time"
								>发布于 {{ moment(post.pmodified).format("YYYY/MM/DD") }}</span
							>
						</div>
						<div class="content">
							{{ post.pcontent }}
						</div>
					</div>
				</div>
			</article>
			<!-- 侧边栏 -->
			<aside class="aside">
				<div class="aside-tips bg-light">
					<h5>公告</h5>
					<span>小破站正在施工中。。。</span>
				</div>
				<div class="aside-tips bg-light">
					这块是破站的信息,统计本栈的贴子数以及其他东西,（施工中。。。）
				</div>
			</aside>
			<!-- 发布贴子 -->
			<div class="post-one-post" :class="{ display: isPost }">
				<label for="title">贴子标题</label><i class="el-icon-edit"></i>
				<i class="el-icon-close" @click="isPost = false"></i>
				<el-input
					type="text"
					placeholder="请输入内容"
					v-model="pname"
					maxlength="10"
					show-word-limit
					id="title"
				>
				</el-input>
				<div style="margin: 20px 0"></div>
				<label for="content">贴子内容</label>
				<el-input
					type="textarea"
					placeholder="请输入内容"
					v-model="pcontent"
					maxlength="200"
					show-word-limit
					id="content"
					required
				>
				</el-input>
				<el-button type="success" round class="submit-post" @click="submitPost"
					>发布</el-button
				>
			</div>
		</main>
		<footer class="foot mt-5 mb-5">
			<!-- 页码 -->
			<el-button round class="more">加载更多</el-button>
		</footer>
		<el-button
			type="primary"
			icon="el-icon-edit"
			circle
			class="post-my-post"
			@click="isPost = !isPost"
		></el-button>
	</div>
</template>

<script>
import { mapState } from "vuex";
import moment from "moment";
export default {
	name: "Home",
	components: {},
	data() {
		return {
			pname: "",
			pcontent: "",
			isPost: false,
		};
	},
	methods: {
		moment,
		getPost() {
			this.$store.dispatch("getPosts");
		},
		async submitPost() {
			const { pname, pcontent } = this;
			if (pname == "" && pcontent == "") {
				alert("请输入内容");
			} else {
				try {
					await this.$store.dispatch("postPosts", { pname, pcontent });
					this.isPost = false;
					this.getPost();
					alert("发布成功");
				} catch (error) {
					alert(error.message);
				}
			}
		},
	},
	mounted() {
		this.getPost();
	},
	computed: {
		...mapState(["posts"]),
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
					.content {
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
				width: 95%;
				margin-top: 1rem;
				padding: 1rem 1.2rem;
				border-radius: 10px;
				&:hover {
					box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.06);
					transition: all 0.3s;
				}
			}
		}
		.post-one-post {
			display: none;
			height: 50vh;
			width: 50vw;
			position: fixed;
			top: 25vh;
			left: 25vw;
			background-color: #eee;
			border-radius: 5em;
			padding: 3em;
			transition: all 1s;
			.el-icon-close {
				float: right;
				position: relative;
				top: -1em;
				right: 1em;
				font-size: 20px;
				cursor: pointer;
			}
			.submit-post {
				float: right;
				margin-top: 10px;
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
	.post-my-post {
		position: fixed;
		bottom: 20vh;
		right: 20vh;
		padding: 15px;
	}
	.display {
		display: block !important;
	}
}
</style>
