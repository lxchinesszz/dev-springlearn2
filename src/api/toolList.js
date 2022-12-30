import setting from '@/api/data';
export function fetchSourceData() {
    return setting;
}
export function fetchCategories() {
    return fetchSourceData().getCategories;
}
export function fetchSearchList() {
    return Object.freeze(fetchSourceData().getSearchEngineList);
}
//# sourceMappingURL=toolList.js.map