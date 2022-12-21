import CategoryToolGroup from '@/model/CategoryToolGroup';

export default class CategoryModel {
  public categoryName: string;

  public toolList: Array<CategoryToolGroup>;

  constructor(categoryName: string, toolList: Array<CategoryToolGroup>) {
    this.categoryName = categoryName;
    this.toolList = toolList;
  }
}
