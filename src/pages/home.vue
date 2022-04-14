<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import { usePostsStore } from '../store/modules/postsStore';
  import { Edit } from '@element-plus/icons-vue';
  import { formDate } from '@/utils/time';

  const posts = usePostsStore();
  const router = useRouter();

  let title = ref('');
  let content = ref('');
  let isPost = ref(false);
  //发贴
  async function submitPost() {
    const pname = title.value;
    const pcontent = content.value;
    if (!localStorage.getItem('TOKEN')) {
      alert('登录后再发帖');
      router.push('/ReLo');
    } else if (!title.value) {
      alert('请输入标题');
    } else if (!content.value) {
      alert('请输入内容');
    } else {
      try {
        await posts.postPosts(pname, pcontent);
        isPost.value = false;
        posts.getPosts();
        alert('发布成功');
      } catch (error: any) {
        alert(error.message);
      }
    }
  }
  //获取贴子
  onMounted(() => {
    posts.getPosts();
    console.log(posts)
  });
</script>
<template>
  <div class="page">
    <!-- 壁纸 -->
    <header class="full_page">
      <h1>萌宠圈🐇</h1>
    </header>
    <main class="layout">
      <!-- 贴子区 -->
      <article class="post-place">
        <!-- 每条贴子信息 -->
        <div class="post" v-for="post in posts.$state" :key="post.pid">
          <!-- 左侧图片 -->
          <div class="post-img">
            <router-link :to="`/detail/${post.pid}`">
              <img src="../assets/images/cat2.png" alt="" class="postImg" />
            </router-link>
          </div>
          <!-- 右侧标题发帖日期，点赞数，评论数，贴子内容 -->
          <div class="post-msg">
            <router-link :to="`/detail/${post.pid}`" class="post-title">
              {{ post.pname }}
            </router-link>
            <div class="meta">
              <span class="likes">点赞数{{ post.praise }}</span>
              <span class="comments">评论数{{ post.postReply }}</span>
              <span class="time">发布于 {{ formDate(post.pcreate) }}</span>
            </div>
            <div class="content">
              {{ post.pcontent }}
            </div>
          </div>
        </div>
      </article>
      <!-- 侧边栏 -->
      <aside class="aside">
        <div class="aside-tips">
          <h5>公告</h5>
          <span>小破站正在施工中。。。</span>
        </div>
        <div class="aside-tips">
          欢迎来到萌宠圈
          <p>在这里你可以与其他喜欢萌宠的伙伴一起讨论交流 分享与宠物们的快乐与喜悦时光</p>
        </div>
      </aside>
      <!-- 发布贴子 -->
      <div class="post-one-post" :class="{ display: isPost }">
        <label for="title">贴子标题</label>
        <i class="el-icon-edit"></i>
        <svg
          class="icon close"
          @click="isPost = false"
          width="20"
          height="20"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          data-v-042ca774=""
        >
          <path
            fill="currentColor"
            d="M195.2 195.2a64 64 0 0190.496 0L512 421.504 738.304 195.2a64 64 0 0190.496 90.496L602.496 512 828.8 738.304a64 64 0 01-90.496 90.496L512 602.496 285.696 828.8a64 64 0 01-90.496-90.496L421.504 512 195.2 285.696a64 64 0 010-90.496z"
          ></path>
        </svg>
        <el-input
          type="text"
          placeholder="请输入内容"
          v-model="title"
          maxlength="10"
          show-word-limit
          id="title"
        ></el-input>
        <div style="margin: 20px 0"></div>
        <label for="content">贴子内容</label>
        <el-input
          type="textarea"
          placeholder="请输入内容"
          v-model="content"
          maxlength="200"
          show-word-limit
          id="content"
          required
        ></el-input>
        <el-button type="success" round class="submit-post" @click="submitPost">发布</el-button>
      </div>
      <!-- 发帖按钮 -->
      <el-button
        type="primary"
        :icon="Edit"
        circle
        class="post-my-post"
        @click="isPost = !isPost"
      ></el-button>
    </main>
    <footer class="foot">
      <!-- 页码 -->
    </footer>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<style lang="scss" scoped>
  .page {
    background-image: url('../assets/images/bg.jpg');
    background-attachment: fixed;
    background-size: cover;
    .full_page {
      height: 100vh;
      background-image: url('../assets/images/cat.jpg');
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
          content: '';
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
      .post-place {
        width: 75%;
        overflow: hidden;
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
          box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.06);
          background-color: #fff;
          .post-img {
            height: 100%;
            width: 45%;
            overflow: hidden;
            @media screen and (max-width: 650px) {
              display: none;
            }
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
            padding: 0 40px;
            width: 55%;
            @media screen and (max-width: 650px) {
              width: 100%;
            }
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
            box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.15);
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
          background-color: #fff;
          width: 95%;
          margin-top: 1rem;
          padding: 1rem 1.2rem;
          border-radius: 10px;
          box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.06);
          &:hover {
            box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.15);
            transition: all 0.3s;
          }
        }
      }
      .post-one-post {
        display: none;
        width: 50vw;
        position: fixed;
        top: 25vh;
        left: 25vw;
        background-color: rgba($color: #eee, $alpha: 0.9);
        border-radius: 5em;
        padding: 3em;
        transition: all 1s;

        .close {
          float: right;
          position: relative;
          top: -0.5em;
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
      margin-top: 20px;
      display: flex;
      justify-content: center;
    }
    a {
      color: #aaa;
      text-decoration: none;
    }
    .post-my-post {
      position: sticky;
      width: 50px;
      height: 50px;
      top: 50vh;
      right: 5vw;
    }
    .display {
      display: block !important;
    }
  }
</style>
