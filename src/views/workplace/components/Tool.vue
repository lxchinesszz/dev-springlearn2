<template>
  <div class="toolCard" @click="openTool">
    <div class="toolIcon">
      <ELink :href="toolInfo?.link">
        <a-avatar
          v-if="toolInfo?.icon && !imgError"
          :size="55"
          shape="circle"
          :style="{
            background: '#fff',
            border: '1px solid rgba(0, 0, 0, 0.06)',
          }"
        >
          <img
            :src="toolInfo.icon"
            :alt="toolInfo.title"
            style="width: 100%; height: 100%; object-fit: contain"
            @error="switchIconText"
          />
        </a-avatar>
        <a-avatar
          v-else
          :size="55"
          shape="circle"
          :style="{
            backgroundColor: getBackgroundColor(toolInfo?.title),
            color: '#000000',
            fontSize: '24px',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'none',
          }"
        >
          {{ iconText }}
        </a-avatar>
      </ELink>
    </div>
    <div class="tool-content">
      <div class="toolTitle">
        <ELink :href="toolInfo?.link">
          <span class="title">{{ toolInfo?.title }}</span>
        </ELink>
        <div class="badges">
          <div v-if="toolInfo?.source === 1" class="locationGw">国外</div>
          <div v-else-if="toolInfo?.source === 0" class="location">国内</div>
        </div>
        <div class="tool-actions" @click.stop>
          <a-button-group size="mini">
            <a-button @click="handleEdit">
              <template #icon>
                <icon-edit />
              </template>
            </a-button>
            <a-button @click="addShoucang">
              <template #icon>
                <icon-star-fill />
              </template>
            </a-button>
            <a-button status="danger" @click="handleDelete">
              <template #icon>
                <icon-delete />
              </template>
            </a-button>
          </a-button-group>
        </div>
      </div>
      <div class="toolDesc">
        <ELink :href="toolInfo?.link">
          {{ toolInfo?.desc }}
        </ELink>
      </div>
    </div>

    <!-- 编辑弹窗 -->
    <a-modal
      v-model:visible="editVisible"
      title="编辑工具"
      @ok="saveEdit"
      @cancel="cancelEdit"
    >
      <a-form :model="editForm" layout="vertical">
        <a-form-item label="标题">
          <a-input v-model="editForm.title" placeholder="请输入工具名称" />
        </a-form-item>
        <a-form-item label="描述">
          <a-textarea v-model="editForm.desc" placeholder="请输入工具描述" />
        </a-form-item>
        <a-form-item label="链接">
          <a-input v-model="editForm.link" placeholder="请输入工具链接" />
        </a-form-item>
        <a-form-item label="图标">
          <a-input v-model="editForm.icon" placeholder="请输入图标链接" />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
  import { ref, reactive, watch } from 'vue';
  import { Message, Modal } from '@arco-design/web-vue';
  import { setCategory, fetchSourceData } from '@/api/toolList';
  import CategoryTool from '@/model/CategoryTool';
  import ELink from '@/views/workplace/components/Link.vue';
  import deepClone from '@/api/lodashs';

  const emit = defineEmits(['refresh']);

  interface ToolInfo extends CategoryTool {
    id?: string;
    title: string;
    desc: string;
    link: string;
    icon: string;
    source: number;
  }

  const props = defineProps<{
    toolInfo: ToolInfo;
    categoryIndex: number;
    groupIndex: number;
    dataSource?: any;
    bgColor?: string;
  }>();

  // 获取默认图标文本
  function getDefaultIconText(title: string | undefined): string {
    if (!title) return '?';
    const firstChar = title.trim().charAt(0);
    // 如果是英文，返回大写
    if (/[a-zA-Z]/.test(firstChar)) {
      return firstChar.toUpperCase();
    }
    // 如果是中文或其他字符，直接返回
    return firstChar;
  }

  // 默认背景色数组
  const defaultColors = [
    '#3c6eff',
    '#f53f3f',
    '#7bc616',
    '#ff7d00',
    '#9855ff',
    '#00b42a',
    '#165dff',
    '#ff4a1a',
    '#eb0aa4',
    '#7816ff',
    '#00c2c7',
    '#ff9a2e',
  ];

  // 根据标题生成固定的背景色
  function getBackgroundColor(title: string | undefined): string {
    if (!title) return defaultColors[0];
    // 使用字符串的 charCode 之和来确定颜色索引，这样同样的标题会得到同样的颜色
    const sum = title
      .split('')
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return defaultColors[sum % defaultColors.length];
  }

  // 确保 toolInfo 存在后再复制
  const toolInfo = reactive<ToolInfo>(
    props.toolInfo
      ? deepClone(props.toolInfo)
      : {
          id: '',
          title: '',
          desc: '',
          link: '',
          icon: '',
          source: 0,
          iconTextBackgroundColor: '#3c6eff',
        }
  );

  // 安全地设置精简ICON
  const iconText = ref(getDefaultIconText(props.toolInfo?.title));

  // 修改图片错误处理逻辑
  const imgError = ref(false);

  function switchIconText() {
    console.log(toolInfo?.title || '', 'Icon加载失败,已动态生成Icon');
    imgError.value = true;
  }

  // 监听 toolInfo 变化时重置图片状态
  watch(
    () => props.toolInfo,
    (newVal) => {
      if (newVal) {
        Object.assign(toolInfo, deepClone(newVal));
        // 更新图标文本
        iconText.value = getDefaultIconText(newVal.title);
        // 重置图片错误状态，根据是否有图标链接来决定初始状态
        imgError.value = !newVal.icon;
      }
    },
    { deep: true }
  );

  const editVisible = ref(false);
  const editForm = reactive({
    title: '',
    desc: '',
    link: '',
    icon: '',
  });

  // 打开工具链接
  const openTool = () => {
    if (toolInfo?.link) {
      window.open(toolInfo.link);
    }
  };

  // 编辑工具
  const handleEdit = () => {
    editForm.title = toolInfo?.title || '';
    editForm.desc = toolInfo?.desc || '';
    editForm.link = toolInfo?.link || '';
    editForm.icon = toolInfo?.icon || '';
    editVisible.value = true;
  };

  // 保存编辑
  const saveEdit = () => {
    const sourceData = fetchSourceData();
    const toolGroup =
      sourceData.categories[props.categoryIndex]?.toolList[props.groupIndex];
    if (!toolGroup) return;

    const tool = toolGroup.toolList?.find((t: any) => {
      return (
        t.title === props.toolInfo?.title && t.link === props.toolInfo?.link
      );
    });

    if (tool) {
      tool.title = editForm.title;
      tool.desc = editForm.desc;
      tool.link = editForm.link;
      tool.icon = editForm.icon;

      // 更新本地数据
      Object.assign(toolInfo, deepClone(tool));

      setCategory(sourceData.categories);
      Message.success('保存成功');
      editVisible.value = false;
    }
  };

  // 取消编辑
  const cancelEdit = () => {
    editVisible.value = false;
  };

  const addShoucang = () => {
    const sourceData = fetchSourceData();
    // 获取当前分类
    const category = sourceData.categories[props.categoryIndex];
    if (!category) return;

    // 获取当前工具组
    const toolGroup = category.toolList[props.groupIndex];
    if (!toolGroup) return;

    // 在工具组中查找并删除工具
    const index = toolGroup.toolList.findIndex((t: any) => {
      return (
        t.title === props.toolInfo?.title && t.link === props.toolInfo?.link
      );
    });

    const tl = toolGroup.toolList[index];

    sourceData.categories.forEach((cate) => {
      if (cate.categoryName === '常用') {
        // 如果有数据取第一个，没有数据就新建一个
        if (!cate.toolList.length) {
          cate.toolList.push({
            toolGroupName: '常用',
            toolList: [],
          });
        }
        const categoryToolGroup = cate.toolList[0];
        categoryToolGroup.toolList.push(tl);
      }
    });

    setCategory(sourceData.categories);
    Message.success('收藏成功');
    // 触发父组件更新
    emit('refresh');
  };

  // 删除工具
  const handleDelete = () => {
    Modal.confirm({
      title: '确认删除',
      content: '确定要删除这个工具吗？',
      onOk: () => {
        const sourceData = fetchSourceData();
        // 获取当前分类
        const category = sourceData.categories[props.categoryIndex];
        if (!category) return;

        // 获取当前工具组
        const toolGroup = category.toolList[props.groupIndex];
        if (!toolGroup) return;

        // 在工具组中查找并删除工具
        const index = toolGroup.toolList.findIndex((t: any) => {
          return (
            t.title === props.toolInfo?.title && t.link === props.toolInfo?.link
          );
        });

        if (index > -1) {
          toolGroup.toolList.splice(index, 1);
          setCategory(sourceData.categories);
          Message.success('删除成功');
          // 触发父组件更新
          emit('refresh');
        }
      },
    });
  };
</script>

<style lang="less" scoped>
  .toolCard {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    background: white;
    padding: 12px 16px;
    border-radius: 12px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
    transition: all 0.3s ease;
    gap: 16px;
    text-align: left;
    border: 1px solid rgba(0, 0, 0, 0.06);
    backdrop-filter: blur(8px);
    background: rgba(255, 255, 255, 0.9);
  }

  .toolIcon {
    flex-shrink: 0;
    color: #504f4f;
    padding-top: 4px;
    transition: transform 0.3s ease;
  }

  .tool-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-width: 0;
  }

  .toolTitle {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 8px;
    flex-wrap: nowrap;
  }

  .title {
    flex: 1;
    min-width: 0;
    font-size: 16px;
    font-weight: 600;
    color: #2b2b2b;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: color 0.3s ease;
  }

  .badges {
    display: flex;
    gap: 4px;
    flex-shrink: 0;
  }

  .location {
    background: linear-gradient(45deg, #e8f3ff, #f0f7ff);
    display: inline-block;
    transform: scale(0.8);
    font-size: 12px;
    color: #4080ff;
    padding: 0 4px;
    border-radius: 4px;
    white-space: nowrap;
    border: 1px solid rgba(64, 128, 255, 0.1);
  }

  .locationGw {
    background: linear-gradient(45deg, #fff0f0, #fff5f5);
    display: inline-block;
    transform: scale(0.8);
    font-size: 12px;
    color: #f85a5a;
    padding: 0 4px;
    border-radius: 4px;
    white-space: nowrap;
    border: 1px solid rgba(248, 90, 90, 0.1);
  }

  .toolDesc {
    overflow: hidden;
    line-height: 20px;
    height: 20px;
    font-size: 13px;
    letter-spacing: 0.5px;
    color: #666;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-right: 8px;
    transition: color 0.3s ease;
  }

  .tool-actions {
    opacity: 0;
    transition: all 0.3s ease;
    flex-shrink: 0;
    margin-left: 4px;
  }

  .toolCard:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
    border-color: rgba(0, 0, 0, 0.08);

    .tool-actions {
      opacity: 1;
    }

    .toolIcon {
      transform: scale(1.05);
    }

    .title {
      color: #4080ff;
    }

    .toolDesc {
      color: #444;
    }
  }

  :deep(.arco-avatar) {
    background: linear-gradient(135deg, #fafafa, #ffffff);
    color: #9c9c9c;
    border: 1px solid rgba(0, 0, 0, 0.06);
    transition: all 0.3s ease;
  }

  :deep(.arco-btn) {
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
</style>
