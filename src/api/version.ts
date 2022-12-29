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
];
export default releaseHistoryVersions;
