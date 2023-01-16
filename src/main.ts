import { createApp } from "vue";
import "./style.css";
import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./style/common.less";
import "./style/element.less";
import "element-plus/dist/index.css";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(ElementPlus).use(router).use(store).mount("#app");
