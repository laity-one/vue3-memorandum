import { defineStore } from "pinia";
import { ref } from "vue";

export const userStore = defineStore("userStore", () => {
  const permisAction = ref(["admin:view"]);
  return {
    permisAction,
  };
});
export default userStore;
