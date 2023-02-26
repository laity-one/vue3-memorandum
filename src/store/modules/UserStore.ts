import { defineStore } from "pinia";
import { ref, reactive } from "vue";

export const userStore = defineStore(
  "UserStore",
  () => {
    const userMes = ref<number>(1);
    const setUserMessage = (params: any) => {
      userMes.value = params.jumpType;
      console.log("执行了");
    };
    return {
      // permission,
      userMes,
      setUserMessage,
    };
  },
  {
    persist: {
      key: "userLogin",
      storage: sessionStorage,
    },
  }
);
export default userStore;
