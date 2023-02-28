<template>
  <el-dropdown :hide-on-click="false">
    <span class="el-dropdown-link outline-none c-p">
      <el-avatar :size="30"> user </el-avatar>
      <el-icon class="el-icon--right"><arrow-down /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="goUserMes">个人中心</el-dropdown-item>
        <el-dropdown-item divided @click="goOut">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { ElMessage, ElMessageBox } from "element-plus";
import { useRouter } from "vue-router";
import userStore from "@/store/modules/UserStore";

const router = useRouter();
const user = userStore();

const goUserMes = () => {
  router.push("/workBench");
};
const goOut = () => {
  ElMessageBox.confirm("确定要退出登录？", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
    closeOnClickModal: false,
  }).then(() => {
    user.userLogOut();
    router.push("/login");
    ElMessage.success("成功！");
  });
};
</script>

<style scoped lang="less">
.outline-none {
  outline: none !important;
}
</style>
