// position can be left, left-center, left-bottom, top,
// top-center, top-right, right, right-center, right-bottom,
// bottom, bottom-center, bottom-right, mid-center
const steps = [
  {
    element: '.navLogo',
    popover: {
      title: '极客导航',
      description: '专门为开发者设计的高度可定制的浏览器首页',
      position: 'bottom-center',
    },
  },
  {
    element: '#search',
    popover: {
      title: '搜索区域',
      description: '你可以定义这部分的动画及样式',
      position: 'bottom-center',
    },
  },
  {
    element: '.searchTargetCardHover',
    popover: {
      title: '分类',
      description: '最多支持你建立7个分类栏',
      position: 'top-center',
    },
  },
  {
    element: '.searchSourceCard',
    popover: {
      title: '搜索引擎',
      description: '允许开发者自定义搜索引擎,最多允许扩展7中类型',
      position: 'top-center',
    },
  },
  {
    element: '#tool',
    popover: {
      title: '工具栏',
      description:
        '你可以在这里定义你常用的工具组,每个工具组最多支持收藏6个网站',
      position: 'top-center',
    },
  },
  {
    element: '#settingBtn',
    popover: {
      title: '设置',
      description: '最后你可以在这里,设置网站支持的所有自定义配置',
      position: 'left-center',
    },
  },
];

export default steps;
