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
    dotColor: '#F5222D',
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
    dotColor: '#52C419',
  },
  {
    version: '1.2.1',
    date: '2022-12-31',
    items: ['支持B站、知乎搜索关键字智能推荐', '允许搜索空字符'],
    type: 'FEATURE',
    dotColor: '#F5222D',
  },
  {
    version: '1.2.2',
    date: '2023-01-01',
    items: [
      '😄增加背景毛玻璃特效',
      '🐛优化页面布局级动效展示',
      '搜索框添加有趣的placeholder',
      '超级搜索模式下,ESC键关闭关键词推荐',
    ],
    type: 'FEATURE',
    dotColor: '#52C419',
  },
  {
    version: '1.2.3',
    date: '2023-01-18',
    items: ['😄增加小插件', '🐛修复若干问题'],
    type: 'FEATURE',
    dotColor: '#52C419',
  },
];
export default releaseHistoryVersions;
