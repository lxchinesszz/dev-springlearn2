/**
 * 1. 导航栏
 * 2. 分组信息
 * 3. 搜索引擎
 */
export default class SettingModel {
    constructor(categories, searchEngineList) {
        this.categories = categories;
        this.searchEngineList = searchEngineList;
    }
    get getCategories() {
        return this.categories;
    }
    get getSearchEngineList() {
        return this.searchEngineList;
    }
}
//# sourceMappingURL=SettingModel.js.map