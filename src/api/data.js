// import WidgetPlugin from '@/model/WidgetPlugin';
const data = [
    {
        categoryName: '常用',
        toolList: [
            {
                toolGroupName: '开发运维平台',
                toolList: [
                    {
                        title: 'Vercel',
                        desc: 'Vercel ,开箱即用的网站管理小工具',
                        link: 'https://vercel.com/dashboard',
                        icon: 'https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/57x57.png',
                        source: 1,
                    },
                    {
                        title: 'Github',
                        desc: '全球最大同性交友网站',
                        link: 'https://vercel.com/dashboard',
                        icon: 'https://img.springlearn.cn/github.svg',
                        source: 1,
                    },
                    {
                        title: '腾讯云',
                        desc: '腾讯云-Serverless云函数',
                        link: 'https://console.cloud.tencent.com/',
                        icon: 'https://img.springlearn.cn/tengxunyun.svg',
                    },
                    {
                        title: '七牛云',
                        desc: '平步云端，数据为先',
                        link: 'https://portal.qiniu.com/create',
                        icon: 'https://img.springlearn.cn/qiniu1.svg',
                    },
                ],
            },
            {
                toolGroupName: '前端UI框架',
                toolList: [
                    {
                        title: '字节Arco',
                        desc: '字节跳动出品的企业级设计系统',
                        link: 'https://arco.design/vue/docs/pro/start',
                        icon: 'https://unpkg.byted-static.com/latest/byted/arco-config/assets/favicon.ico',
                        source: 0,
                        iconTextBackgroundColor: '',
                    },
                    {
                        icon: 'https://element.eleme.cn/favicon.ico',
                        title: 'ElementUI',
                        desc: 'Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库',
                        link: 'https://element.eleme.cn/#/zh-CN',
                    },
                    {
                        icon: 'https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png',
                        title: 'Ant Design',
                        desc: '企业级产品设计体系，创造高效愉悦的工作体验',
                        link: 'https://ant.design/index-cn',
                    },
                    {
                        title: 'BootCDN',
                        desc: '稳定、快速、免费的前端开源项目 CDN 加速服务',
                        link: 'https://www.bootcdn.cn/',
                        icon: 'https://www.bootcdn.cn/assets/ico/apple-touch-icon-144-precomposed.png?1623516011439',
                    },
                    {
                        icon: 'https://img.alicdn.com/imgextra/i2/O1CN01ZyAlrn1MwaMhqz36G_!!6000000001499-73-tps-64-64.ico',
                        title: 'IconFont',
                        desc: 'iconfont-阿里巴巴矢量图标库',
                        link: 'https://www.iconfont.cn/',
                    },
                ],
            },
            {
                toolGroupName: '图像设计',
                toolList: [
                    {
                        icon: 'https://cdn.dancf.com/gaodingx/favicon.ico',
                        title: '搞定抠图',
                        desc: '在线快速图片和视频编辑',
                        link: 'https://koutu.gaoding.com/',
                    },
                    {
                        icon: 'https://img.springlearn.cn/mycolor.png',
                        title: '颜色搭配',
                        desc: '输入主色调，生成搭配颜色。',
                        link: 'https://mycolor.space/',
                        source: 1,
                    },
                    {
                        icon: 'https://img.springlearn.cn/blog/learn_1618677883000.png',
                        title: '创客贴',
                        desc: '创客贴专注图片模板在线设计',
                        link: 'https://www.chuangkit.com/designtools/designindex',
                    },
                    {
                        title: '图片压缩',
                        desc: '图片压缩工具',
                        link: 'https://squoosh.app/',
                        icon: 'https://squoosh.app/c/icon-large-maskable-c2078ced.png',
                        source: 1,
                        iconTextBackgroundColor: '',
                    },
                ],
            },
            {
                toolGroupName: '文章发布平台',
                toolList: [
                    {
                        icon: 'https://sf3-cdn-tos.douyinstatic.com/obj/eden-cn/uhbfnupkbps/toutiao_favicon.ico',
                        title: '今日头条',
                        desc: '今日头条是一个通用信息平台，致力于连接人与信息，让优质丰富的信息得到高效精准的分发，促使信息创造价值。',
                        link: 'https://www.toutiao.com/',
                    },
                    {
                        title: 'CSDN',
                        desc: 'CSDN',
                        link: 'https://blog.csdn.net/Message_lx?spm=1011.2415.3001.5343',
                        icon: 'https://g.csdnimg.cn/static/logo/favicon32.ico',
                        source: 0,
                        iconTextBackgroundColor: '',
                    },
                    {
                        icon: 'https://res.wx.qq.com/mpres/htmledition/weui-desktopSkin/svg/buildless/new_bg_icon_primary4c67b4.svg',
                        title: '微信公众平台',
                        desc: '微信公众号是开发者或商家在微信公众平台上申请的应用账号',
                        link: 'https://mp.weixin.qq.com/cgi-bin/home?t=home/index&lang=zh_CN&token=292341597',
                    },
                ],
            },
        ],
    },
    {
        categoryName: '后端',
        toolList: [
            {
                toolGroupName: 'Java',
                toolList: [
                    {
                        id: 44,
                        tid: 12,
                        icon: 'https://img.springlearn.cn/maven.svg',
                        title: '鲁班Maven仓库',
                        desc: '鲁班大师手撸Maven仓库,速度杠杠滴~',
                        link: 'http://mvn.coderead.cn/',
                        source: 1,
                    },
                    {
                        id: 49,
                        tid: 12,
                        icon: 'https://img.springlearn.cn/learn_4f0119e61238b4de74f2b588bfbb4e96.png',
                        title: '字符画',
                        desc: 'SpringBoot定制字符画',
                        link: 'http://patorjk.com/software/taag/#p=testall&f=Graffiti&t=Tomato',
                        source: 2,
                    },
                ],
            },
            {
                toolGroupName: '技术文档',
                toolList: [
                    {
                        id: 47,
                        tid: 14,
                        icon: 'https://junit.org/junit5/assets/img/junit5-icon.png',
                        title: 'Junit5中文文档',
                        desc: 'Junit5中文文档',
                        link: 'https://doczhcn.gitbook.io/junit5/',
                        source: 2,
                    },
                    {
                        id: 68,
                        tid: 14,
                        icon: 'https://img.springlearn.cn/blog/learn_1628687339000.png',
                        title: 'HTML特殊字符',
                        desc: 'HTML特殊字符',
                        link: 'https://www.tuboshu.mobi/tool/httpentity',
                        source: 1,
                    },
                ],
            },
            {
                toolGroupName: '画图工具',
                toolList: [
                    {
                        id: 73,
                        tid: 23,
                        icon: 'https://excalidraw.com/favicon.ico',
                        title: '手绘画图',
                        desc: '程序猿手绘风格画图',
                        link: 'https://excalidraw.com/',
                        source: 2,
                    },
                ],
            },
            {
                toolGroupName: '版本管理',
                toolList: [
                    {
                        id: 58,
                        tid: 17,
                        icon: 'https://pcottle.github.io/learnGitBranching/assets/learnGitBranching.png',
                        title: '在线Git学习',
                        desc: '可视化方式学习Git版本管理',
                        link: 'https://learngitbranching.js.org/?locale=zh_CN',
                        source: 2,
                    },
                ],
            },
        ],
    },
    {
        categoryName: '前端',
        toolList: [
            {
                toolGroupName: 'UI框架',
                toolList: [
                    {
                        title: 'Arco',
                        desc: '字节UI框架',
                        link: 'https://arco.design/vue/docs/pro/start',
                        icon: 'https://unpkg.byted-static.com/latest/byted/arco-config/assets/favicon.ico',
                        source: 0,
                        iconTextBackgroundColor: '',
                    },
                    {
                        id: 17,
                        tid: 5,
                        icon: 'https://element.eleme.cn/favicon.ico',
                        title: 'ElementUI',
                        desc: 'Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库',
                        link: 'https://element.eleme.cn/#/zh-CN',
                        source: 0,
                    },
                    {
                        id: 18,
                        tid: 5,
                        icon: 'https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png',
                        title: 'Ant Design',
                        desc: '企业级产品设计体系，创造高效愉悦的工作体验',
                        link: 'https://ant.design/index-cn',
                        source: 0,
                    },
                    {
                        id: 19,
                        tid: 5,
                        icon: 'https://gw.alipayobjects.com/zos/rmsportal/XPHxlVUyZBsQhXBPheZl.png',
                        title: 'Landing',
                        desc: '首页编辑器,快速搭建一个属于你的专属首页',
                        link: 'https://element.eleme.cn/#/zh-CN',
                        source: 0,
                    },
                    {
                        id: 20,
                        tid: 5,
                        icon: 'https://cdn.jsdelivr.net/npm/@bootcss/v3.bootcss.com@1.0.9/favicon.ico',
                        title: 'Bootstrap',
                        desc: 'Bootstrap 是最受欢迎的 HTML、CSS 和 JS 框架，用于开发响应式布局、移动设备优先的 WEB 项目。',
                        link: 'https://v3.bootcss.com/',
                        source: 1,
                    },
                    {
                        icon: '',
                        title: 'UIverse',
                        desc: '好看的样式',
                        link: 'https://uiverse.io/',
                        source: 1,
                    },
                ],
            },
            {
                toolGroupName: '前端框架',
                toolList: [
                    {
                        id: 21,
                        tid: 6,
                        icon: 'https://img.springlearn.cn/learn_3014a9186850f5d35867a0e564fefe51.svg',
                        title: 'Vue',
                        desc: '渐进式 JavaScript 框架',
                        link: 'https://v3.cn.vuejs.org/guide/installation.html',
                        source: 1,
                    },
                    {
                        id: 22,
                        tid: 6,
                        icon: '',
                        title: 'router',
                        desc: 'Vue-router组合式API示例',
                        link: 'https://router.vuejs.org/zh/guide/advanced/composition-api.html#%E5%9C%A8-setup-%E4%B8%AD%E8%AE%BF%E9%97%AE%E8%B7%AF%E7%94%B1%E5%92%8C%E5%BD%93%E5%89%8D%E8%B7%AF%E7%94%B1',
                        source: 1,
                    },
                    {
                        id: 23,
                        tid: 6,
                        icon: 'https://nodejs.org/static/images/favicons/favicon.ico',
                        title: 'Node',
                        desc: '简单的说 Node.js 就是运行在服务端的 JavaScript。',
                        link: 'https://www.runoob.com/nodejs/nodejs-tutorial.html',
                        source: 1,
                    },
                    {
                        id: 24,
                        tid: 6,
                        icon: 'https://cdn.icon-icons.com/icons2/2108/PNG/512/javascript_icon_130900.png',
                        title: 'JavaScript教程',
                        desc: 'JavaScript是一门基于原型、头等函数的语言，是一门多范式的语言，它支持面向对象程式設計，命令式编程，以及函数式编程。',
                        link: 'https://www.w3school.com.cn/js/js_output.asp',
                        source: 1,
                    },
                    {
                        title: 'Vite中文',
                        desc: 'Vite中文',
                        link: 'https://vitejs.cn/vite3-cn/config/',
                        icon: '',
                        source: 1,
                        iconTextBackgroundColor: '',
                    },
                    {
                        title: 'TS教程',
                        desc: 'TS教程',
                        link: 'https://www.runoob.com/typescript/ts-function.html',
                        icon: '',
                        source: 0,
                        iconTextBackgroundColor: '',
                    },
                ],
            },
            {
                toolGroupName: '前端样式',
                toolList: [
                    {
                        id: 25,
                        tid: 7,
                        icon: 'https://www.w3school.com.cn/ui2019/icon-96-red.png',
                        title: 'W3school CSS',
                        desc: '层叠样式表(Cascading Style Sheets，缩写为CSS），是一种样式表 语言，用来描述HTML 或XML',
                        link: 'https://www.w3school.com.cn/css/index.asp',
                        source: 1,
                    },
                    {
                        id: 26,
                        tid: 7,
                        icon: 'https://less.bootcss.com/public/ico/favicon.ico',
                        title: 'less',
                        desc: '给 CSS 加点料。',
                        link: 'https://less.bootcss.com/',
                        source: 1,
                    },
                    {
                        id: 27,
                        tid: 7,
                        icon: 'https://www.sass.hk/favicon.ico',
                        title: 'sass',
                        desc: '世界上最成熟、最稳定、最强大的专业级CSS扩展语言！',
                        link: 'https://www.sass.hk/',
                        source: 1,
                    },
                    {
                        id: 48,
                        tid: 7,
                        icon: 'https://developer.mozilla.org/favicon-48x48.97046865.png',
                        title: 'CSS样式学习',
                        desc: '可以在线预览样式',
                        link: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation',
                        source: 2,
                    },
                ],
            },
            {
                toolGroupName: '工具框架',
                toolList: [
                    {
                        id: 28,
                        tid: 8,
                        icon: 'https://www.lodashjs.com/img/favicon.ico',
                        title: 'Lodash',
                        desc: 'Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库。',
                        link: 'https://www.lodashjs.com/',
                        source: 1,
                    },
                    {
                        id: 29,
                        tid: 8,
                        icon: 'https://webpack.docschina.org/favicon.f326220248556af65f41.ico',
                        title: 'webpack',
                        desc: '构建你的Script',
                        link: 'https://webpack.docschina.org/',
                        source: 0,
                    },
                    {
                        id: 30,
                        tid: 8,
                        icon: 'https://cssgradient.io/images/favicon-23859487.png',
                        title: 'CSS Gradient',
                        desc: '自定义渐变并且生成 CSS 渐变代码样式',
                        link: 'https://cssgradient.io/',
                        source: 1,
                    },
                    {
                        id: 31,
                        tid: 8,
                        icon: 'https://uigradients.com/static/images/favicon-32x32.png',
                        title: '全屏渐变',
                        desc: '全屏渐变',
                        link: 'https://uigradients.com/#Quepal',
                        source: 1,
                    },
                ],
            },
            {
                toolGroupName: '布局',
                toolList: [
                    {
                        id: 55,
                        tid: 15,
                        icon: 'https://cpwebassets.codepen.io/assets/favicon/favicon-aec34940fbc1a6e787974dcd360f2c6b63348d4b1f4e06c77743096d55480f33.ico',
                        title: 'Flex布局可视化',
                        desc: '可视化的看flex的参数样式',
                        link: 'https://codepen.io/enxaneta/pen/adLPwv',
                        source: 2,
                    },
                    {
                        id: 76,
                        tid: 15,
                        icon: '',
                        title: 'Base64',
                        desc: '图片转Base64',
                        link: 'https://www.tuboshu.mobi/tool/imagetobase64',
                        source: 2,
                    },
                ],
            },
            {
                toolGroupName: '样式灵感 & 学习',
                toolList: [
                    {
                        id: 32,
                        tid: 9,
                        icon: 'https://lhammer.cn/You-need-to-know-css/static/favicon.ico',
                        title: 'You-need-to-know-css',
                        desc: '为了以后可以更爽的复制粘贴，笔者把自己的收获和工作中常用的一些CSS小样式总结成这份文档，为了\b有点\b逼格，\b且\b取名为You-need-to-know-css',
                        link: 'https://lhammer.cn/You-need-to-know-css/#/zh-cn/bevel-corners',
                        source: 1,
                    },
                    {
                        id: 33,
                        tid: 9,
                        icon: 'https://chokcoco.github.io/CSS-Inspiration/icon2.png',
                        title: 'CSS 灵感',
                        desc: '学习 CSS 的灵感，以分类的形式，展示不同 CSS 属性或者不同的课题使用 CSS 来解决的各种方法。',
                        link: 'https://chokcoco.github.io/CSS-Inspiration/#/./init',
                        source: 1,
                    },
                    {
                        id: 34,
                        tid: 9,
                        icon: 'https://www.sass.hk/favicon.ico',
                        title: 'CSS Tricks',
                        desc: '记录一些 CSS 的新属性和一点奇技淫巧',
                        link: 'https://qishaoxuan.github.io/css_tricks/',
                        source: 1,
                    },
                    {
                        id: 35,
                        tid: 9,
                        icon: 'https://www.sass.hk/favicon.ico',
                        title: 'Spin Kit',
                        desc: 'css加载动画样式',
                        link: 'https://qishaoxuan.github.io/css_tricks/',
                        source: 1,
                    },
                    {
                        id: 36,
                        tid: 9,
                        icon: 'https://img.springlearn.cn/learn_d15d7aae09d291773d32d68059263d6e.svg',
                        title: 'Animista',
                        desc: '动画样式',
                        link: 'https://animista.net/play/basic',
                        source: 1,
                    },
                    {
                        id: 37,
                        tid: 9,
                        icon: 'https://animate.style/img/favicon.ico',
                        title: 'Animate',
                        desc: 'CSS动画样式',
                        link: 'https://www.kettle.net.cn/animate/index.html',
                        source: 1,
                    },
                    {
                        id: 38,
                        tid: 9,
                        icon: 'https://cpwebassets.codepen.io/assets/favicon/favicon-aec34940fbc1a6e787974dcd360f2c6b63348d4b1f4e06c77743096d55480f33.ico',
                        title: 'Codepen',
                        desc: 'Js在线Idea',
                        link: 'https://codepen.io/',
                        source: 0,
                    },
                    {
                        id: 50,
                        tid: 9,
                        icon: 'https://img.springlearn.cn/blog/learn_1626318522000.png',
                        title: 'CSS背景',
                        desc: '使用css制作div背景',
                        link: 'https://bansal.io/pattern-css#font',
                        source: 2,
                    },
                    {
                        id: 51,
                        tid: 9,
                        icon: 'https://img.springlearn.cn/blog/learn_1626318472000.png',
                        title: '形状制作',
                        desc: 'svg形状制作，可以制作水位wave类似效果',
                        link: 'https://www.shapedivider.app/',
                        source: 2,
                    },
                    {
                        id: 52,
                        tid: 9,
                        icon: 'https://img.springlearn.cn/blog/learn_1626320312000.png',
                        title: 'CSS按钮特效',
                        desc: 'css按钮特效',
                        link: 'https://cssgradient.io/gradient-backgrounds/',
                        source: 2,
                    },
                    {
                        id: 53,
                        tid: 9,
                        icon: '',
                        title: 'fuse',
                        desc: 'js模糊搜索插件',
                        link: 'https://fusejs.io/getting-started/installation.html',
                        source: 1,
                    },
                    {
                        id: 74,
                        tid: 9,
                        icon: null,
                        title: 'scss转css',
                        desc: 'scss转css',
                        link: 'https://www.sassmeister.com/',
                        source: 0,
                    },
                ],
            },
        ],
    },
    {
        categoryName: '设计师',
        toolList: [
            {
                toolGroupName: '颜色设计',
                toolList: [
                    {
                        id: 41,
                        tid: 11,
                        icon: 'http://reeoo.com/assets/favicon.ico',
                        title: 'Reeoo',
                        desc: '根据颜色寻找设计灵感 & 颜色搭配',
                        link: 'http://reeoo.com/',
                        source: 1,
                    },
                    {
                        id: 42,
                        tid: 11,
                        icon: 'https://webgradients.com/favicons/favicon-128.png',
                        title: '小清新颜色',
                        desc: '小清新颜色搭配',
                        link: 'https://webgradients.com/',
                        source: 1,
                    },
                    {
                        id: 43,
                        tid: 11,
                        icon: 'https://www.hdrainbow.com/favicon.ico',
                        title: '颜色提取',
                        desc: '上传图片从图片中提取颜色信息,生成色卡',
                        link: 'https://www.hdrainbow.com/',
                        source: 1,
                    },
                ],
            },
            {
                toolGroupName: '搜图',
                toolList: [
                    {
                        title: '有图网',
                        desc: '图片搜索',
                        link: 'https://www.yotopic.com/',
                        source: 1,
                    },
                    {
                        id: 54,
                        tid: 13,
                        icon: 'https://toonme-com.photo-cdn.net/assets/favicon3.png',
                        title: '卡通头像',
                        desc: '上传图片,生成卡通图片',
                        link: 'https://toonme.com/',
                        source: 1,
                    },
                    {
                        id: 69,
                        tid: 13,
                        icon: 'https://www.autodraw.com/assets/images/favicon.png',
                        title: '谷歌AutoDraw',
                        desc: 'AI自动识别画图',
                        link: 'https://www.autodraw.com/',
                        source: 2,
                    },
                ],
            },
            {
                toolGroupName: '设计参考',
                toolList: [
                    {
                        id: 56,
                        tid: 16,
                        icon: 'http://www.qijishow.com/tibi/favicon.ico',
                        title: '奇迹秀工具箱',
                        desc: '优秀设计网站参考',
                        link: 'http://www.qijishow.com/down/index.html',
                        source: 1,
                    },
                    {
                        id: 57,
                        tid: 16,
                        icon: 'https://msgif.net/favicon.ico',
                        title: '字体动画设计',
                        desc: '录制字体输入',
                        link: 'https://msgif.net/',
                        source: 2,
                    },
                    {
                        id: 71,
                        tid: 16,
                        icon: 'https://www.blobmaker.app/icons/icon-48x48.png?v=d2064a4d23cc375c9a373bc2d9f2aa35',
                        title: '不规则图像生成',
                        desc: 'ppt设计',
                        link: 'https://www.blobmaker.app/',
                        source: 1,
                    },
                    {
                        id: 72,
                        tid: 16,
                        icon: 'http://gridzzly.com/favicon.png',
                        title: '网格纸生成器',
                        desc: '网格纸生成器',
                        link: 'http://gridzzly.com/',
                        source: 1,
                    },
                ],
            },
            {
                toolGroupName: '素材搜索',
                toolList: [
                    {
                        id: 70,
                        tid: 22,
                        icon: 'https://static.yotopic.com/images/icon.svg',
                        title: '有图网',
                        desc: '领取13积分/天,去水印后缀改为!p1',
                        link: 'https://www.yotopic.com/',
                        source: 1,
                    },
                ],
            },
        ],
    },
    {
        categoryName: '自媒体',
        toolList: [
            {
                toolGroupName: '博客平台',
                toolList: [
                    {
                        icon: 'https://img.springlearn.cn/learn_d98f09cdad8fa38168ec59c15a508490.ico',
                        title: '程序猿升级课',
                        desc: '自建博客平台',
                        link: 'https://blog.springlearn.cn/',
                    },
                    {
                        icon: 'https://g.csdnimg.cn/static/icon/favicon32.ico',
                        title: 'CSDN',
                        desc: 'CSDN主页',
                        link: 'https://blog.csdn.net/Message_lx',
                    },
                    {
                        icon: '',
                        title: '51CTO',
                        desc: '51CTO',
                        link: 'https://blog.51cto.com/springlearn',
                    },
                    {
                        icon: 'https://www.cnblogs.com/images/icon.svg?v=R9M0WmLAIPVydmdzE2keuvnjl-bPR7_35oHqtiBzGsM',
                        title: '博客园',
                        desc: '博客园',
                        link: 'https://www.cnblogs.com/lxchinesszz/',
                    },
                    {
                        icon: 'https://img.springlearn.cn/blog/learn_1628687063000.png',
                        title: 'segmentfault',
                        desc: 'segmentfault',
                        link: 'https://segmentfault.com/',
                    },
                    {
                        icon: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/yvahlyj_upfbvk_zlp/ljhwZthlaukjlkulzlp/pc_creator/favicon_v2_7145ff0.ico',
                        title: '抖音',
                        desc: '抖音',
                        link: 'https://creator.douyin.com/creator-micro/content/manage',
                    },
                    {
                        title: '阿里云',
                        desc: '阿里云',
                        link: 'https://developer.aliyun.com/profile/expert/f5rvdaab4y3ai',
                        icon: 'https://img.alicdn.com/tfs/TB1_ZXuNcfpK1RjSZFOXXa6nFXa-32-32.ico',
                        source: 0,
                        iconTextBackgroundColor: '',
                    },
                    {
                        title: '华为云博客',
                        desc: '华为云博客',
                        link: 'https://bbs.huaweicloud.com/community/myblog',
                        icon: 'https://res-static.hc-cdn.cn/aem/content/dam/cloudbu-site/archive/commons/web_resoure/framework/favicon/favicon.ico',
                        source: 0,
                        iconTextBackgroundColor: '',
                    },
                ],
            },
            {
                toolGroupName: '文字处理',
                toolList: [
                    {
                        icon: 'https://www.mdnice.com/favicon.svg',
                        title: '我的文章编辑',
                        desc: 'Markdown 微信编辑器,拥有良好的兼容性、海量主题样式、免费的图床。',
                        link: 'https://editor.mdnice.com/',
                    },
                    {
                        icon: 'http://md.aclickall.com/favicon.ico',
                        title: '公众号排版利器',
                        desc: 'Markdown排版利器，还能让Markdown内容，无需作任何调整就能同时在微信公众号、博客园、掘金、csdn等平台正确显示当前预览的效果',
                        link: 'http://md.aclickall.com/',
                    },
                ],
            },
        ],
    },
    {
        categoryName: '运维工具',
        toolList: [
            {
                toolGroupName: 'Linux',
                toolList: [
                    {
                        id: 59,
                        tid: 18,
                        icon: 'https://img.springlearn.cn/blog/learn_1628687155000.png',
                        title: '常用Linux命令',
                        desc: '常用Linux命令',
                        link: 'https://www.tuboshu.mobi/tool/linux-command',
                        source: 1,
                    },
                    {
                        title: 'Nginx',
                        desc: 'Nginx可视化配置',
                        link: 'https://www.digitalocean.com/community/tools/nginx?global.app.lang=zhCN',
                        icon: '',
                        source: 0,
                        iconTextBackgroundColor: '',
                    },
                ],
            },
            {
                toolGroupName: '在线工具',
                toolList: [
                    {
                        id: 60,
                        tid: 19,
                        icon: 'https://www.tuboshu.mobi/assets/images/favicon.png',
                        title: '统计字数',
                        desc: '统计字数',
                        link: 'https://www.tuboshu.mobi/tool/letters',
                        source: 1,
                    },
                    {
                        id: 61,
                        tid: 19,
                        icon: 'https://www.tuboshu.mobi/assets/images/favicon.png',
                        title: '英文大小写转换',
                        desc: '英文大小写转换',
                        link: 'https://www.tuboshu.mobi/tool/letterconvert',
                        source: 1,
                    },
                    {
                        id: 62,
                        tid: 19,
                        icon: 'https://www.tuboshu.mobi/assets/images/favicon.png',
                        title: '汉字转拼音',
                        desc: '汉字转拼音',
                        link: 'https://www.tuboshu.mobi/tool/pinyin',
                        source: 1,
                    },
                ],
            },
        ],
    },
    {
        categoryName: '在线工具',
        toolList: [
            {
                toolGroupName: '在线工具',
                toolList: [
                    {
                        id: 39,
                        tid: 10,
                        icon: '',
                        title: 'JSON格式',
                        desc: 'JSON格式化',
                        link: 'https://c.runoob.com/front-end/53/',
                        source: 0,
                    },
                    {
                        title: '时间戳转换',
                        desc: '时间戳转换',
                        link: 'https://c.runoob.com/front-end/852/',
                        icon: '',
                        source: 0,
                        iconTextBackgroundColor: '',
                    },
                    {
                        title: '进制转换器',
                        desc: '进制转换器',
                        link: 'https://c.runoob.com/front-end/58/',
                        icon: '',
                        source: 0,
                        iconTextBackgroundColor: '',
                    },
                    {
                        title: 'MD5',
                        desc: 'MD5',
                        link: 'https://c.runoob.com/front-end/703/',
                        icon: '',
                        source: 0,
                        iconTextBackgroundColor: '',
                    },
                    {
                        title: '正则匹配',
                        desc: '正则匹配',
                        link: 'https://tool.lu/regex/',
                        icon: '',
                        source: 0,
                        iconTextBackgroundColor: '',
                    },
                    {
                        title: 'Cron生成',
                        desc: 'Cron生成器',
                        link: 'https://www.bejson.com/othertools/cron/',
                        icon: '',
                        source: 0,
                        iconTextBackgroundColor: '',
                    },
                ],
            },
            {
                toolGroupName: '文本处理',
                toolList: [
                    {
                        title: '统计字数',
                        desc: '统计字数',
                        link: 'https://www.tuboshu.mobi/tool/letters',
                        icon: '',
                        source: 0,
                        iconTextBackgroundColor: '',
                    },
                    {
                        title: '大小写转换',
                        desc: '英文大小写转换',
                        link: 'https://www.tuboshu.mobi/tool/letterconvert',
                        icon: '',
                        source: 0,
                        iconTextBackgroundColor: '',
                    },
                ],
            },
            {
                toolGroupName: '图片处理',
                toolList: [
                    {
                        title: '图片压缩',
                        desc: '图片压缩工具',
                        link: 'https://squoosh.app/',
                        icon: 'https://squoosh.app/c/icon-large-maskable-c2078ced.png',
                        source: 1,
                        iconTextBackgroundColor: '',
                    },
                    {
                        title: '路过图床',
                        desc: '一款免费的图床工具网站',
                        link: 'https://imgse.com/lxchinesszz',
                        icon: 'https://imgse.com/content/images/system/favicon_1587118523486_91617a.png',
                        source: 1,
                        iconTextBackgroundColor: '',
                    },
                ],
            },
        ],
    },
];
const searchList = [
    {
        name: 'Baidu',
        slogan: '百度一下,你就知道',
        href: 'https://www.baidu.com/s?ie=UTF-8&wd=',
    },
    {
        name: 'Google2',
        slogan: '使用谷歌试试手气吧',
        // djt: 1,
        href: 'https://www.google.com/search?q=',
    },
    {
        name: 'Github',
        slogan: '全球最大的代码仓库平台',
        href: 'https://github.com/search?q=',
    },
    {
        name: 'Oschina',
        slogan: 'OSCHINA - 中文开源技术交流社区_开源中国',
        href: 'https://www.oschina.net/search?q=',
    },
    {
        name: 'CSDN',
        slogan: 'CSDN - 专业开发者社区',
        href: 'https://so.csdn.net/so/search?q=',
    },
    {
        name: 'Bilibi',
        slogan: '哔哩哔哩 (゜-゜)つロ 干杯~-bilibili',
        href: 'https://search.bilibili.com/all?keyword=',
    },
];
const shortcutData = [
    {
        name: 'Vue3',
        href: 'https://cn.vuejs.org/guide/introduction.html',
        openType: '_blank',
    },
    {
        name: 'JSON',
        href: 'https://www.json.cn/',
        openType: '_blank',
    },
    {
        name: '配色',
        href: 'https://mycolor.space/',
        openType: '_blank',
    },
    {
        name: '个人博客',
        href: 'https://blog.springlearn.cn',
        openType: '_blank',
    },
    {
        name: 'CSDN',
        href: 'https://mp.csdn.net/mp_blog/manage/article?spm=1001.2014.3001.5448',
        openType: '_blank',
    },
    {
        name: '今日热榜',
        href: 'https://tophub.today/',
        openType: '_blank',
    },
];
/**
 * - search-simple
 * - search-google
 * - search-standard
 * @type {{searchStyle: string}}
 */
const style = {
    searchStyle: 'supper-search',
    searchBackgroundCss: ' background-image: linear-gradient(\n' +
        '      45deg,\n' +
        '      rgb(90, 54, 148) 0%,\n' +
        '      rgb(19, 189, 206) 33%,\n' +
        '      rgb(0, 148, 217) 66%,\n' +
        '      rgb(111, 199, 181) 100%\n' +
        '    );\n' +
        '    background-size: 400%;\n' +
        '    background-position: 0 100%;\n' +
        '    -webkit-animation: gradient 15s ease-in-out infinite;\n' +
        '    animation: bganimation-114fda31 15s ease-in-out infinite;\n',
    windowAnimate: 'fadeInRightBig',
    searchAnimate: 'fadeInRightBig',
    navBarBackgroundCss: 'background-color: rgba(255, 255, 255, 0.25);\n' +
        'backdrop-filter: blur(30px);\n' +
        '-webkit-backdrop-filter: blur(30px);\n' +
        'border: 1px solid rgba(255, 255, 255, 0.18);\n' +
        'box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;\n' +
        '-webkit-box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;\n' +
        'color: rgba(255, 255, 255, 0.75);',
    toolGroupAnimate: 'fadeInUp',
    closeIcon: false,
    fuzzySearch: true,
    simplify: false,
    searchTextCss: '',
    supperSearchEngine: ['tool'],
    frostedGlass: true,
    hideSearchAroundText: false,
};
const wps = [];
const setting = {
    theme: style,
    shortcut: shortcutData,
    categories: data,
    searchEngineList: searchList,
    wps,
};
export default setting;
//# sourceMappingURL=data.js.map