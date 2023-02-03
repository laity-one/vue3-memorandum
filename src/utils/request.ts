import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

/**
 * 全局环境变量配置
 */
const env = process.env.NODE_ENV;
let target = "";
if (env === "production") {
  console.log("生产环境");
  target = "";
} else if (env === "dev") {
  console.log("测试环境");
  target = "";
} else {
  console.log("本地环境");
  target = "/api";
}

class HttpRequest {
  // constructor() {

  // }

  getInsideConfig() {
    const config = {
      baseURL: target,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "X-Requested-With": "XMLHttpRequest",
      },
    };
    return config;
  }

  // 请求拦截
  // url: string | number | undefined
  interceptors(instance: AxiosInstance) {
    instance.interceptors.request.use(
      (config) => {
        // 请求头携带token
        return config;
      },
      (error: any) => {
        return Promise.reject(error);
      }
    );
    // 响应拦截
    instance.interceptors.response.use(
      (res) => {
        const { data } = res;
        // console.log("返回数据处理", res);
        return data;
      },
      (error: any) => {
        return Promise.reject(error.response.data);
      }
    );
  }

  request(options: AxiosRequestConfig) {
    const instance = axios.create();
    options = Object.assign(this.getInsideConfig(), options);
    this.interceptors(instance);
    return instance(options);
  }
}

const request = new HttpRequest();
export default request;
