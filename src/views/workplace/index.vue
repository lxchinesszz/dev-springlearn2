<template>
  <a-layout>
    <a-layout-header id="header">
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
      <div class="toolContainerFlow">
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
  import { reactive } from 'vue';
  import {
    fetchCategories,
    fetchSearchList,
    fetchSourceData,
  } from '@/api/toolList';
  import deepClone from '@/api/lodashs';
  import CategoryModel from '@/model/CategoryModel';
  import SearchEngineModel from '@/model/SearchEngineModel';
  import SettingModel from '@/model/SettingModel';
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
</script>

<style lang="less" scoped>
  #header {
    padding: 0;
    //background: #cae7ef url(https://img.springlearn.cn/cloudtou.svg) repeat-y
    //  30% 22%;
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
