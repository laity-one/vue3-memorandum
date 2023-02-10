<template>
  <el-tabs
    v-model="editableTabsValue"
    type="card"
    class="demo-tabs"
    @tab-remove="removeTab"
  >
    <el-tab-pane
      v-for="item in editableTabs"
      :key="item.id"
      :label="item.title"
      :closable="item.id !== '1'"
      :name="item.name"
    >
      <template #label>
        <span>{{ item.name }}+11</span>
      </template>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const editableTabsValue = ref("1");
const editableTabs = ref([
  {
    name: "首页",
    title: "首页",
    path: "/workBench",
    id: "1",
    query: "",
  },
  {
    name: "ces",
    path: "/echarts",
    title: "ces",
    query: "",
    id: "2",
  },
]);
const router = useRouter();
console.log(editableTabsValue.value);

const goToTab = (val: any) => {
  console.log(val);
};
const removeTab = () => {
  //
};
</script>

<style scoped lang="less">
.demo-tabs > .el-tabs__content {
  padding: 20px;
  color: #6b778c;
  // font-size: 28px;
  font-weight: 600;
}

.el-tabs {
  --el-tabs-header-height: 45px;
}
.el-tabs__item:focus-visible {
  box-shadow: none !important;
  border-radius: 3px;
}
</style>
