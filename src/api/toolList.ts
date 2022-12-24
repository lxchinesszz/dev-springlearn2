import setting from '@/api/data';
import SettingModel from '@/model/SettingModel';
import CategoryModel from '@/model/CategoryModel';
import SearchEngineModel from '@/model/SearchEngineModel';
import deepClone, { isEmpty, isJson } from '@/api/lodashs';
import ShortcutModel from '@/model/ShortcutModel';
import ThemeModel from '@/model/ThemeModel';
import useClipboard from 'vue-clipboard3';
import { Message } from '@arco-design/web-vue';

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
