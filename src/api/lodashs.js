import _ from 'lodash';
/**
 * 深拷贝
 * @param t
 */
export default function deepClone(t) {
    return _.cloneDeep(t);
}
export function random(min, max) {
    return _.random(min, max);
}
export function randomObject(list) {
    return list[_.random(0, list.length - 1)];
}
export function randomStrObject(list) {
    return list[_.random(0, list.length - 1)];
}
//# sourceMappingURL=lodashs.js.map