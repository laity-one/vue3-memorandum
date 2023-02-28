import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import { logOut, getUserInfo } from "@/api/login";
import { setToken, removeToken } from "@/utils/auth";

export const userStore = defineStore(
  "UserStore",
  () => {
    const userMes = reactive({});
    const userInfo = reactive({});
    const permission = ref<string[]>([]);

    const setUserMessage = (params: any) => {
      Object.assign(userMes, params);
      setToken(params.accessToken);
    };
    const userLogOut = async () => {
      sessionStorage.clear();
      localStorage.clear();
      removeToken();
      await logOut();
    };
    const setUserInfo = async () => {
      const { data } = await getUserInfo().catch((err) => err);
      Object.assign(userInfo, data);
      permission.value = data.permissions;
    };
    return {
      permission,
      userMes,
      userInfo,
      userLogOut,
      setUserInfo,
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
