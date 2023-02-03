<template>
  <el-breadcrumb separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
        <span
          v-if="!item.redirect || index === levelList.length - 1"
          class="no-redirect"
          >{{ item.meta.title }}</span
        >
        <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

const levelList = ref();
const router = useRouter();

const getBreadcrumb = () => {
  const matched = router.currentRoute.value.matched.filter(
    (item) => item.meta && item.meta.title
  );
  return matched;
};
watch(
  () => router.currentRoute.value,
  () => {
    levelList.value = getBreadcrumb();
  },
  { immediate: true }
);
const handleLink = (menuItem: any) => {
  if (menuItem.path) {
    router.push(menuItem.path);
  }
};

// const menuSores = menuStore();
</script>

<style scoped lang="less">
.hamburger {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
}
.hamburger.is-active {
  transform: rotate(180deg);
}
</style>
