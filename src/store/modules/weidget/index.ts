import { defineStore } from 'pinia';
import WidgetPlugin from '@/model/WidgetPlugin';

const useWpsStore = defineStore('wpsStore', () => {
  function mergeNewWps(userWps: WidgetPlugin[], newAddWps: WidgetPlugin[]) {}

  return {
    mergeNewWps,
  };
});

export default useWpsStore;
