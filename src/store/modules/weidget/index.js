import { defineStore } from 'pinia';
import _ from 'lodash';
import { fetchSourceData } from '@/api/toolList';
import { reactive } from 'vue';
import deepClone from '@/api/lodashs';
const useWpsStore = defineStore('wpsStore', () => {
    // 用户的小组件
    const userWidgets = deepClone(_.filter(fetchSourceData().wps, (w) => {
        return w.show;
    }));
    console.log(`Store wps`, userWidgets);
    const currentUserWps = reactive(userWidgets);
    /**
     * 页面可以展示的,用户的 + 新增的
     */
    const canConfigWps = reactive(userWidgets);
    function mergeNewWps(newAddWps) {
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
    };
});
export default useWpsStore;
//# sourceMappingURL=index.js.map