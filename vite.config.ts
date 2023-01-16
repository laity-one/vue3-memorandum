import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "./" : "/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  server: {
    // 是否开启https
    https: false,
    // 端口号
    port: 3000,
    // 监听所有地址
    host: "0.0.0.0",
    // 服务启动时是否自动打开浏览器
    open: true,
    // 允许跨域
    cors: true,
    // 自定义代理规则
    proxy: {
      "/api": {
        // target: 'https://api.pingping6.com/tools/baidutop/',
        target: "http://127.0.0.1:4523/m1/1830174-0-default",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  build: {
    // 设置最终构建的浏览器兼容目标
    target: "es2015",
    // 构建后是否生成sourcemap文件
    sourcemap: false,
    // chunk大小警告的限制（以kbs为单位）
    chunkSizeWarningLimit: 2000,
    // 启用/禁用gzip压缩大小报告
    reportCompressedSize: false,
  },
});
