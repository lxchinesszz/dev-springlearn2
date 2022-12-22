<template>
  <a-layout>
    <a-layout-header id="header" :style="style.navBarBackgroundCss">
      <WorkerHeader :data-source="sourceData"></WorkerHeader>
    </a-layout-header>
    <a-layout-content class="animated" :class="style.windowAnimate">
      <Search
        id="search"
        :style="style"
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
  import {
    fetchCategories,
    fetchSearchList,
    fetchSourceData,
  } from '@/api/toolList';
  import deepClone from '@/api/lodashs';
  import CategoryModel from '@/model/CategoryModel';
  import SearchEngineModel from '@/model/SearchEngineModel';
  import SettingModel from '@/model/SettingModel';
  import Driver from 'driver.js'; // import driver.js
  import 'driver.js/dist/driver.min.css'; // import driver.js css

  // 1. 判断当前缓存中是否有配置
  // 2. 如果没有读取默认值,写入全局配置
  // 元数据
  const sourceData: SettingModel = fetchSourceData();
  const { style } = sourceData;
  const categories: Array<CategoryModel> = fetchCategories();
  // 初始化数据
  const toolGroupData: CategoryModel = reactive(deepClone(categories[0]));
  const searchList: Array<SearchEngineModel> = fetchSearchList();
  // 切换分类工具组
  function selectCategory(index: number) {
    toolGroupData.categoryName = categories[index].categoryName;
    toolGroupData.toolList = categories[index].toolList;
  }
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
      element: '#searchTarget',
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
  function showTips() {
    const driver = new Driver({
      prevBtnText: '上一步',
      nextBtnText: '下一步',
      doneBtnText: '我知道了',
      closeBtnText: '关闭',
      allowClose: false,
      onReset: (ele: any) => {
        localStorage.setItem('driver', JSON.stringify({ firstVisit: false }));
      },
    });
    driver.defineSteps(steps);
    // driver.start();
  }

  onMounted(() => {
    showTips();
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
