import { createApp, Directive } from "vue";
import "./style.css";
import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import App from "./App.vue";
import router from "./router";
import "./style/common.less";
import "./style/element.less";
import "element-plus/dist/index.css";
import "./permission";
import * as directives from "./utils/directives";
import pinia from "./store/Index";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

Object.keys(directives).forEach((key) => {
  app.directive(key, (directives as { [key: string]: Directive })[key]);
});

app.use(ElementPlus).use(router).use(pinia).mount("#app");
