import Version from '@/model/Version';

const releaseHistoryVersions: Array<Version> = [
  {
    version: '1.0.0',
    date: '2022-12-11',
    items: ['新增用户id', '新增css'],
    type: 'FEATURE',
    dotColor: '#00B42A',
  },
  {
    version: '1.1.0',
    date: '2022-12-21',
    items: ['新增工具模糊搜索', '新增历史版本发布记录'],
    type: 'FEATURE',
    dotColor: '#00B42A',
  },
  {
    version: '1.2.0',
    date: '2022-12-30',
    items: [
      '新增超级搜索',
      '支持百度、开发者搜索关键字智能推荐',
      '新增极简模式',
      '支持搜索分类栏文字样式修改',
    ],
    type: 'FEATURE',
    dotColor: '#00B42A',
  },
  {
    version: '1.2.1',
    date: '2022-12-31',
    items: ['支持B站、知乎搜索关键字智能推荐'],
    type: 'FEATURE',
    dotColor: '#00B42A',
  },
];
export default releaseHistoryVersions;
