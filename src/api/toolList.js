import setting from '@/api/data';
import deepClone, { isEmpty, isJson } from '@/api/lodashs';
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
function defaultSourceData() {
    return deepClone(setting);
}
function localDataSource() {
    let sourceData = defaultSourceData();
    if (isOldUser()) {
        const dsStr = localStorage.getItem('ds');
        if (isJson(dsStr)) {
            // eslint-disable-next-line no-console
            // @ts-ignore
            sourceData = JSON.parse(dsStr);
        }
        else {
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
export function fetchSourceData() {
    let sourceData;
    if (isNewUser()) {
        // eslint-disable-next-line no-console
        console.log('加载新用户配置');
        sourceData = defaultSourceData();
    }
    else {
        // eslint-disable-next-line no-console
        console.log('加载本地用户配置');
        sourceData = localDataSource();
    }
    return sourceData;
}
export function fetchCategories() {
    return deepClone(fetchSourceData().categories);
}
export function fetchSearchList() {
    return deepClone(fetchSourceData().searchEngineList);
}
export function saveLocal(arg) {
    localStorage.setItem('ds', JSON.stringify(arg));
}
export function setShortcut(arg) {
    const settingModel = localDataSource();
    settingModel.shortcut = arg;
    // eslint-disable-next-line no-console
    console.log('保存快捷方式', arg);
    saveLocal(settingModel);
}
export function setSearchEngine(arg) {
    const settingModel = localDataSource();
    settingModel.searchEngineList = arg;
    // eslint-disable-next-line no-console
    console.log('保存搜索引擎', arg);
    saveLocal(settingModel);
}
export function setTheme(arg) {
    const settingModel = localDataSource();
    settingModel.theme = arg;
    // eslint-disable-next-line no-console
    console.log('保存主题', arg);
    saveLocal(settingModel);
}
export function setWeight(arg) {
    const settingModel = localDataSource();
    settingModel.wps = arg;
    saveLocal(settingModel);
}
export function setCategory(arg) {
    const settingModel = localDataSource();
    settingModel.categories = arg;
    // eslint-disable-next-line no-console
    console.log('保存配置', arg);
    saveLocal(settingModel);
}
const { toClipboard } = useClipboard();
export function clipboard(value) {
    try {
        toClipboard(value);
        Message.success('复制成功 😄');
    }
    catch (e) {
        Message.error('复制失败 哭');
    }
}
export function copyConfig() {
    clipboard(JSON.stringify(localDataSource(), null, '\t'));
}
export class FusePlugin {
    constructor(tools) {
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
    fuseSearch(kw) {
        const fuseResultList = this.fuse.search(kw);
        const result = [];
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
export function fusePlugin() {
    const settingModel = localDataSource();
    const { categories } = settingModel;
    const tools = [];
    for (let i = 0; i < categories.length; i += 1) {
        const category = categories[i];
        for (let i1 = 0; i1 < category.toolList.length; i1 += 1) {
            const categoryToolGroup = category.toolList[i1];
            const { toolList } = categoryToolGroup;
            for (let i2 = 0; i2 < toolList.length; i2 += 1) {
                const categoryTool = toolList[i2];
                tools.push(new FuseToolResult(category.categoryName, categoryToolGroup.toolGroupName, categoryTool));
            }
        }
    }
    return new FusePlugin(tools);
}
export function openWindow(url, target = '_blank') {
    window.open(url, target);
}
//# sourceMappingURL=toolList.js.map