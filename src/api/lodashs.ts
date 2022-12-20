import _ from 'lodash';

/**
 * 深拷贝
 * @param t
 */
export default function deepClone<T>(t: T): T {
  return _.cloneDeep(t);
}

export function random(min: number, max: number) {
  return _.random(min, max);
}

export function randomObject<T>(list: Array<T> | T[] | string[]): T | string {
  return list[_.random(0, list.length - 1)];
}

export function randomStrObject(list: string[]): string {
  return list[_.random(0, list.length - 1)];
}
