import SearchEngineModel from '@/model/SearchEngineModel';
import CategoryModel from '@/model/CategoryModel';
import ShortcutModel from '@/model/ShortcutModel';
import ThemeModel from '@/model/ThemeModel';
import WidgetPlugin from '@/model/WidgetPlugin';

/**
 * 1. 导航栏
 * 2. 分组信息
 * 3. 搜索引擎
 */
export default class SettingModel {
  public theme: ThemeModel;

  /**
   * 快捷标签用于导航栏显示
   * @private
   */
  public shortcut: Array<ShortcutModel>;

  /**
   * 分类数据,包括工具组
   * @private
   */
  public categories: Array<CategoryModel>;

  /**
   * 搜索引擎
   * @private
   */
  public searchEngineList: Array<SearchEngineModel>;

  /**
   * 插件
   */
  public wps: Array<WidgetPlugin>;

  constructor(
    style: ThemeModel,
    shortcut: Array<ShortcutModel>,
    categories: Array<CategoryModel>,
    searchEngineList: Array<SearchEngineModel>,
    wps: Array<WidgetPlugin>
  ) {
    this.theme = style;
    this.shortcut = shortcut;
    this.categories = categories;
    this.searchEngineList = searchEngineList;
    this.wps = wps;
  }
}
