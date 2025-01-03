import { Icon } from '@arco-design/web-vue';
const href = '//at.alicdn.com/t/c/font_902793_s09phiasisj.js';
/**
 * 阿里图标
 */
const IconFont = Icon.addFromIconFontCn({
    src: `https://${href}`,
    extraProps: {
    // fill: 'white',
    },
});
export default {
    install(app) {
        app.component('IconFont', IconFont);
    },
};
//# sourceMappingURL=iconfont.js.map