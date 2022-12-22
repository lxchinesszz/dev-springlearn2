<template>
  <div class="tableWrapper">
    <a-card :bordered="onlyRead" :style="{ width: '100%' }">
      <a-card-grid
        v-for="(_, index) in categories"
        :key="index"
        :hoverable="index % 2 === 0"
        :style="{ width: '25%', height: '25%' }"
      >
        <a-card class="card" :title="_.categoryName" :bordered="onlyRead">
          <template #extra>
            <a-button shape="circle" :disabled="!onlyRead" @click="addTool(_)">
              <icon-plus />
            </a-button>
          </template>
          <a-grid :cols="2" :col-gap="12" :row-gap="16" class="grid-demo-grid">
            <a-grid-item
              v-for="(toolGroup, index) of _.toolList"
              :key="index"
              style="cursor: pointer"
              class="demo-item"
              @click="editorTool(toolGroup)"
            >
              <div class="toolGroupWrapper">
                <div> <icon-edit /></div>
                <div style="flex-grow: 2"> {{ toolGroup.toolGroupName }}</div>
                <div><icon-close /></div>
              </div>
            </a-grid-item>
          </a-grid>
          <!--          <a-space wrap>-->
          <!--            <template #split>-->
          <!--              <a-divider direction="vertical" />-->
          <!--            </template>-->
          <!--            <a-row>-->
          <!--              <a-col-->
          <!--                v-for="(toolGroup, index) of _.toolList"-->
          <!--                :key="index"-->
          <!--                :span="12"-->
          <!--              >-->
          <!--                <a-tag :closable="onlyRead" size="large">-->
          <!--                  <template #icon>-->
          <!--                    <div style="cursor: pointer" @click="editorTool(toolGroup)">-->
          <!--                      <icon-edit />-->
          <!--                    </div>-->
          <!--                  </template>-->
          <!--                  {{ toolGroup.toolGroupName }}</a-tag-->
          <!--                >-->
          <!--              </a-col>-->
          <!--            </a-row>-->
          <!--          </a-space>-->
        </a-card>
      </a-card-grid>
    </a-card>
  </div>
  <a-modal
    v-model:visible="visibleSetting"
    :closable="true"
    title-align="center"
    width="60vw"
    draggable
    @ok="handleOk"
  >
    <template v-if="!onlyRead" #title>
      <icon-interaction /> {{ currentEditorCategoryTitle }}
    </template>
    <template v-else #title>
      <div style="width: 150px">
        <a-input
          v-model="currentEditorCategoryTitle"
          :max-length="6"
          show-word-limit
        />
      </div>
    </template>
    <div v-if="!onlyRead" class="tableWrapper">
      <a-table
        column-resizable
        :bordered="{ cell: true }"
        :columns="toolGroupColumns"
        :data="currentEditorCategoryToolList"
        :pagination="false"
        hoverable
        stripe
        table-layout-fixed
      >
      </a-table>
    </div>
    <div v-else class="tableWrapper">
      <a-table
        column-resizable
        :bordered="{ cell: true }"
        :columns="toolGroupColumns"
        :data="currentEditorCategoryToolList"
        :pagination="false"
        hoverable
        stripe
        table-layout-fixed
      >
        <template #title="{ rowIndex }">
          <a-input
            v-model="currentEditorCategoryToolList[rowIndex].title"
            :max-length="6"
            show-word-limit
          />
        </template>
        <template #desc="{ rowIndex }">
          <a-input
            v-model="currentEditorCategoryToolList[rowIndex].desc"
            placeholder="https://json.cn"
          >
            <template #prefix>
              <icon-public />
            </template>
          </a-input>
        </template>
        <template #link="{ rowIndex }">
          <a-input v-model="currentEditorCategoryToolList[rowIndex].link">
          </a-input>
        </template>
        <template #icon="{ rowIndex }">
          <a-input v-model="currentEditorCategoryToolList[rowIndex].icon">
          </a-input>
        </template>
        <template #source="{ rowIndex }">
          <a-switch>
            <template #checked>
              {{ currentEditorCategoryToolList[rowIndex].source }}
            </template>
            <template #unchecked>
              OFF
              {{ currentEditorCategoryToolList[rowIndex].source }}
            </template>
          </a-switch>
        </template>
      </a-table>
    </div>
  </a-modal>
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
  import { defineComponent, reactive, ref, h } from 'vue';
  import { IconFaceSmileFill } from '@arco-design/web-vue/es/icon';
  import { Message } from '@arco-design/web-vue';
  import CategoryModel from '@/model/CategoryModel';
  import CategoryToolGroup from '@/model/CategoryToolGroup';
  import CategoryTool from '@/model/CategoryTool';
  import { clearArray } from '@/api/lodashs';

  export default defineComponent({
    name: 'CategoryToolTable',
    props: {
      onlyRead: {
        type: Boolean,
        default: false,
      },
      categories: Array<CategoryModel>,
      tableData: {
        default: [
          {
            name: '配色',
          },
          {
            name: '配色',
          },
          {
            name: '配色',
          },
          {
            name: '配色',
          },
          {
            name: '配色',
          },
          {
            name: '配色',
          },
        ],
      },
    },
    setup(props) {
      const toolGroupColumns = ref([
        {
          title: '工具名',
          dataIndex: 'title',
          width: '200',
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
      const shortcutData = reactive(props.tableData);
      const handleOk = () => {
        visibleSetting.value = false;
      };
      const custom = ['gray', 'orangered', 'blue', 'arcoblue', 'gray', 'blue'];

      const currentEditorCategoryTitle = ref(' s');
      let currentEditorCategory: CategoryToolGroup | undefined =
        reactive<CategoryToolGroup>(null);
      const currentEditorCategoryToolList: Array<CategoryTool> = reactive([]);
      const editorTool = (toolGroup: CategoryToolGroup) => {
        console.log(`toolGroup:}`, toolGroup);
        currentEditorCategoryTitle.value = toolGroup.toolGroupName;
        visibleSetting.value = true;
        currentEditorCategory = toolGroup;
        // 清空数组
        clearArray(currentEditorCategoryToolList);
        currentEditorCategoryToolList.push(...toolGroup.toolList);
        if (currentEditorCategoryToolList.length < 6) {
          // eslint-disable-next-line no-plusplus
          for (let i = 0; i < 6 - toolGroup.toolList.length; i++) {
            currentEditorCategoryToolList.push({
              icon: '',
              title: '自定义',
              desc: '',
              link: '',
              source: 1,
            });
          }
        }
        console.log(
          `currentEditorCategoryToolList:`,
          currentEditorCategoryToolList
        );
      };
      const newToolGroupName = ref('');
      const addToolGroupVisible = ref(false);
      let currentCategory: CategoryModel = reactive({});
      const addTool = (category: any) => {
        clearArray(currentEditorCategoryToolList);
        if (category.toolList.length >= 6) {
          Message.info({
            content:
              '为了您有更好的用户体检,我们强烈建议你最多只保留 6 个工具分类',
            icon: () => h(IconFaceSmileFill),
          });
        } else {
          currentCategory = category;
          addToolGroupVisible.value = true;
        }
      };
      const addToolGroupAction = () => {
        currentCategory.toolList.push({
          toolGroupName: newToolGroupName.value,
          toolList: [
            {
              icon: '',
              title: '',
              desc: '',
              link: '',
              source: 1,
            },
          ],
        });
        addToolGroupVisible.value = false;
      };
      return {
        addToolGroupAction,
        newToolGroupName,
        addToolGroupVisible,
        currentEditorCategoryToolList,
        currentEditorCategory,
        currentEditorCategoryTitle,
        toolGroupColumns,
        addTool,
        editorTool,
        custom,
        handleOk,
        visibleSetting,
        shortcutData,
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
    background-color: rgb(var(--arcoblue-6), 0.5);
  }
  .grid-demo-grid .demo-item:nth-child(2n + 1) {
    background-color: rgb(var(--arcoblue-5), 0.7);
  }
</style>
