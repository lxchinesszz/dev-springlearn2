import setting from '@/api/data';
import SettingModel from '@/model/SettingModel';
import CategoryModel from '@/model/CategoryModel';
import SearchEngineModel from '@/model/SearchEngineModel';
import deepClone, { isEmpty, isJson } from '@/api/lodashs';
import ShortcutModel from '@/model/ShortcutModel';
import ThemeModel from '@/model/ThemeModel';
import useClipboard from 'vue-clipboard3';
import { Message } from '@arco-design/web-vue';
import Fuse from 'fuse.js';
import FuseToolResult from '@/model/FuseToolResult';

export function isNewUser() {
  return isEmpty(localStorage.getItem('ds'));
}

export function isOldUser() {
  return !isNewUser();
}

/**
 * 获取默认的配置
 */
function defaultSourceData(): SettingModel {
  return deepClone(<SettingModel>setting);
}

function localDataSource(): SettingModel {
  let sourceData: SettingModel = defaultSourceData();
  if (isOldUser()) {
    const dsStr = localStorage.getItem('ds');
    if (isJson(dsStr)) {
      // eslint-disable-next-line no-console
      // @ts-ignore
      sourceData = JSON.parse(dsStr);
    } else {
      // eslint-disable-next-line no-console
      console.log('配置信息读取失败,已加载默认配置。并移除错误配置:{}', dsStr);
      localStorage.clear();
    }
  }
  return sourceData;
}

export function restLocalSourceData() {
  localStorage.clear();
}
export function fetchSourceData(): SettingModel {
  let sourceData: SettingModel;
  if (isNewUser()) {
    // eslint-disable-next-line no-console
    console.log('加载新用户配置');
    sourceData = defaultSourceData();
  } else {
    // eslint-disable-next-line no-console
    console.log('加载本地用户配置');
    sourceData = localDataSource();
  }
  return sourceData;
}

export function fetchCategories(): Array<CategoryModel> {
  return deepClone(fetchSourceData().categories);
}

export function fetchSearchList(): Array<SearchEngineModel> {
  return deepClone(fetchSourceData().searchEngineList);
}

export function saveLocal(arg: SettingModel) {
  localStorage.setItem('ds', JSON.stringify(arg));
}

export function setShortcut(arg: Array<ShortcutModel>) {
  const settingModel = localDataSource();
  settingModel.shortcut = arg;
  // eslint-disable-next-line no-console
  console.log('保存快捷方式', arg);
  saveLocal(settingModel);
}

export function setSearchEngine(arg: Array<SearchEngineModel>) {
  const settingModel = localDataSource();
  settingModel.searchEngineList = arg;
  // eslint-disable-next-line no-console
  console.log('保存搜索引擎', arg);
  saveLocal(settingModel);
}

export function setTheme(arg: ThemeModel) {
  const settingModel = localDataSource();
  settingModel.theme = arg;
  // eslint-disable-next-line no-console
  console.log('保存主题', arg);
  saveLocal(settingModel);
}

export function setCategory(arg: Array<CategoryModel>) {
  const settingModel = localDataSource();
  settingModel.categories = arg;
  // eslint-disable-next-line no-console
  console.log('保存配置', arg);
  saveLocal(settingModel);
}
const { toClipboard } = useClipboard();
export function clipboard(value: any) {
  try {
    toClipboard(value);
    Message.success('复制成功 😄');
  } catch (e) {
    Message.error('复制失败 哭');
  }
}

export function copyConfig() {
  clipboard(JSON.stringify(localDataSource(), null, '\t'));
}

export class FusePlugin {
  // public
  public tools: Array<FuseToolResult>;

  public fuse: Fuse<FuseToolResult>;

  constructor(tools: Array<FuseToolResult>) {
    this.tools = tools;
    const options = {
      includeScore: true,
      keys: [
        'categoryName',
        'toolGroupName',
        'tool.title',
        'tool.desc',
        'tool.link',
      ],
    };
    console.log('FusePlugin init');
    this.fuse = new Fuse(tools, options);
  }

  /**
   * 搜索
   * @param kw keyword 关键词
   */
  fuseSearch(kw: string): FuseToolResult[] {
    const fuseResultList = this.fuse.search(kw);
    const result: Array<FuseToolResult> = [];
    for (let i = 0; i < fuseResultList.length; i += 1) {
      const fuseResultListElement = fuseResultList[i];
      result.push(fuseResultListElement.item);
    }
    return result;
  }
}

/**
 * 模糊搜索工具
 */
export function fusePlugin(): FusePlugin {
  const settingModel = localDataSource();
  const { categories } = settingModel;
  const tools: Array<FuseToolResult> = [];
  for (let i = 0; i < categories.length; i += 1) {
    const category = categories[i];
    for (let i1 = 0; i1 < category.toolList.length; i1 += 1) {
      const categoryToolGroup = category.toolList[i1];
      const { toolList } = categoryToolGroup;
      for (let i2 = 0; i2 < toolList.length; i2 += 1) {
        const categoryTool = toolList[i2];
        tools.push(
          new FuseToolResult(
            category.categoryName,
            categoryToolGroup.toolGroupName,
            categoryTool
          )
        );
      }
    }
  }
  return new FusePlugin(tools);
}

export function openWindow(url: string, target = '_blank') {
  window.open(url, target);
}
