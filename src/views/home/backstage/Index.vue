<template>
  <div class="backstage">
    <el-container>
      <el-aside width="60">
        <Menu />
      </el-aside>
      <el-container class="main">
        <el-header>
          <Nav />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import Menu from "./components/Menu.vue";
import Nav from "./nav/Index.vue";
import userStore from "@/store/modules/UserStore";

const user = userStore();
user.setUserInfo();
</script>

<style scoped lang="less">
.el-header {
  height: 85px;
  background: #fff;
  overflow: hidden;
  position: relative;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
</style>
