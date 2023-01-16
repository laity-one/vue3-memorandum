<template>
  <el-menu-item
    v-if="!item.children || !item.children.length"
    :index="item.code"
  >
    <el-icon v-if="item.icon">
      <Component :is="item.icon" />
    </el-icon>
    <span>{{ item.title }}</span>
  </el-menu-item>
  <el-sub-menu v-else :index="item.code">
    <template #title>
      <el-icon v-if="item.icon">
        <Component :is="item.icon" />
      </el-icon>
      <span>{{ item.title }}</span>
    </template>
    <menu-item v-for="sub in item.children" :key="sub.code" :item="sub" />
  </el-sub-menu>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped lang="less"></style>
