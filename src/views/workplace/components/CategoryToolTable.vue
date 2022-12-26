<template>
  <div class="tableWrapper">
    <a-card :style="{ width: '100%', height: '100%' }">
      <draggable
        v-model="canEditorCategories"
        class="categoryDraggableWrapper"
        animation="300"
        ghost-class="ghost"
        chosen-class="chosen"
        @sort="dragCategory"
      >
        <template #item="{ element }">
          <a-card class="card" :style="{ width: '25%' }" :bordered="onlyRead">
            <template #title>
              <a-input
                v-model="element.categoryName"
                :style="{ width: '120px' }"
                placeholder="分类名称"
                :disabled="!onlyRead"
                :max-length="4"
                show-word-limit
              />
            </template>
            <template #extra>
              <a-button
                shape="circle"
                :disabled="!onlyRead"
                @click="addTool(element)"
              >
                <icon-plus />
              </a-button>
            </template>
            <a-grid
              :cols="2"
              :col-gap="12"
              :row-gap="16"
              class="grid-demo-grid"
            >
              <a-grid-item
                v-for="(toolGroup, toolGroupIdx) of element.toolList"
                :key="toolGroupIdx"
                class="demo-item"
              >
                <div class="toolGroupWrapper">
                  <div>
                    <icon-edit
                      style="cursor: pointer"
                      @click="
                        editorTool(
                          toolGroup,
                          element.categoryName,
                          toolGroupIdx
                        )
                      "
                  /></div>
                  <div
                    style="flex-grow: 2; cursor: pointer"
                    @click="
                      lookToolGroup(
                        toolGroup,
                        element.categoryName,
                        toolGroupIdx
                      )
                    "
                  >
                    {{ toolGroup.toolGroupName }}
                  </div>
                  <div
                    ><icon-close
                      style="cursor: pointer"
                      @click="delToolGroupAction(element, toolGroupIdx)"
                  /></div>
                </div>
              </a-grid-item>
            </a-grid>
          </a-card>
        </template>
      </draggable>
      <!--      </a-card-grid>-->
    </a-card>
  </div>
  <!--  展示工具-->
  <a-modal
    v-model:visible="visibleSetting"
    :closable="true"
    title-align="center"
    width="60vw"
    @ok="handleOk"
  >
    <template #title>
      <div style="width: 150px">
        <a-input
          v-model="
            canEditorCategories[dragCategoryIdx].toolList[dragToolGroupIdx]
              .toolGroupName
          "
          :max-length="6"
          show-word-limit
          :disabled="!onlyRead"
        />
      </div>
    </template>
    <div class="tableWrapper">
      <a-table
        column-resizable
        :bordered="{ cell: true }"
        :columns="toolGroupColumns"
        :data="
          canEditorCategories[dragCategoryIdx].toolList[dragToolGroupIdx]
            .toolList
        "
        :pagination="false"
        :draggable="{}"
        hoverable
        stripe
        table-layout-fixed
        @change="handleChange"
      >
        <template #title="{ rowIndex }">
          <a-input
            v-model="
              canEditorCategories[dragCategoryIdx].toolList[dragToolGroupIdx]
                .toolList[rowIndex].title
            "
            :max-length="6"
            :disabled="!onlyRead"
            placeholder="网站名"
            show-word-limit
          />
        </template>
        <template #desc="{ rowIndex }">
          <a-input
            v-model="
              canEditorCategories[dragCategoryIdx].toolList[dragToolGroupIdx]
                .toolList[rowIndex].desc
            "
            :disabled="!onlyRead"
            placeholder="网站介绍"
          >
            <template #prefix>
              <icon-public />
            </template>
          </a-input>
        </template>
        <template #link="{ rowIndex }">
          <a-input
            v-model="
              canEditorCategories[dragCategoryIdx].toolList[dragToolGroupIdx]
                .toolList[rowIndex].link
            "
            :disabled="!onlyRead"
            placeholder="网站名链接"
          >
          </a-input>
        </template>
        <template #icon="{ rowIndex }">
          <a-input
            v-model="
              canEditorCategories[dragCategoryIdx].toolList[dragToolGroupIdx]
                .toolList[rowIndex].icon
            "
            :disabled="!onlyRead"
            allow-clear
          >
          </a-input>
        </template>
        <template #source="{ rowIndex }">
          <a-switch
            v-model="
              canEditorCategories[dragCategoryIdx].toolList[dragToolGroupIdx]
                .toolList[rowIndex].source
            "
            :disabled="!onlyRead"
            :checked-value="1"
            checked-color="red"
            :unchecked-value="0"
          >
            <template #checked> 国外 </template>
            <template #unchecked>
              <span>国内</span>
            </template>
          </a-switch>
        </template>
      </a-table>
    </div>
  </a-modal>
  <!--  添加toolGroup-->
  <a-modal
    v-model:visible="addToolGroupVisible"
    :body-style="{ 'display': 'flex', 'justify-content': 'center' }"
    title="添加工具组"
    title-align="start"
    :footer="false"
    draggable
  >
    <a-input-search
      ref="categoryInputElement"
      v-model="newToolGroupName"
      size="large"
      placeholder="分栏不要太长哦"
      button-text="提交"
      search-button
      :max-length="6"
      show-word-limit
      @search="addToolGroupAction"
    />
  </a-modal>
</template>

<script lang="ts">
  // 抽屉工具，支持8个或者是4个
  import { defineComponent, h, reactive, ref } from 'vue';
  import { IconFaceSmileFill } from '@arco-design/web-vue/es/icon';
  import { Message, Modal } from '@arco-design/web-vue';
  import CategoryModel from '@/model/CategoryModel';
  import CategoryToolGroup from '@/model/CategoryToolGroup';
  import CategoryTool from '@/model/CategoryTool';
  import deepClone from '@/api/lodashs';
  import { setCategory } from '@/api/toolList';
  import draggable from 'vuedraggable';

  export default defineComponent({
    name: 'CategoryToolTable',
    components: { draggable },
    props: {
      onlyRead: {
        type: Boolean,
        default: false,
      },
      categories: Array<CategoryModel>,
    },
    setup(props) {
      // 分类模型
      const canEditorCategories: Array<CategoryModel> = reactive<
        Array<CategoryModel>
      >(deepClone(props.categories));
      const canEditor = () => {
        if (!props.onlyRead) {
          Message.info('当前为查看模式,要想修改请点击打开编辑模式');
        }
      };
      const toolGroupColumns = ref([
        {
          title: '工具名',
          dataIndex: 'title',
          slotName: 'title',
        },
        {
          title: '工具介绍',
          dataIndex: 'desc',
          slotName: 'desc',
        },
        {
          title: '访问地址',
          dataIndex: 'link',
          slotName: 'link',
        },
        {
          title: 'icon',
          dataIndex: 'icon',
          slotName: 'icon',
        },
        {
          title: '来源属性',
          dataIndex: 'source',
          slotName: 'source',
        },
      ]);
      const visibleSetting = ref(false);
      const handleOk = () => {
        visibleSetting.value = false;
      };
      const currentEditorCategoryTitle = ref('s');

      // 分组
      const dragCategoryIdx = ref(0);
      const dragToolGroupIdx = ref(0);
      /**
       * 点击查看
       * @param toolGroup
       * @param categoryIdx
       * @param toolGroupIdx
       */
      const lookToolGroup = (
        toolGroup: CategoryToolGroup,
        categoryIdx: string,
        toolGroupIdx: number
      ) => {
        for (let i = 0; i < canEditorCategories.length; i += 1) {
          if (canEditorCategories[i].categoryName === categoryIdx) {
            dragCategoryIdx.value = i;
          }
        }
        dragToolGroupIdx.value = toolGroupIdx;
        console.log(`currentCategoryIdx`, dragCategoryIdx.value);
        console.log(`currentToolGroupIdx`, dragToolGroupIdx.value);
        // updateCurrentToolGroup(toolGroup);
        const toolGroupList =
          canEditorCategories[dragCategoryIdx.value].toolList[
            dragToolGroupIdx.value
          ];
        console.log(`toolGroupList`, toolGroupList);
        if (toolGroupList.toolList.length < 6) {
          // eslint-disable-next-line no-plusplus
          const add: number = 6 - toolGroupList.toolList.length;
          for (let i = 0; i < add; i += 1) {
            toolGroupList.toolList.push(
              new CategoryTool('快捷方式', '', '', '', '', 0)
            );
          }
        }
        visibleSetting.value = true;
      };

      /**
       * 编辑
       * @param toolGroup
       * @param categoryIdx
       * @param toolGroupIdx
       */
      const editorTool = (
        toolGroup: CategoryToolGroup,
        categoryIdx: string,
        toolGroupIdx: number
      ) => {
        canEditor();
        if (props.onlyRead) {
          lookToolGroup(toolGroup, categoryIdx, toolGroupIdx);
        }
      };
      const newToolGroupName = ref('');
      const addToolGroupVisible = ref(false);
      // 当前正在编辑的分类
      let currentCategory: CategoryModel = reactive<CategoryModel>(
        new CategoryModel('', [])
      );
      /**
       * 添加一个服务组
       * @param category
       */
      const addTool = (category: CategoryModel) => {
        canEditor();
        if (props.onlyRead) {
          if (category.toolList.length >= 6) {
            Message.info({
              content:
                '为了您有更好的用户体检,我们建议你最多只保留 6 个工具分类',
              icon: () => h(IconFaceSmileFill),
            });
          } else {
            currentCategory = category;
            addToolGroupVisible.value = true;
          }
        }
      };

      /**
       * 添加一个工具组
       * 并给工具组初始化6个位置
       *
       */
      const addToolGroupAction = () => {
        canEditor();
        if (props.onlyRead) {
          currentCategory.toolList.push({
            toolGroupName: deepClone(newToolGroupName.value),
            toolList: [
              new CategoryTool('', '', '', '', '', 0),
              new CategoryTool('', '', '', '', '', 0),
              new CategoryTool('', '', '', '', '', 0),
              new CategoryTool('', '', '', '', '', 0),
              new CategoryTool('', '', '', '', '', 0),
              new CategoryTool('', '', '', '', '', 0),
            ],
          });
          addToolGroupVisible.value = false;
          // 添加完成后,输入框置空,方便下次继续使用
          newToolGroupName.value = '';
        }
      };

      /**
       * 删除服务组
       * @param category
       * @param delIdx
       */
      const delToolGroupAction = (category: CategoryModel, delIdx: number) => {
        canEditor();
        if (props.onlyRead) {
          const categoryToolGroup = category.toolList[delIdx];
          Modal.error({
            title: `请确认你的操作`,
            content: `确认要删除工具组: 【${categoryToolGroup.toolGroupName}】 吗? 当前操作会导致数据丢失,建议你先做好数据备份。`,
            okText: '确认删除',
            cancelText: '我在想想',
            titleAlign: 'start',
            escToClose: true,
            onOk: () => {
              category.toolList.splice(delIdx, 1);
            },
          });
        }
      };
      const handleChange = (_data: CategoryTool[]) => {
        const toolGroupList =
          canEditorCategories[dragCategoryIdx.value].toolList[
            dragToolGroupIdx.value
          ];
        for (let i = 0; i < toolGroupList.toolList.length; i += 1) {
          toolGroupList.toolList[i] = _data[i];
        }
        console.log('排序后:', _data);
      };
      /**
       * 每个子方法提供一个这样的方法用于父组件调用
       */
      function saveAction(): Array<CategoryModel> {
        setCategory(canEditorCategories);
        return canEditorCategories;
      }

      /**
       * 处理分类的排序
       * @param e
       */
      function dragCategory(e) {
        canEditor();
        if (props.onlyRead) {
          // 老位置暂存一下;老位置替换成新元素;新元素替换成老元素
          const oldCategoryPosTemp = canEditorCategories[e.oldIndex];
          canEditorCategories[e.oldIndex] = canEditorCategories[e.newIndex];
          canEditorCategories[e.newIndex] = oldCategoryPosTemp;
        }
      }
      return {
        handleChange,
        dragCategory,
        saveAction,
        delToolGroupAction,
        canEditorCategories,
        addToolGroupAction,
        newToolGroupName,
        addToolGroupVisible,
        currentEditorCategoryTitle,
        toolGroupColumns,
        addTool,
        editorTool,
        lookToolGroup,
        handleOk,
        visibleSetting,
        dragToolGroupIdx,
        dragCategoryIdx,
      };
    },
  });
</script>

<style lang="less" scoped>
  a,
  a:active,
  a:visited,
  a:link,
  a:focus {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
    outline: none;
    background: none;
    text-decoration: none;
    color: #5f6266;
  }

  a:hover {
    color: cornflowerblue;
  }
  .tableWrapper {
    height: 400px;
  }
  .card {
    height: 180px;
  }
  .toolGroupWrapper {
    display: flex;
    justify-content: space-around;
    align-content: center;
    padding: 0 0.5rem;
    //padding-left: 1rem;
  }

  .demo-item {
    border-radius: 20px;
  }
  .grid-demo-grid .demo-item,
  .grid-demo-grid .demo-suffix {
    height: 24px;
    color: var(--color-white);
    text-align: center;
  }
  .grid-demo-grid .demo-item:nth-child(2n) {
    background-color: rgb(var(--arcoblue-6), 0.7);
  }
  .grid-demo-grid .demo-item:nth-child(2n + 1) {
    background-color: rgb(var(--arcoblue-6), 0.7);
  }
  :deep(.arco-input[disabled]) {
    -webkit-text-fill-color: #929396;
  }
  .categoryDraggableWrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .ghost {
    opacity: 0.4;
  }

  .chosen {
    color: #49b3ff;
    border: 20px rebeccapurple;
  }
</style>
