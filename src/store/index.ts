import { createPinia } from 'pinia';
import useWpsStore from './modules/weidget';
import useAppStore from './modules/app';
import useUserStore from './modules/user';
import useTabBarStore from './modules/tab-bar';

const pinia = createPinia();

export { useAppStore, useUserStore, useTabBarStore, useWpsStore };
export default pinia;
