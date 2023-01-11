// 挂载，注册
import { App } from 'vue';
import LongPress from '@/directive/longpress/longpress';

export default {
  install(app: App) {
    app.directive('longPress', LongPress);
  },
};
