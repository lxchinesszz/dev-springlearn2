export default class ShortcutModel {
  public name: string;

  public href: string;

  public openType: string;

  constructor(name: string, href: string, openType: string) {
    this.name = name;
    this.href = href;
    this.openType = openType;
  }
}
