import CategoryTool from '@/model/CategoryTool';

export default class FuseToolResult {
  public categoryName: string;

  public toolGroupName: string;

  public tool: CategoryTool;

  constructor(categoryName: string, toolGroupName: string, tool: CategoryTool) {
    this.categoryName = categoryName;
    this.toolGroupName = toolGroupName;
    this.tool = tool;
  }
}
