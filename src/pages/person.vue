<script lang="ts" setup>

</script>

<template>
	<div class="page">
		<header class="full_page">
			<div class="background"></div>
			<div class="person bg-white">
				<div class="person-message">
					<!-- 头像 -->
					<div class="head-pic"><el-avatar :size="100"></el-avatar></div>
					<div class="name fs-2">不会弹琴的木</div>
				</div>
				<div class="person-message2">
					<div class="intro fs-5">
						个人简介：Lorem ipsum dolor sit, itate at vero expedita sunt laborum
						culpa nisi at doloremque?Lorem ipsum dolor sit amet, consectetur
						adipisicing elit. Similique dolor minima maiores natus optio
						obcaecati qui quos, molestiae praesentium, et corporis
						exercitationem dolorem consequuntur quibusdam dignissimos enim
						corrupti, debitis consequatur?Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Voluptatum, laboriosam? Deserunt quibusdam a
						corporis in voluptates cum inventore iste quaerat voluptatem.
						Officia, eveniet earum illum pariatur qui soluta aliquid asperiores.
					</div>
				</div>
			</div>
		</header>
		<main>
			<!-- 侧边栏 -->
			<aside class="aside">
				<div class="aside-tips"></div>
				<div class="aside-tips"></div>
				<div class="aside-tips"></div>
				<div class="aside-tips"></div>
			</aside>
			<!-- 贴子区 -->
			<article class="post-place">
				<div class="post bg-light"></div>
				<div class="post bg-light"></div>
				<div class="post bg-light"></div>
				<div class="post bg-light"></div>
			</article>
			
		</main>
	</div>
</template>

<style lang="scss" scoped>
.page {
	background-color: #f4f5f6;
	.full_page {
		height: 20em;
		background-image: url("../assets/images/wlop.jpg");
		.background {
			height: 160px;
			width: 1320px;
			margin: 0 100px;
		}
		.person {
			height: 200px;
			width: 1320px;
			margin: 0 auto;
			border-radius: 5px;
			.person-message {
				height: 100px;
				width: 1300px;
				margin: 0 auto;
				padding: 10px;
				display: flex;
				.head-pic {
					margin-top: -30px;
				}
				.name {
					margin-top: 10px;
					margin-left: 1em;
				}
			}
			.person-message2 {
				height: 90px;
				width: 1300px;
				margin: 0 auto;
				display: flex;
				.intro {
					margin-left: 100px;
					overflow: hidden;
				}
			}
		}
	}
	main {
		height: 1500px;
		width: 1320px;
		display: flex;
		margin: 0 auto;
		padding: 2rem 15px;
		max-width: 1200px;
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
}
</style>
