<template>
  <div class="backstage">
    <el-container>
      <el-aside width="60">
        <Menu />
      </el-aside>
      <el-container class="main">
        <el-header>Header</el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import Menu from "./components/Menu.vue";
</script>

<style scoped lang="less"></style>
