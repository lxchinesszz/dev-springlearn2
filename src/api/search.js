// 百度词汇联想
// - https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&wd=pgone
// kaifa
// - https://kaifa.baidu.com/rest/v1/recommend/suggests?wd=spring
// eslint-disable-next-line max-classes-per-file
import axios from 'axios';
export class BdFuzzyItem {
}
export class BdFuzzyResponse {
}
/**
 * 百度模糊搜索
 * @param kw
 */
export default function bdFuzzySearch(kw = '西魏陶渊明') {
    const config = {
        method: 'get',
        url: `https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&wd=${kw}`,
    };
    return axios(config);
}
export class KaifaResponse {
}
/**
 * 开发者搜索
 * @param kw
 */
export function kaifaFuzzySearch(kw = '西魏陶渊明') {
    const config = {
        method: 'get',
        url: `https://kaifa.baidu.com/rest/v1/recommend/suggests?wd=${kw}`,
    };
    return axios(config);
}
export class ZhihuFuzzyItem {
}
export class ZhihuResponse {
}
/**
 * 知乎模糊搜索
 * @param kw
 */
export function zhihuFuzzySearch(kw = '西魏陶渊明') {
    const config = {
        method: 'get',
        url: `https://www.zhihu.com/api/v4/search/suggest?q=${kw}`,
    };
    return axios(config);
}
export class BiliResponse {
}
/**
 * B站
 * @param kw
 */
export function biliFuzzySearch(kw = '西魏陶渊明') {
    const config = {
        method: 'get',
        url: `https://s.search.bilibili.com/main/suggest?term=${kw}`,
    };
    return axios(config);
}
//# sourceMappingURL=search.js.map