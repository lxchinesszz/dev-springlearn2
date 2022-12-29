import { createApp } from 'vue';
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import BaiduCalendar from 'vue-baidu-calendar';
import router from './router';
import store from './store';
import directive from './directive';
import App from './App.vue';
import '@arco-design/web-vue/dist/arco.css';
import '@/assets/style/global.less';
import '@/api/interceptor';
import 'highlight.js/styles/stackoverflow-light.css';

const app = createApp(App);

app.use(ArcoVue, {});
app.use(ArcoVueIcon);

app.use(router);
app.use(store);
app.use(directive);

app.use(BaiduCalendar);

app.mount('#app');
