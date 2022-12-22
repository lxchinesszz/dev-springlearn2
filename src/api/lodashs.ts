import _ from 'lodash';

/**
 * 深拷贝
 * @param t
 */
export default function deepClone<T>(t: T): T {
  return _.cloneDeep(t);
}

export function randomObject<T>(list: Array<T> | T[] | string[]): T | string {
  return list[_.random(0, list.length - 1)];
}

/**
 * 亲空数组
 */
export function clearArray<T>(list: Array<T>): void {
  list.length = 0;
}
