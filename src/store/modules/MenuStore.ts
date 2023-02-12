import { defineStore } from "pinia";
import { ref } from "vue";

export const menuStore = defineStore(
  "MenuStore",
  () => {
    // 默认菜单展开
    const isCollapse = ref<boolean>(false);
    const activeIndex = ref<string>("1");
    const changeCollapse = () => {
      isCollapse.value = !isCollapse.value;
    };
    const changeActiveIndex = (val: string) => {
      activeIndex.value = val;
    };
    return {
      isCollapse,
      activeIndex,
      changeCollapse,
      changeActiveIndex,
    };
  },
  {
    persist: {
      key: "menu",
      storage: sessionStorage,
    },
  }
);
export default menuStore;
