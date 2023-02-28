import { Directive } from "vue";
import userStore from "@/store/modules/UserStore";

// 权限
export const permission: Directive = {
  mounted(el: any, binding: any) {
    const { value } = binding;
    const userStores = userStore();
    // const all_permission = '*:*:*'
    const permissions: Array<string> = userStores.permission;
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
