<template>
  <el-menu
    v-bind="$attrs"
    class="el-menu-vertical-demo"
    background-color="#001529"
    text-color="#a6adb4"
    active-text-color="#fff"
    :collapse="false"
    :default-opened="true"
  >
    <!-- 
    :default-openeds="activeOpen"
    @open="handleOpen" -->
    <MenuItem v-for="(item, index) in data" :key="index" :item="item" />
  </el-menu>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import MenuItem from "./MenuItem.vue";
import menuMock from "../../../../mock/MenuMock";
import menu from "../../../../api/menu";

const data = ref(menuMock);
// console.log(data.value);
// const data = awa
onMounted(async () => {
  const menuData = await menu.getMenu();
  console.log(menuData);
});
</script>

<style scoped lang="less"></style>
