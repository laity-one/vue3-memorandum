<template>
  <el-menu
    v-bind="$attrs"
    class="el-menu-vertical-demo"
    background-color="#001529"
    text-color="#a6adb4"
    active-text-color="#fff"
    :collapse="isCollapse"
    :default-active="activeIndex"
  >
    <MenuItem v-for="(item, index) in menuList" :key="index" :item="item" />
  </el-menu>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import MenuItem from "./MenuItem.vue";
import menuMock from "../../../../mock/MenuMock";
import menu from "../../../../api/menu";
import menuStore from "../../../../store/modules/MenuStore";

const router = useRouter();
const menuSores = menuStore();
const menusMock = ref(menuMock);
const menuList = ref();
const { isCollapse, activeIndex } = storeToRefs(menuSores);

onMounted(async () => {
  const { data } = await menu.getMenu().catch((err) => err);
  menuList.value = data || menusMock;
  data.forEach((item: any) => {
    if (item.path === router.currentRoute.value.path) {
      menuSores.changeActiveIndex(item.code);
    }
  });
});
</script>

<style scoped lang="less"></style>
