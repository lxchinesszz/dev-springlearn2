import CategoryTool from '@/model/CategoryTool';

export default class CategoryToolGroup {
  public toolGroupName: string;

  public toolList: Array<CategoryTool>;

  constructor(toolGroupName: string, toolList: Array<CategoryTool>) {
    this.toolGroupName = toolGroupName;
    this.toolList = toolList;
  }
}
