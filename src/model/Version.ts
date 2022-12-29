export default class Version {
  public date: string;

  public version: string;

  public type: string;

  public items: Array<string>;

  public dotColor? = '#00B42A';

  constructor(
    date: string,
    version: string,
    type: string,
    items: Array<string>,
    dotColor?: string
  ) {
    this.date = date;
    this.version = version;
    this.type = type;
    this.items = items;
    this.dotColor = dotColor;
  }
}
