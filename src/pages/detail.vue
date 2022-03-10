<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { detailStore } from "../store/detail";
import moment from "moment";
name: "detail";

const route = useRoute();
const router = useRouter();
const store = detailStore();

let content = ref("");
moment;

function getPostDetail() {
	//获取路由地址
	store.getPostDetail(route.params.pid);
}
async function submitComment() {
	const pid = route.params.pid;
	const rcontent = content.value
	if (!localStorage.getItem("TOKEN")) {
		alert("请登录后再发布评论");
		router.push("/ReLo");
	} else if (!content.value) {
		alert("评论不能为空");
	} else {
		try {
			await store.publishComment({ rcontent, pid });
			location.reload();
			alert("发布成功");
		} catch (error) {
			alert(error.message);
		}
	}
}
onMounted(() => {
	getPostDetail();
});
</script>

<template>
	<div>
		<header class="full_page">
			<h1 class="title text-light">{{ store.postDetail.pname }}</h1>
		</header>
		<main class="layout">
			<article
				class="post"
				v-for="(posts,index) in store.postDetail.floor"
				:key="posts.rid"
			>
				<div class="user">
					<div class="userImg"></div>
				</div>
				<section>
					<div class="username">{{ posts.uname }}</div>
					<div class="user-msg">
						<span class="floor">第{{ index+1 }}楼</span>
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
			<input type="text" class="comment" v-model="content" />
			<button class="submit" @click="submitComment">发布评论</button>
		</footer>
		<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
	</div>
</template>

<style lang="scss" scoped>
.full_page {
	height: 20em;
	width: 1000px;
	margin: auto;
	background-image: url("../assets/images/cat1.jpg");
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
