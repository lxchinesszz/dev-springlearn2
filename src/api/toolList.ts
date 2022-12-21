import setting from '@/api/data';
import SettingModel from '@/model/SettingModel';
import CategoryModel from '@/model/CategoryModel';
import SearchEngineModel from '@/model/SearchEngineModel';
import deepClone from '@/api/lodashs';

export function fetchSourceData(): SettingModel {
  console.log('setting', setting);
  return deepClone(<SettingModel>setting);
}

export function fetchCategories(): Array<CategoryModel> {
  return deepClone(fetchSourceData().categories);
}

export function fetchSearchList(): Array<SearchEngineModel> {
  return deepClone(fetchSourceData().searchEngineList);
}
