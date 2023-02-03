<template>
  <el-row :gutter="20" class="nav">
    <el-col :span="8" class="flex-start">
      <Hamburger :is-active="isCollapse" class="hamburger-container" />
      <Breadcrumb class="ml-10" />
    </el-col>
    <el-col :span="16" class="flex-end">
      <UserDropdown />
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import Hamburger from "./Hamburger.vue";
import Breadcrumb from "./Breadcrumb.vue";
import UserDropdown from "./UserDropdown.vue";
import menuStore from "../../../../store/modules/MenuStore";

const menuSores = menuStore();
const { isCollapse } = storeToRefs(menuSores);
</script>

<style scoped lang="less">
.el-row {
  margin: 0 !important;
}
.nav {
  padding: 10px;
  .hamburger-container {
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;
    transform: rotate(180deg);
    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }
}
.is-guttered {
  display: flex;
  padding-right: 20px;
}
</style>
