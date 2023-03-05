### monorepo 项目搭建

1. mkdir vue3-source-code cd vue3-source-code 

2. yarn init
`````javascript
 monorepo 不能使用npm 要使用 yarn
 npm 和 yarn 的区别
 1. yarn 速度快 yarn 并行安装 npm 会执行完之后在执行packages之后在进行下一个安装
 2. 离线缓存 yarn 安装过插件以后再次安装会从缓存中获取，而npm 会重新从网络获取
 3. 安装版本统一， yarn 会默认锁定版本 npm 需要通过shrinkwrap命令生成
`````
3. 安装相关依赖 
  - npm install typescript
  - yarn add rollup
  - yarn add rollup-plugin-typescript2
  - yarn add @rollup/plugin-node-resolve
  - yarn add @rollup/plugin-json
  - yarn add execa

4. tsc init 安装tsconfig.json
  - npx tsc --init 根目录安装

5. 安装packages 里面的依赖包
  - mkdir packages
  - cd packages  mkdir reactivity yarn init
  - cd packages  mkdir shared yarn init

6. 