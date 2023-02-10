import { createApp } from "vue"
// import store from "./store"
import App from "./App.vue"

const app = createApp({App})

// 权限
export default {
  install () {
    app.directive('permisAction', {
      created (el: any, binding: any,) {
        const { value } = binding
        const all_permission = '*:*:*'
        // const permissions = store.getters && store.getters.permisaction
        const permissions: any = []
        if (value && value instanceof Array && value.length > 0) {
          const permissionFlag = value
          const hasPermissions = permissions.some((permission: any) => {
            return all_permission === permission || permissionFlag.includes(permission)
          })
          if (!hasPermissions && el.parentNode) {
            el.parentNode.removeChild(el)
          }
        }
      }
    })
  }
}
