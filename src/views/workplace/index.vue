<template>
  <a-layout>
    <a-layout-header id="header">
      <WorkerHeader></WorkerHeader>
    </a-layout-header>
    <a-layout-content>
      <Search id="search"></Search>
      <!--    工具流-->
      <div class="toolContainerFlow">
        <div class="toolList">
          <ToolDrawer name="前端工具"></ToolDrawer>
        </div>
        <div class="toolList">
          <ToolDrawer></ToolDrawer>
        </div>
        <div class="toolList">
          <ToolDrawer></ToolDrawer>
        </div>
        <div class="toolList">
          <ToolDrawer></ToolDrawer>
        </div>
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script lang="ts" setup>
  import WorkerHeader from "@/views/workplace/components/WorkerHeader.vue";
  import Search from "@/views/workplace/components/Search.vue";
  import ToolDrawer from "@/views/workplace/components/ToolDrawer.vue";

</script>

<style lang="less" scoped>
  #header {
    padding: 0;
    background: #cae7ef url(https://img.springlearn.cn/cloudtou.svg) repeat-y 30% 22%;
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
    height: 30vh;
    background: aqua;
    margin: 0.25vw;
  }
</style>
