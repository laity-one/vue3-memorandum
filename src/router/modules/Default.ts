import BackstageChild from "./BackstageChild";

export default [
  {
    // grid网格布局
    path: "/grid",
    name: "grid",
    component: () => import("@/views/grid/Index.vue"),
  },
  {
    // home 主页 根据角色权限控制去那个页面
    path: "/home",
    name: "home",
    component: () => import("@/views/home/Index.vue"),
  },
  {
    path: "/",
    redirect: "/login",
  },
  {
    // 后台管理页面
    path: "/backstage",
    name: "backstage",
    redirect: "/workBench",
    meta: {
      title: "首页",
    },
    children: BackstageChild,
    component: () => import("@/views/home/backstage/Index.vue"),
  },
  {
    // 404
    path: "/404",
    name: "404",
    component: () => import("@/views/home/Index.vue"),
  },
];
