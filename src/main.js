import { createApp } from 'vue';
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import BaiduCalendar from 'vue-baidu-calendar';
import iconfont from '@/iconfont/iconfont';
import _ from 'lodash';
import router from './router';
import store from './store';
import App from './App.vue';
import '@arco-design/web-vue/dist/arco.css';
import '@/assets/style/global.less';
import '@/api/interceptor';
import 'highlight.js/styles/stackoverflow-light.css';
const app = createApp(App);
/**
 * https://vitejs.cn/vite3-cn/guide/env-and-mode.html
 * 生产环境忽略告警
 * development
 * production
 */
if (import.meta.env.MODE === 'development') {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    app.config.warnHandler = () => { };
}
app.use(ArcoVue, {});
app.use(ArcoVueIcon);
app.use(iconfont);
app.use(router);
app.use(store);
app.use(BaiduCalendar);
app.mount('#app');
window['lodash'] = _;
//# sourceMappingURL=main.js.map