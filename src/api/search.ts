// 百度词汇联想
// - https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&wd=pgone
// kaifa
// - https://kaifa.baidu.com/rest/v1/recommend/suggests?wd=spring
// eslint-disable-next-line max-classes-per-file
import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';

export class BdFuzzyItem {
  public q: string;
}

export class BdFuzzyResponse {
  public g: Array<BdFuzzyItem>;
}

export default function bdFuzzySearch(
  kw = '西魏陶渊明'
): AxiosPromise<BdFuzzyResponse> {
  const config: AxiosRequestConfig = {
    method: 'get',
    url: `https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&wd=${kw}`,
  };
  return axios(config);
}

export class KaifaResponse {
  public status: string;

  public message: string;

  public data: Array<string>;
}

export function kaifaFuzzySearch(
  kw = '西魏陶渊明'
): AxiosPromise<KaifaResponse> {
  const config: AxiosRequestConfig = {
    method: 'get',
    url: `https://kaifa.baidu.com/rest/v1/recommend/suggests?wd=${kw}`,
  };
  return axios(config);
}
