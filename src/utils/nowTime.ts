// eslint-disable-next-line no-shadow
export enum FormatsEnums {
  YMD = 'Y-m-d',
  YMDHIS = 'Y-m-d H:i:s',
  _YMD = 'Y年m月d日',
  _YMDHIS = 'Y年m月d日 H时i分',
  TIME = 'H:i:s',
}

function zero(value: number): string | number {
  if (value < 10) {
    return `0${value}`;
  }
  return value;
}

export function dateFormat(timestamp: number, formats: FormatsEnums): string {
  // formats格式包括
  // 1. Y-m-d
  // 2. Y-m-d H:i:s
  // 3. Y年m月d日
  // 4. Y年m月d日 H时i分
  if (!formats) {
    formats = FormatsEnums.YMD;
  }

  const myDate = timestamp ? new Date(timestamp) : new Date();

  const year = myDate.getFullYear();
  const month = zero(myDate.getMonth() + 1);
  const day = zero(myDate.getDate());

  const hour = zero(myDate.getHours());
  const minite = zero(myDate.getMinutes());
  const second = zero(myDate.getSeconds());

  function m(matches: string): any {
    return {
      Y: year,
      m: month,
      d: day,
      H: hour,
      i: minite,
      s: second,
    }[matches];
  }

  return formats.replace(/Y|m|d|H|i|s/gi, m);
}
