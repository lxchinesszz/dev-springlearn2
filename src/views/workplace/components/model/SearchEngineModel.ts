/**
 * name: 'Google',
 * slogan: '使用谷歌试试手气吧',
 * href: 'https://www.google.com/search?q=',
 */
export default class SearchEngineModel {
  private _name: string;

  private _slogan: string;

  private _href: string;

  constructor(name: string, slogan: string, href: string) {
    this._name = name;
    this._slogan = slogan;
    this._href = href;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get slogan(): string {
    return this._slogan;
  }

  set slogan(value: string) {
    this._slogan = value;
  }

  get href(): string {
    return this._href;
  }

  set href(value: string) {
    this._href = value;
  }
}
