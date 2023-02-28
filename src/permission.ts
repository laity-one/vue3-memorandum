import NProgress from "nprogress";
import router from "./router";
import useStore from "./store/modules/UserStore";
import { getToken } from "./utils/auth";
import "nprogress/nprogress.css";

// 通过将加载微调器设置为false来关闭它。（默认值：true）
NProgress.configure({ showSpinner: false });
// 白名单
const whiteList = ["/login"];

// const router = createRouter({ ... })

router.beforeEach((to, from, next) => {
  const use: any = useStore();
  NProgress.start();
  const token = getToken();
  if (token) {
    if (to.path === "/login") {
      const routerPath: any = {
        1: "/grid", // 用户页面
        2: "/backstage", // 后台管理页面
      };
      next({ path: routerPath[use.userMes.jumpType] });
      NProgress.done();
    } else {
      next();
    }
  } else if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next({ path: "/login" });
      NProgress.done();
    }
});

router.afterEach(() => {
  NProgress.done();
});
