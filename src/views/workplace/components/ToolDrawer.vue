<template>
  <div>
    <div class="animated" :class="dataSource.theme.toolGroupAnimate">
      <a-divider orientation="left">
        {{ name }}
      </a-divider>
    </div>
    <div class="toolPanel">
      <!--      最多6个,如果不到6个就填充到6个。如果超过6个剩余3个不展示,放到弹窗中-->
      <a-grid :cols="{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2, xxl: 3 }">
        <a-grid-item
          v-for="(info, index) in toolList"
          :key="JSON.stringify(info)"
          :span="{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }"
        >
          <Tool
            :bg-color="dynamicIconColor(index)"
            class="toolCard animated"
            :class="dataSource.theme.toolGroupAnimate"
            :info="info"
            :data-source="dataSource"
          ></Tool>
        </a-grid-item>
      </a-grid>
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
    setup() {
      function dynamicIconColor(index: number) {
        // e9806e
        const backColor = [
          '#3c6eff',
          '#3c6eff',
          '#3c6eff',
          '#3c6eff',
          '#3c6eff',
          '#3c6eff',
        ];
        return backColor[index % 3];
      }

      return { dynamicIconColor };
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
      /*display: flex;*/
      /*justify-content: flex-start;*/
      /*flex-wrap: wrap;*/
    }

    .toolCard {
      margin: 10px 5px;
      /*width: 32%;*/
    }
  }

  @media screen and (max-width: 1440px) {
    .toolPanel {
      width: 100%;
      height: 100%;
      /*display: flex;*/
      /*justify-content: flex-start;*/
      /*flex-wrap: wrap;*/
    }

    .toolCard {
      margin: 5px;
    }
  }
</style>
