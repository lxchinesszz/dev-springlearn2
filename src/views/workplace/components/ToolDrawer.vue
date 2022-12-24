<template>
  <div>
    <div class="animated" :class="dataSource.theme.toolGroupAnimate">
      <a-divider orientation="left">
        {{ name }}
      </a-divider>
    </div>
    <div class="toolPanel">
      <!--      最多6个,如果不到6个就填充到6个。如果超过6个剩余3个不展示,放到弹窗中-->
      <Tool
        v-for="index in toolList"
        :key="index"
        class="toolCard animated"
        :class="dataSource.theme.toolGroupAnimate"
        :info="index"
        :data-source="dataSource"
      ></Tool>
    </div>
  </div>
</template>

<script lang="ts">
  // 抽屉工具，支持8个或者是4个
  import { defineComponent } from 'vue';
  import Tool from '@/views/workplace/components/Tool.vue';
  import SettingModel from '@/model/SettingModel';
  import CategoryTool from '@/model/CategoryTool';

  export default defineComponent({
    name: 'ToolDrawer',
    components: { Tool },
    props: {
      dataSource: SettingModel,
      name: {
        type: String,
        default: '未命名',
      },
      toolList: Array<CategoryTool>,
    },
  });
</script>

<style scoped>
  :deep(.arco-divider-text) {
    border-radius: 5px;
    background: #409eff;
    color: white;
  }

  @media screen and (min-width: 1440px) {
    .toolPanel {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
    }
    .toolCard {
      margin: 10px 5px;
      width: 32%;
    }
  }

  @media screen and (max-width: 1440px) {
    .toolPanel {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
    }
    .toolCard {
      margin: 5px;
      width: 48%;
    }
  }
</style>
