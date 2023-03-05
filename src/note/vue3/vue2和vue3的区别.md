### vue3 和 vue3 的区别

1. 对TS的支持不是很友好，所有的对象放在this对象上，难以推到数组的数据类型
2. 大量的api挂载在vue对象的原型上，难以实现TreeShaking。TreeShaking是什么，它指的是在写函数/方法的过程中，如果你没有调用，它不会给你打包
3. CompositionApi，react Hook 的启发
4. 虚拟dom重写， 模版的编辑进行优化 最少优化了30%

#### vue3 的 monorepo介绍 monorepo进行打包
- 什么是 monorepo
简单的来说，Monorepo 的核心观点是所有的项目在一个代码仓库中。这并不是说代码没有组织都放在 ./src 文件夹里面，二是在一个packages文件夹下分割成一个个相对独立的项目

- 安装需要的插件
yarn add typescript rollup rollup-plugin-typescript2 @rollup/plugin-node-resolve @rollup/plugin-json execa --ignore-workspace-root-check
1. 打包工具 rollup
2. rollup和ts的桥梁 rollup-plugin-typescript2
3. 解析node第三方模块 @rollup/plugin-node-resolve
4. 支持引入json @rollup/plugin-json
5. 开启子进程方便执行命令 execa
- monorepo 不能进行npm 使用 yarn

#### vue3 的 monorepo 环境的搭建

1. yarn init  -y 不支持 monorepo npm 安装
2. 在package.js 里面填写几个属性
`````javascript
private： true， 提供
// 工作区包
workspaces :[ 
  ”packages/*“
]
`````
3. 根目录下 使用 workspaces 安装 要使用 -w 例： yarn add typescript -w
-w  安装到跟目录下
4. npx tsc --init 自动生成一个tsconfig.json 文件
5. rollup 的相关依赖 