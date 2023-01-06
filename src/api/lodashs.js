import _ from 'lodash';
/**
 * 深拷贝
 * @param t
 */
export default function deepClone(t) {
    return _.cloneDeep(t);
}
export function randomObject(list) {
    return list[_.random(0, list.length - 1)];
}
/**
 * 亲空数组
 */
export function clearArray(list) {
    list.length = 0;
}
/**
 * 判断空
 * @param arg
 */
export function isEmpty(arg) {
    return _.isEmpty(arg) || _.isUndefined(arg) || arg === null;
}
export function isNotEmpty(arg) {
    return !isEmpty(arg);
}
/**
 * 检查是否json
 * @param arg
 */
export function isJson(arg) {
    if (typeof arg === 'string') {
        try {
            const obj = JSON.parse(arg);
            if (typeof obj === 'object' && obj) {
                return true;
            }
        }
        catch (e) {
            console.error('JSON格式错误:', arg);
            return false;
        }
    }
    return false;
}
export function isString(arg) {
    return _.isString(arg);
}
/**
 * 异步读取文件
 * @param f
 * @param callback
 */
export function readerAsync(f, callback) {
    const reader = new FileReader();
    reader.onload = () => {
        console.log('type:', typeof reader.result);
        if (reader.result && isString(reader.result)) {
            callback.callback(reader.result);
        }
    };
    reader.readAsText(f);
}
//# sourceMappingURL=lodashs.js.map