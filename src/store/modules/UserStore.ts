import { defineStore } from "pinia";
// import Api from '../enums/http'

interface loginStore {
  account: number;
  password: string;
  code: string;
  key: string;
}

export const loginStore = defineStore({
  id: "loginStore", // id 是 必须的  可以配合 Vue devtools 使用
  state: () => ({
    showId: 1, // b用来登录控制展示
  }),
  getters: {
    // 一般用于对数据进行写处理
  },
  actions: {},
});
export default loginStore;
