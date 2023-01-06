// 小组件信息
export default class WidgetPlugin {
  /**
   * 坐标名称
   */
  public name: string;

  /**
   * x坐标
   */
  public x: number;

  /**
   * y坐标
   */
  public y: number;

  /**
   * 宽度
   */
  public w: number;

  /**
   * 高度
   */
  public h: number;

  /**
   * 样式
   */
  public style?: string;

  /**
   * 小组件描述
   */
  public desc?: string;

  /**
   * 图片
   */
  public img?: string;

  /**
   * 作者
   */
  public author?: string;

  /**
   * 是否可编辑
   */
  public draggable: boolean;

  /**
   * 是否展示
   */
  public show?: boolean;

  public tip?: boolean;
}
