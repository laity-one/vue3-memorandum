## flex / grid

### 简单了解
  1. Flexbox 是一维布局系统，适合做局部布局，比如导航栏组件。
  2. Grid 是二维布局系统，通常用于整个页面的规划。
  3. flex 布局和 Grid 布局有实质的区别，那就是 flex 布局是一维布局，Grid 布局是二维布局。

### flex
  - flex 属性
  ````javascript
  .flx {
    // flex 常用属性
    flex-direction: row | row-reverse | column | column-reverse;
    flex-wrap: nowrap | wrap | wrap-reverse;
    justify-content: flex-start | flex-end | center | space-between | space-around;
    align-items: flex-start | flex-end | center | baseline | stretch;
    align-content: flex-start | flex-end | center | space-between | space-around | stretch;
  }
  .flex {
    // 用于项目中的属性
    order: 0; // 定义属性的排列顺序，数字越小，越靠前
    flex-grow: 0; // 属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大
    flex-shrink: 1; // 属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
  }
  ````
  - 参考链接
    - [flex-阮一峰](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
  

### grid

  - grid 属性
  ````javascript
  .grid-content {
    grid-template-rows: repeat(3,100px); // repeat 循环第一个参数次数，后面是值
    grid-template-columns: repeat(3,100px); // repeat 循环第一个参数次数，后面是值

    // 针对列 columns  如果 row 使用 auto-fill的话  值针对第一行自动填充
    grid-template-columns: repeat(auto-fill, 100px); // auto-fill 自动填充
    // 1fr  单位 平等分

    // 实现一些不是等分的布局
    grid-template-columns: 150px 1fr 2fr;
    // gap grid 之间的空隙 
    gap: 20px;

    // 先行后列  先列后行
    grid-auto-flow: row dense;
    grid-auto-flow: column dense;

    // 项目的布局
    place-content: <align-content> <justify-content>
  }
  ````

  
  - 参考链接
    - [实例](https://wangchujiang.com/reference/)
    - [grid-阮一峰](https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)