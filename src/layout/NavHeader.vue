<script lang="ts" setup>
  import { computed, onMounted } from 'vue';
  import  useUserStore  from '../store/modules/userStore';

  const user = useUserStore();

  function loginOut() {
    user.loginOut();
  }

  let token = computed(() => {
    return user.token;
  });
  let username = computed(() => {
    return user.username;
  });

  onMounted(() => user.getUserInfo());
</script>

<template>
  <el-menu class="el-menu-demo right" mode="horizontal" router>
    <el-menu-item index="/home">首页</el-menu-item>
    <!-- 登录成功之后记得写个if去掉 -->
    <el-menu-item index="/ReLo" v-if="!token">登录/注册</el-menu-item>
    <el-sub-menu index="/person" v-if="token">
      <template #title>{{ username }}</template>
      <el-menu-item index="/Person">我的主页</el-menu-item>
      <el-menu-item index="/Person">我的贴子</el-menu-item>
      <el-menu-item index="/Person">我的评论</el-menu-item>
      <el-menu-item index="/login" @click="loginOut">退出登录</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="/message" v-if="token">消息中心</el-menu-item>
  </el-menu>
  <router-view></router-view>
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
