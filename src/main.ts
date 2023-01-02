import { createApp } from "vue";
import "./style.css";
import ElementPlus from "element-plus";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./style/common.less";
import "element-plus/dist/index.css";

createApp(App).use(ElementPlus).use(router).use(store).mount("#app");
