import { defineStore } from 'pinia';
import WidgetPlugin from '@/model/WidgetPlugin';
import _ from 'lodash';
import { fetchSourceData } from '@/api/toolList';
import { reactive } from 'vue';
import deepClone from '@/api/lodashs';
import ExtThemeModel from "@/model/ExtThemeModel";

const useWpsStore = defineStore('wpsStore', () => {
  /**
   * 主题
   */
  const theme: ExtThemeModel = deepClone(fetchSourceData().theme);

  // 用户的小组件
  const userWidgets: Array<WidgetPlugin> = deepClone(
    _.filter(fetchSourceData().wps, (w) => {
      return w.show;
    })
  );

  console.log(`Store wps`, userWidgets);

  const currentUserWps: Array<WidgetPlugin> =
    reactive<Array<WidgetPlugin>>(userWidgets);

  /**
   * 页面可以展示的,用户的 + 新增的
   */
  const canConfigWps: Array<WidgetPlugin> =
    reactive<Array<WidgetPlugin>>(userWidgets);

  function mergeNewWps(newAddWps: WidgetPlugin[]): WidgetPlugin[] {
    const userWidgetNameList = _.map(userWidgets, (w) => w.name);
    for (let i = 0; i < newAddWps.length; i += 1) {
      const addElement = newAddWps[i];
      // 用户小组件中不包括新的就直接添加新组件选项
      if (!userWidgetNameList.includes(addElement.name)) {
        canConfigWps.push(addElement);
      }
    }
    return canConfigWps;
  }

  return {
    mergeNewWps,
    canConfigWps,
    currentUserWps,
    theme
  };
});

export default useWpsStore;
