export default class CategoryTool {
  public title: string;

  public desc: string;

  public link: string;

  public icon: string;

  public source: number;

  constructor(
    title: string,
    desc: string,
    link: string,
    icon: string,
    source: number
  ) {
    this.title = title;
    this.desc = desc;
    this.link = link;
    this.icon = icon;
    this.source = source;
  }
}
