<template>
  <a-layout>
    <a-layout-header id="header">
      <WorkerHeader :data-source="sourceData"></WorkerHeader>
    </a-layout-header>
    <a-layout-content class="animated fadeInUp">
      <Search
        id="search"
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
  import { fetchCategories, fetchSearchList } from '@/api/toolList';
  import deepClone from '@/api/lodashs';
  // 元数据
  const sourceData = fetchCategories();
  // 深拷贝对象
  const categories = deepClone(sourceData);
  // 初始化数据
  const toolGroupData = reactive(deepClone(sourceData[0]));

  const searchList = fetchSearchList();

  function selectCategory(index: number) {
    toolGroupData.toolGroupName = sourceData[index].toolGroupName;
    console.log('name:', toolGroupData.toolGroupName, index);
    toolGroupData.toolList = sourceData[index].toolList;
  }
</script>

<style lang="less" scoped>
  #header {
    padding: 0;
    background: #cae7ef url(https://img.springlearn.cn/cloudtou.svg) repeat-y
      30% 22%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
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
