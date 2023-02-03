export default [
  {
    path: "/workBench",
    name: "workBench",
    component: () => import("@/views/workbench/Index.vue"),
  },
  {
    path: "/echarts",
    name: "echarts",
    meta: {
      title: '图表'
    },
    component: () => import("@/views/echarts/Index.vue"),
  },
]
