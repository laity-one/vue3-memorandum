// 常用interface 一般用来放置不变的参数

/**
 * 分页interface
 */
export interface page {
  pageSize: number;
  pageNumber: number;
  total: number;
}

/**
 * 接口定义返回参数格式
 */
export interface response {
  code: number;
  msg: string;
  data: any;
}

/**
 * 菜单项
 */
export interface MenuItem {
  title: string;
  code: string;
  icon?: string;
  children?: MenuItem[];
}
