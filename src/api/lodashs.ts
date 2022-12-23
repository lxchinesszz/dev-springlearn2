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

/**
 * 判断空
 * @param arg
 */
export function isEmpty(arg: any): boolean {
  return _.isEmpty(arg) || _.isUndefined(arg) || arg === null;
}

export function isNotEmpty(arg: any): boolean {
  return !isEmpty(arg);
}

/**
 * 检查是否json
 * @param arg
 */
export function isJson(arg: any): boolean {
  if (typeof arg === 'string') {
    try {
      const obj = JSON.parse(arg);
      if (typeof obj === 'object' && obj) {
        return true;
      }
    } catch (e) {
      console.error('JSON格式错误:', arg);
      return false;
    }
  }
  return false;
}
