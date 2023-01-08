/**
 * name: 'Google',
 * slogan: '使用谷歌试试手气吧',
 * href: 'https://www.google.com/search?q=',
 */
export default class SearchEngineModel {
  public name: string;

  public slogan: string;

  public href: string;

  public show: boolean;

  constructor(name: string, slogan: string, href: string) {
    this.name = name;
    this.slogan = slogan;
    this.href = href;
  }

  get getName(): string {
    return this.name;
  }

  set setName(value: string) {
    this.name = value;
  }

  get getSlogan(): string {
    return this.slogan;
  }

  set setSlogan(value: string) {
    this.slogan = value;
  }

  get getHref(): string {
    return this.href;
  }

  set setHref(value: string) {
    this.href = value;
  }
}
