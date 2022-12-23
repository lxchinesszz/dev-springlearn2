<template>
  <a-layout>
    <a-layout-header id="header" :style="theme.navBarBackgroundCss">
      <WorkerHeader :data-source="sourceData"></WorkerHeader>
    </a-layout-header>
    <a-layout-content class="animated" :class="theme.windowAnimate">
      <Search
        id="search"
        :style="theme"
        :categories="categories"
        :search-list="searchList"
        @change-category="selectCategory"
      ></Search>
      <!--    工具流-->
      <div id="tool" class="toolContainerFlow">
        <div
          v-for="index in toolGroupData.toolList"
          :key="index"
          class="toolList"
        >
          <ToolDrawer
            :data-source="sourceData"
            :name="index.toolGroupName"
            :tool-list="index.toolList"
          ></ToolDrawer>
        </div>
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script lang="ts" setup>
  import WorkerHeader from '@/views/workplace/components/WorkerHeader.vue';
  import Search from '@/views/workplace/components/Search.vue';
  import ToolDrawer from '@/views/workplace/components/ToolDrawer.vue';
  import { onMounted, reactive } from 'vue';
  import { fetchSourceData, isNewUser, saveLocal } from '@/api/toolList';
  import deepClone from '@/api/lodashs';
  import CategoryModel from '@/model/CategoryModel';
  import SearchEngineModel from '@/model/SearchEngineModel';
  import SettingModel from '@/model/SettingModel';
  import Driver from 'driver.js'; // import driver.js
  import 'driver.js/dist/driver.min.css'; // import driver.js css
  import setps from '@/api/setps';

  // 元数据
  const sourceData: SettingModel = fetchSourceData();
  const { theme } = sourceData;
  const categories: Array<CategoryModel> = deepClone(sourceData.categories);
  // 初始化数据
  const toolGroupData: CategoryModel = reactive(deepClone(categories[0]));
  const searchList: Array<SearchEngineModel> = deepClone(
    sourceData.searchEngineList
  );
  // 切换分类工具组
  function selectCategory(index: number) {
    toolGroupData.categoryName = categories[index].categoryName;
    toolGroupData.toolList = categories[index].toolList;
  }

  /**
   * 判断是否可以执行引导
   */
  function showTipsIfNeeded() {
    // 如果为空,说明是第一次访问
    if (isNewUser()) {
      const driver = new Driver({
        prevBtnText: '上一步',
        nextBtnText: '下一步',
        doneBtnText: '我知道了',
        closeBtnText: '关闭',
        allowClose: false,
        onReset: () => {
          // 获取默认数据保存到本地
          console.log('报错本地');
          saveLocal(sourceData);
        },
      });
      driver.defineSteps(setps);
      driver.start();
    }
  }

  onMounted(() => {
    showTipsIfNeeded();
  });
</script>

<style lang="less" scoped>
  #header {
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 55px;
  }

  #search {
    width: 100vw;
    height: 50vh;
  }

  .toolContainerFlow {
    width: 100vw;
    height: auto;
    display: flex;
    flex-wrap: wrap;
  }

  .toolList {
    position: relative;
    width: 49.5vw;
    height: auto;
    margin: 0.25vw;
  }
</style>
