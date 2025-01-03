<template>
  <div class="tool-drawer">
    <div class="animated" :class="dataSource.theme.toolGroupAnimate">
      <a-divider orientation="left">
        <div class="title-wrapper">
          <span class="group-title">{{ name }}</span>
          <a-tooltip content="添加工具">
            <a-button
              type="text"
              size="mini"
              class="add-btn"
              @click="showAddToolModal"
            >
              <template #icon><icon-plus /></template>
            </a-button>
          </a-tooltip>
        </div>
      </a-divider>
    </div>
    <div class="tool-panel">
      <a-grid 
        :cols="{ 
          xs: 1, 
          sm: 1, 
          md: 2, 
          lg: 2, 
          xl: 2, 
          xxl: 3 
        }" 
        :colGap="16" 
        :rowGap="16"
      >
        <template v-for="(info, index) in displayedTools" :key="JSON.stringify(info)">
          <a-grid-item>
            <Tool
              :bg-color="dynamicIconColor(index)"
              class="toolCard animated"
              :class="dataSource.theme.toolGroupAnimate"
              :tool-info="info"
              :data-source="dataSource"
              :category-index="categoryIndex"
              :group-index="groupIndex"
              @refresh="handleRefresh"
            ></Tool>
          </a-grid-item>
        </template>
        <a-grid-item v-if="hasMoreTools">
          <div 
            class="collapse-card animated" 
            :class="dataSource.theme.toolGroupAnimate"
            @click="toggleExpand"
          >
            <div class="collapse-content">
              <icon-plus v-if="!isExpanded" />
              <icon-minus v-else />
              <span>{{ isExpanded ? '收起' : `展开更多(${remainingCount})`}}</span>
            </div>
          </div>
        </a-grid-item>
      </a-grid>
    </div>

    <!-- 添加工具弹窗 -->
    <a-modal
      v-model:visible="addToolVisible"
      title="添加工具"
      :modal-style="{ borderRadius: '12px' }"
      :title-align="'start'"
      @ok="handleAddTool"
      @cancel="addToolVisible = false"
    >
      <a-form :model="newTool" layout="vertical">
        <a-form-item label="标题" required>
          <a-input v-model="newTool.title" placeholder="请输入工具名称" />
        </a-form-item>
        <a-form-item label="描述">
          <a-textarea v-model="newTool.desc" placeholder="请输入工具描述" />
        </a-form-item>
        <a-form-item label="链接" required>
          <a-input v-model="newTool.link" placeholder="请输入工具链接" />
        </a-form-item>
        <a-form-item label="图标">
          <a-input v-model="newTool.icon" placeholder="请输入图标链接" />
        </a-form-item>
        <a-form-item label="来源">
          <a-radio-group v-model="newTool.source">
            <a-radio :value="0">国内</a-radio>
            <a-radio :value="1">国外</a-radio>
          </a-radio-group>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, reactive, computed } from 'vue';
  import Tool from '@/views/workplace/components/Tool.vue';
  import SettingModel from '@/model/SettingModel';
  import CategoryTool from '@/model/CategoryTool';
  import { Message } from '@arco-design/web-vue';
  import { setCategory, fetchSourceData } from '@/api/toolList';
  import { IconPlus, IconMinus } from '@arco-design/web-vue/es/icon';

  export default defineComponent({
    name: 'ToolDrawer',
    components: { 
      Tool,
      IconPlus,
      IconMinus
    },
    props: {
      dataSource: SettingModel,
      name: {
        type: String,
        default: '未命名',
      },
      toolList: Array<CategoryTool>,
      categoryIndex: {
        type: Number,
        required: true,
      },
      groupIndex: {
        type: Number,
        required: true,
      },
    },
    emits: ['refresh'],
    setup(props, { emit }) {
      const addToolVisible = ref(false);
      const isExpanded = ref(false);
      const MAX_VISIBLE_TOOLS = 6;

      const newTool = reactive({
        title: '',
        desc: '',
        link: '',
        icon: '',
        source: 0,
        id: '',
        iconTextBackgroundColor: '#3c6eff'
      });

      const displayedTools = computed(() => {
        if (!props.toolList) return [];
        return isExpanded.value 
          ? props.toolList 
          : props.toolList.slice(0, MAX_VISIBLE_TOOLS);
      });

      const hasMoreTools = computed(() => {
        return props.toolList && props.toolList.length > MAX_VISIBLE_TOOLS;
      });

      const remainingCount = computed(() => {
        if (!props.toolList) return 0;
        return props.toolList.length - MAX_VISIBLE_TOOLS;
      });

      function toggleExpand() {
        isExpanded.value = !isExpanded.value;
      }

      function dynamicIconColor(index: number) {
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

      function showAddToolModal() {
        Object.assign(newTool, {
          title: '',
          desc: '',
          link: '',
          icon: '',
          source: 0,
          id: Date.now().toString(),
          iconTextBackgroundColor: '#3c6eff'
        });
        addToolVisible.value = true;
      }

      function handleAddTool() {
        if (!newTool.title || !newTool.link) {
          Message.error('请填写必填项');
          return;
        }
        
        const sourceData = fetchSourceData();
        const category = sourceData.categories[props.categoryIndex];
        if (!category) return;
        
        const toolGroup = category.toolList[props.groupIndex];
        if (!toolGroup) return;
        
        toolGroup.toolList.push({ ...newTool });
        
        setCategory(sourceData.categories);
        Message.success('添加成功');
        addToolVisible.value = false;
        
        emit('refresh');
      }

      const handleRefresh = () => {
        emit('refresh');
      };

      return {
        dynamicIconColor,
        handleRefresh,
        addToolVisible,
        newTool,
        showAddToolModal,
        handleAddTool,
        displayedTools,
        hasMoreTools,
        remainingCount,
        isExpanded,
        toggleExpand
      };
    },
  });
</script>

<style lang="less" scoped>
  .tool-drawer {
    background: linear-gradient(to right, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.1));
    border-radius: 16px;
    padding: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    margin: 8px;
  }

  :deep(.arco-divider-text) {
    background: linear-gradient(135deg, #4080ff, #5c9fff);
    border-radius: 8px;
    color: white;
    padding: 6px 12px;
    box-shadow: 0 2px 8px rgba(64, 128, 255, 0.2);
  }

  .title-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .group-title {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.5px;
  }

  .add-btn {
    color: rgba(255, 255, 255, 0.9);
    width: 24px;
    height: 24px;
    padding: 0;
    border-radius: 4px;
    transition: all 0.3s ease;
    
    &:hover {
      background: rgba(255, 255, 255, 0.15);
      transform: translateY(-1px);
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    }
    
    :deep(.arco-icon) {
      margin: 0;
      font-size: 14px;
    }
  }

  :deep(.arco-tooltip) {
    .arco-tooltip-content {
      background-color: rgba(0, 0, 0, 0.75);
      backdrop-filter: blur(4px);
      padding: 4px 8px;
      font-size: 12px;
      border-radius: 4px;
    }
  }

  .tool-panel {
    width: 100%;
    height: 100%;
    padding: 12px 4px;
    
    :deep(.arco-grid) {
      margin: -8px -12px;
    }
    
    :deep(.arco-grid-item) {
      padding: 8px 12px;
      transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      
      .toolCard {
        transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        transform-origin: center center;
        will-change: transform, box-shadow;
      }
      
      &:hover {
        transform: translateY(-2px) scale(1.02);
        
        .toolCard {
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        }
      }
    }
  }

  .collapse-card {
    height: 100%;
    min-height: 140px;
    background: linear-gradient(135deg, rgba(60, 110, 255, 0.1), rgba(92, 159, 255, 0.1));
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 2px dashed rgba(60, 110, 255, 0.2);
    transition: all 0.3s ease;

    &:hover {
      background: linear-gradient(135deg, rgba(60, 110, 255, 0.15), rgba(92, 159, 255, 0.15));
      border-color: rgba(60, 110, 255, 0.3);
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    }

    .collapse-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      color: #4080ff;

      :deep(.arco-icon) {
        font-size: 24px;
      }

      span {
        font-size: 14px;
        font-weight: 500;
      }
    }
  }

  .animated {
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  :deep(.arco-form-item-label) {
    font-weight: 500;
    color: #1d2129;
    margin-bottom: 4px;
  }

  :deep(.arco-radio-group) {
    display: flex;
    gap: 24px;
  }

  :deep(.arco-input-wrapper) {
    border-radius: 8px;
    transition: all 0.3s ease;
    
    &:hover {
      border-color: #4080ff;
      box-shadow: 0 0 0 2px rgba(64, 128, 255, 0.1);
    }
    
    &.arco-input-focus {
      border-color: #4080ff;
      box-shadow: 0 0 0 2px rgba(64, 128, 255, 0.2);
    }
  }

  :deep(.arco-modal) {
    .arco-modal-header {
      padding: 20px 24px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.06);
      
      .arco-modal-title {
        font-size: 18px;
        font-weight: 600;
        color: #1d2129;
      }
    }
    
    .arco-modal-content {
      padding: 24px;
    }
    
    .arco-modal-footer {
      padding: 16px 24px;
      border-top: 1px solid rgba(0, 0, 0, 0.06);
      
      .arco-btn {
        padding: 6px 16px;
        border-radius: 6px;
        font-weight: 500;
        
        &.arco-btn-primary {
          background: linear-gradient(135deg, #4080ff, #5c9fff);
          border: none;
          
          &:hover {
            background: linear-gradient(135deg, #3570e6, #4a8ff0);
          }
        }
      }
    }
  }

  @media screen and (min-width: 1920px) {
    .tool-panel {
      :deep(.arco-grid) {
        margin: -12px -16px;
      }
      :deep(.arco-grid-item) {
        padding: 12px 16px;
      }
    }
  }

  @media screen and (min-width: 1440px) and (max-width: 1919px) {
    .tool-panel {
      :deep(.arco-grid) {
        margin: -10px -14px;
      }
      :deep(.arco-grid-item) {
        padding: 10px 14px;
      }
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    .tool-panel {
      :deep(.arco-grid) {
        margin: -8px -12px;
      }
      :deep(.arco-grid-item) {
        padding: 8px 12px;
      }
    }
  }

  @media screen and (max-width: 1023px) {
    .tool-drawer {
      margin: 6px;
      padding: 12px;
    }
    
    .tool-panel {
      :deep(.arco-grid) {
        margin: -6px -8px;
      }
      :deep(.arco-grid-item) {
        padding: 6px 8px;
      }
    }

    .collapse-card {
      min-height: 140px;
    }
  }

  :deep(.arco-grid-item) {
    &:active {
      transform: translateY(0) scale(0.98);
      transition-duration: 0.1s;
    }
  }
</style>
