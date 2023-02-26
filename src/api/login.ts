import http from "../utils/request";
import { userLogin } from "@/interface/modules/User";

export enum url {
  login = "/api/login",
}
export const toLogin = (data: userLogin) => {
  return http.request({
    url: url.login,
    method: "post",
    data,
  });
};
