import { App } from 'vue';
import { Icon } from '@arco-design/web-vue';

const href = '//at.alicdn.com/t/c/font_902793_1kxz4bwyj7k.js';

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
  install(app: App) {
    app.component('IconFont', IconFont);
  },
};
