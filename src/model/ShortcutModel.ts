export default class ShortcutModel {
  public name: string;

  public href: string;

  public openType: string;

  public show: boolean;

  constructor(name: string, href: string, openType: string) {
    this.name = name;
    this.href = href;
    this.openType = openType;
  }
}
