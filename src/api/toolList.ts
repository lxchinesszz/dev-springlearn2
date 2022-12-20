import { searchList, data } from '@/api/data';

export interface Tool {
  title: string;
  desc: string;
  link: string;
  icon: string;
}

export interface ToolListInfo {
  toolCategoryName: string;
  toolList: Array<Tool>;
}

export function fetchCategories() {
  return Object.freeze(data);
}

export function fetchSearchList() {
  return Object.freeze(searchList);
}

/**
 * 根据分类获取工具
 * @param category
 */
export function tool(category: any) {
  return fetchCategories().sort()[category];
}
