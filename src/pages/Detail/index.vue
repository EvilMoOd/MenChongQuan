<template>
	<div>
		<header class="full_page">
			<h1 class="title text-light">{{ detail.postDetail.pname }}</h1>
		</header>
		<main class="layout">
			<article
				class="post"
				v-for="posts in detail.postDetail.floor"
				:key="posts.pid"
			>
				<div class="user">
					<div class="userImg"></div>
				</div>
				<section>
					<div class="username">{{ posts.uname }}</div>
					<div class="user-msg">
						<span class="floor">第{{ posts.rid }}楼</span>
						<span class="time">{{
							moment(posts.rtime).format("YYYY/MM/DD/h:mm:ss a")
						}}</span>
					</div>
					<div class="praise"></div>

					<div class="content">
						{{ posts.rcontent }}
					</div>
				</section>
			</article>
		</main>
		<footer class="comment-place">
			<div class="block">
				<el-avatar :size="50"></el-avatar>
			</div>
			<input type="text" class="comment" v-model="rcontent" />
			<button class="submit" @click="submitComment">发布评论</button>
		</footer>
		<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
	</div>
</template>

<script>
import moment from "moment";
import { mapState } from "vuex";
export default {
	name: "detail",
	data() {
		return {
			rcontent: "",
			token: localStorage.getItem("TOKEN"),
		};
	},
	methods: {
		moment,
		getPostDetail() {
			this.$store.dispatch("getPostDetail", this.$route.params.pid);
		},
		async submitComment() {
			if (!this.token) {
				alert("请登录后再发布评论");
				this.$router.push("/ReLo");
			} else if (this.rcontent == "") {
				alert("评论不能为空");
			} else {
				const rcont2ent = this.rcontent;
				const pid = this.$route.params.pid;
				try {
					await this.$store.dispatch("publishComment", { rcontent, pid });
					location.reload();
					alert("发布成功");
				} catch (error) {
					alert(error.message);
				}
			}
		},
	},
	computed: {
		...mapState(["detail"]),
	},
	mounted() {
		this.getPostDetail();
	},
};
</script>

<style lang="scss" scoped>
.full_page {
	height: 20em;
	width: 1000px;
	margin: auto;
	background-image: url("~@/../public/images/postImg3.jpeg");
	background-size: cover;
	display: flex;
	justify-content: center;
	align-items: center;
	.title {
		text-align: center;
	}
}
.layout {
	margin: 0 auto;
	// padding: 2rem 15px;
	width: 1000px;
	.post {
		display: flex;
		border: solid 1px #e1e4e6;
		border-radius: 2em;
		&:hover {
			box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.06);
			transition: all 0.3s;
		}
		.user {
			width: 10%;
			height: 200px;
			background-color: #fff;
			.userImg {
				width: 80px;
				height: 80px;
				margin: 8px;
				border-radius: 50%;
				background-color: pink;
				border: double #eee;
			}
		}
		section {
			width: 90%;
			background-color: #fff;
			padding-right: 30px;
			padding-bottom: 30px;

			.username {
				font-size: 2rem;
			}
			.user-msg {
				color: #aaa;
				.floor {
					margin-right: 1em;
				}
			}
		}
	}
}
.comment-place {
	width: 100vw;
	height: 50px;
	position: fixed;
	bottom: 0%;
	display: flex;
	justify-content: center;
	background-color: #fff;
	border-top: #eee;
	.block {
		margin-right: 1em;
	}
	.comment {
		background-color: #eee;
		width: 600px;
		border-radius: 10em;
		padding: 1em;
		text-indent: 0.5em;
		border: none;
	}
	.submit {
		margin-left: 1em;
		border-radius: 5em;
		padding: 0 1.5em;
		background-color: #a370f7;
		color: #fff;
		border: none;
	}
}
</style>
