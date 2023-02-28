import http from "../utils/request";
import { userLogin } from "@/interface/modules/User";

export enum url {
  login = "/api/login",
  logOut = "/api/logOut",
  userInfo = "/api/userInfo",
}
/**
 * 登录
 * @param data
 * @returns
 */
export const toLogin = (data: userLogin) => {
  return http.request({
    url: url.login,
    method: "post",
    data,
  });
};

/**
 * 登出
 * @param data
 * @returns
 */
export const logOut = () => {
  return http.request({
    url: url.logOut,
    method: "get",
  });
};

/**
 * 获取用户信息
 * @param
 * @returns
 */
export const getUserInfo = () => {
  return http.request({
    url: url.userInfo,
    method: "get",
  });
};
