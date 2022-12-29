import Version from '@/model/Version';

const releaseHistoryVersions: Array<Version> = [
  {
    version: '1.0.1',
    date: '2022-12-01',
    items: ['新增用户id', '新增css'],
    type: 'BUGFIX',
    dotColor: '#00B42A',
  },
  {
    version: '1.0.2',
    date: '2022-12-02',
    items: ['新增用户id', '新增css'],
    type: 'ALL',
    dotColor: '#00B42A',
  },
  {
    version: '1.0.3',
    date: '2022-12-03',
    items: ['新增用户id', '新增css'],
    type: 'FEATURE',
    dotColor: '#00B42A',
  },
  {
    version: '1.0.4',
    date: '2022-12-04',
    items: ['新增用户id', '新增css'],
    type: 'FEATURE',
    dotColor: '#00B42A',
  },
];
export default releaseHistoryVersions;
