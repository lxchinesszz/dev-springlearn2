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
    date: '2023-01-05',
    items: [
      '😄增加小插件',
      '🐛修复若干问题',
      '优化导航栏组件',
      '小组件支持拖动位置',
    ],
    type: 'FEATURE',
    dotColor: '#52C419',
  },
  {
    version: '1.2.4',
    date: '2023-01-07',
    items: ['正式开放小组件', '新增诗词歌赋组件', '新增颜色吸管小组件'],
    type: 'FEATURE',
    dotColor: '#52C419',
  },
  {
    version: '1.2.5',
    date: '2023-01-08',
    items: [
      '优化极简模式下设置按钮',
      '增加预设主题安装',
      '搜索引擎支持设置是否展示',
      '快捷标签支持设置是否展示',
      '支持自定义网站标题',
      '支持自定义网站favicon',
    ],
    type: 'FEATURE',
    dotColor: '#52C419',
  },
  {
    version: '1.2.6',
    date: '2023-01-11',
    items: ['手机端引导页'],
    type: 'FEATURE',
    dotColor: '#52C419',
  },
  {
    version: '1.2.7',
    date: '2023-01-11',
    items: ['🐛 fix 浏览器多窗口保存配置不一致问题'],
    type: 'FEATURE',
    dotColor: '#52C419',
  },
  {
    version: '1.2.8',
    date: '2023-02-03',
    items: ['🐛 fix 引导步骤显示问题', '增加产品吐槽论坛'],
    type: 'FEATURE',
    dotColor: '#52C419',
  },
];
export default releaseHistoryVersions;
