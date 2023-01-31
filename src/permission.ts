import NProgress from "nprogress";
import router from "./router";
// import useStore from './store/modules/UserStore'
import { getToken } from "./utils/auth";
import "nprogress/nprogress.css";

// 通过将加载微调器设置为false来关闭它。（默认值：true）
NProgress.configure({ showSpinner: false });
// 白名单
const whiteList = ["/login"];

// const router = createRouter({ ... })

router.beforeEach((to, from, next) => {
  NProgress.start();
  const token = getToken();
  if (token) {
    next();
  } else if (whiteList.indexOf(to.path) !== -1) {
    next();
  } else {
    next();
    NProgress.done();
  }
  return false;
});

router.afterEach(() => {
  NProgress.done();
});
