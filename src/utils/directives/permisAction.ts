import { Directive } from "vue";
// import App from "../App.vue"
import pinia from "../../store";
import userStore from "../../store/modules/UserStore";

const userStores = userStore(pinia);
// const app = createApp({ App })

// 权限
export const permisAction: Directive = {
  mounted(el: any, binding: any) {
    const { value } = binding;
    // const all_permission = '*:*:*'
    // const permissions = store.getters && store.getters.permisAction
    const permissions: Array<string> = userStores.permisAction;

    if (value && value instanceof Array && value.length > 0) {
      const permissionFlag = value;
      const hasPermissions = permissions.some((item: any) => {
        return permissionFlag.includes(item);
      });
      if (!hasPermissions) {
        // el.parentNode && el.parentNode.removeChild(el)
        el.style.display = "none";
      }
    }
  },
};
