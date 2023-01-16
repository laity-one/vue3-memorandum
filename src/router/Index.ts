import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "./modules/Login";
import Default from "./modules/Default";

/**
 * RouteRecordRaw：添加路由  官方：应该添加到路由的初始路由列表。
 * createWebHistory路由模式路径不带#号,createWebHashHistory路由模式路径带#号
 * createRouter：创建router  实例
 */
const routers = [...Login, ...Default];
const routes: RouteRecordRaw[] = routers;
const route = createRouter({
  history: createWebHistory(),
  routes,
});
export default route;
