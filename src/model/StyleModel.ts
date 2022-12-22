export default class StyleModel {
  /**
   * 搜索框样式
   */
  public searchStyle: string;

  /**
   * 搜索框背景css
   */
  public searchBackgroundCss: string;

  /**
   * 导航栏背景样式
   */
  public navBarBackgroundCss: string;

  /**
   * 窗口进场动画
   */
  public windowAnimate: string;

  /**
   * 搜索框进场动画
   */
  public searchAnimate: string;

  /**
   * 工具栏动画
   */
  public toolGroupAnimate: string;

  /**
   * 关闭用户icon
   */
  public closeIcon: boolean;

  constructor(
    closeIcon: boolean,
    toolGroupAnimate: string,
    navBarBackgroundCss: string,
    searchAnimate: string,
    windowAnimate: string,
    searchStyle: string,
    searchBackgroundCss: string
  ) {
    this.closeIcon = closeIcon;
    this.toolGroupAnimate = toolGroupAnimate;
    this.navBarBackgroundCss = navBarBackgroundCss;
    this.searchAnimate = searchAnimate;
    this.windowAnimate = windowAnimate;
    this.searchStyle = searchStyle;
    this.searchBackgroundCss = searchBackgroundCss;
  }
}
