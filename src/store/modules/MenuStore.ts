import { defineStore } from "pinia";
// import Api from '../enums/http'
import { ref } from "vue";

export const menuStore = defineStore(
  "MenuStore",
  () => {
    // 默认菜单展开
    const isCollapse = ref<boolean>(false);
    const changeCollapse = () => {
      isCollapse.value = !isCollapse.value;
    };
    return {
      isCollapse,
      changeCollapse,
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
