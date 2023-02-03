`````css
/**
    flex 家族
*/
.flex {
  display: flex;
}
.flex-wrap {
  flex-wrap: wrap;
}

.flex-row {
  flex-direction: row;
}

.flex-column {
  flex-direction: column;
}

.align-center {
  align-items: center;
}

.flex-center {
  .flex();
  justify-content: center;
  align-items: center;
}

.flex-end {
  .flex();
  justify-content: flex-end;
  align-items: center;
}

.flex-between {
  .flex();
  justify-content: space-between;
  align-items: center;
}

.flex-start {
  .flex();
  justify-content: flex-start;
  align-items: center;
}
/**
    padding margin 循环
*/
each(range(10),{
  .pt-@{value}{
      padding-top: (@value * 5px);
  }
  .pl-@{value}{
      padding-left: (@value * 5px);
  }
  .pr-@{value}{
      padding-right: (@value * 5px);
  }
  .pb-@{value}{
      padding-bottom: (@value * 5px);
  }
  .p-@{value}{
      padding: (@value * 5px);
  }
  .m-@{value}{
      margin: (@value * 5px);
  }
  .mt-@{value}{
      margin-top: (@value * 5px);
  }
  .ml-@{value}{
      margin-left: (@value * 5px);
  }
  .mr-@{value}{
      margin-right: (@value * 5px);
  }
  .mb-@{value}{
      margin-bottom: (@value * 5px);
  }
})

/**
  font-size
*/
.fz(@fz){
  font-size: @fz;
}
/**
  百分比随意设置  宽 高
*/
.www(@n, @i: 1) when (@i <=@n) {
.www-@{i} {
  width: @i*1% !important;
}
 .hhh-@{i} {
  height: @i*1% !important;
}
.www(@n, (@i + 1));
}
`````