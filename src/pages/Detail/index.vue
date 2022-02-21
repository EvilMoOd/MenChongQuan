<template>
	<div>
		<header class="full_page">
			<h1 class="title text-light">{{detail.postDetail.pname}}</h1>
		</header>
		<main class="layout">
			<article class="post" v-for="posts in detail.postDetail.floor" :key="posts.pid">
				<div class="user">
					<div class="userImg"></div>
				</div>
				<section>
					<div class="username">{{ posts.uname }}</div>
					<div class="user-msg">
						<span class="floor">第{{posts.rid}}楼</span>
						<span class="time">{{moment(posts.rtime).format("YYYY/MM/DD/h:mm:ss a")}}</span>
					</div>
					<div class="praise"></div>

					<div class="content">
						{{posts.rcontent}}
					</div>
				</section>
			</article>
		</main>
	</div>
</template>

<script>
import moment from 'moment';
import { mapState } from "vuex";
export default {
	name: "detail",
	methods: {
		moment
	},
	computed: {
		...mapState(['detail']),
	},
	mounted() {
		this.$store.dispatch("getPostDetail",this.$route.params.pid)
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
	padding: 2rem 15px;
	width: 1000px;
	.post {
		display: flex;
		border: solid 1px #e1e4e6;
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
</style>
