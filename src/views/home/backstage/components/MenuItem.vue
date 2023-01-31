<template>
  <el-menu-item
    v-if="!item.children || !item.children.length"
    :index="item.path"
    @click="clickMenu(item)"
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
    <menu-item v-for="sub in item.child" :key="sub.code" :item="sub" />
  </el-sub-menu>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";
// import menu from "../../../../interface/Common";

const router = useRouter();
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
const clickMenu = (item: any) => {
  console.log(item);
  router.push({
    path: item.path,
  });
};
</script>

<style scoped lang="less"></style>
