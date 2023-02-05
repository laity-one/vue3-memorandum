<template>
  <el-tabs
    v-model="editableTabsValue"
    type="card"
    class="demo-tabs"
    :closable="editableTabsValue !== '1'"
    @tab-remove="removeTab"
  >
    <el-tab-pane
      v-for="item in editableTabs"
      :key="item.id"
      :label="item.title"
      :name="item.name"
    >
      {{ item.name }}
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
    id: "1",
  },
  {
    name: "ces",
    title: "ces",
    id: "2",
  },
]);
const router = useRouter();

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
  --el-tabs-header-height: 30px;
}
</style>
