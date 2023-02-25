/**
 * 全局接口路径 放在一起 方便维护
 */
import http from "../utils/request";

export enum url {
  menu = "/api/menu",
}
export default {
  getMenu: () => {
    return http.request({
      url: url.menu,
      method: "get",
    });
  },
};
