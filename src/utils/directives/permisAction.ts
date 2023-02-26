import { Directive } from "vue";
import pinia from "@/store/Index";
import userStore from "@/store/modules/UserStore";

const userStores = userStore(pinia);
// 权限
export const permission: Directive = {
  mounted(el: any, binding: any) {
    const { value } = binding;
    // const all_permission = '*:*:*'
    // const permissions = store.getters && store.getters.permisAction
    // const permissions: Array<string> = userStores.permission
    const permissions: Array<string> = [];
    if (value && value instanceof Array && value.length > 0) {
      const permissionFlag = value;
      const hasPermissions = permissions.some((item: string) => {
        return permissionFlag.includes(item);
      });
      if (!hasPermissions) {
        // el.parentNode && el.parentNode.removeChild(el)
        el.style.display = "none";
      }
    }
  },
};
