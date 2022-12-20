<template>
  <div class="tableWrapper">
    <a-card :bordered="onlyRead" :style="{ width: '100%' }">
      <a-card-grid
        v-for="(_, index) in categoryColumns"
        :key="index"
        :hoverable="index % 2 === 0"
        :style="{ width: '25%', height: '25%' }"
      >
        <a-card class="card-demo" :title="_.toolGroupName" :bordered="onlyRead">
          <template #extra>
            <a-button shape="circle" :disabled="!onlyRead" @click="addTool(_)">
              <icon-plus />
            </a-button>
          </template>
          <a-space wrap>
            <a-tag
              v-for="(info, index) of _.toolList"
              :key="index"
              color="red"
              :closable="onlyRead"
            >
              <template #icon>
                <div style="cursor: pointer" @click="editorTool(info)">
                  <icon-edit />
                </div>
              </template>
              {{ info.title }}</a-tag
            >
          </a-space>
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
      <a-input
        v-model="currentEditorCategoryTitle"
        :max-length="6"
        show-word-limit
      />
    </template>
    <div v-if="!onlyRead" class="tableWrapper">
      <a-table
        column-resizable
        :bordered="{ cell: true }"
        :columns="shortcutColumns"
        :data="shortcutData"
        :pagination="false"
        hoverable
        stripe
        table-layout-fixed
      >
        <template #openType="{ rowIndex }">
          <a-tag
            v-if="shortcutData[rowIndex].openType === '新的窗口'"
            color="#ffb400"
          >
            {{ shortcutData[rowIndex].openType }}
          </a-tag>
          <a-tag v-else color="#86909c">
            {{ shortcutData[rowIndex].openType }}
          </a-tag>
        </template>
      </a-table>
    </div>
    <div v-else class="tableWrapper">
      <a-table
        column-resizable
        :bordered="{ cell: true }"
        :columns="shortcutColumns"
        :data="shortcutData"
        :pagination="false"
        hoverable
        stripe
        table-layout-fixed
      >
        <template #name="{ rowIndex }">
          <a-input
            v-model="shortcutData[rowIndex].name"
            :max-length="6"
            show-word-limit
          />
        </template>
        <template #href="{ rowIndex }">
          <a-input
            v-model="shortcutData[rowIndex].href"
            placeholder="https://json.cn"
          >
            <template #prefix>
              <icon-public />
            </template>
          </a-input>
        </template>
        <template #openType="{ rowIndex }">
          <a-input v-model="shortcutData[rowIndex].openType"> </a-input>
        </template>
        <template #source="{ rowIndex }">
          <a-select v-model="shortcutData[rowIndex].openType">
            <a-option v-for="index in sourceType" :key="index.code">
              {{ index.toolGroupName }}
            </a-option>
          </a-select>
        </template>
      </a-table>
    </div>
  </a-modal>
</template>

<script lang="ts">
  // 抽屉工具，支持8个或者是4个
  import { defineComponent, reactive, ref, h } from 'vue';
  import { IconFaceSmileFill } from '@arco-design/web-vue/es/icon';
  import { Message } from '@arco-design/web-vue';

  export default defineComponent({
    name: 'CategoryToolTable',
    props: {
      onlyRead: {
        type: Boolean,
        default: false,
      },
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
      const visibleSetting = ref(false);
      const shortcutData = reactive(props.tableData);
      const categoryColumns = ref([
        {
          toolGroupName: '常用',
          toolList: [
            {
              icon: '',
              title: '公众号小助手',
              desc: '51CTO',
              link: 'https://blog.51cto.com/springlearn',
            },
          ],
        },
        {
          toolGroupName: '后端',
          toolList: [
            {
              icon: '',
              title: '51CTO',
              desc: '51CTO',
              link: 'https://blog.51cto.com/springlearn',
            },
          ],
        },
        {
          toolGroupName: '前端',
          toolList: [
            {
              icon: '',
              title: '51CTO',
              desc: '51CTO',
              link: 'https://blog.51cto.com/springlearn',
            },
          ],
        },
        {
          toolGroupName: '设计师',
          toolList: [
            {
              icon: '',
              title: '51CTO',
              desc: '51CTO',
              link: 'https://blog.51cto.com/springlearn',
            },
          ],
        },
        {
          toolGroupName: '自媒体',
          toolList: [
            {
              icon: '',
              title: '51CTO',
              desc: '51CTO',
              link: 'https://blog.51cto.com/springlearn',
            },
          ],
        },
        {
          toolGroupName: '在线工具',
          toolList: [
            {
              icon: '',
              title: '51CTO',
              desc: '51CTO',
              link: 'https://blog.51cto.com/springlearn',
            },
          ],
        },
        {
          toolGroupName: '斗图',
          toolList: [
            {
              icon: '',
              title: '51CTO',
              desc: '51CTO',
              link: 'https://blog.51cto.com/springlearn',
            },
          ],
        },
        {
          toolGroupName: '',
          toolList: [
            {
              icon: '',
              title: '51CTO',
              desc: '51CTO',
              link: 'https://blog.51cto.com/springlearn',
            },
          ],
        },
      ]);
      const handleOk = () => {
        visibleSetting.value = false;
      };
      const custom = ['gray', 'orangered', 'blue', 'arcoblue', 'gray', 'blue'];

      const currentEditorCategoryTitle = ref('');
      const editorTool = (info: any) => {
        currentEditorCategoryTitle.value = info.title;
        visibleSetting.value = true;
      };
      const addTool = (category: any) => {
        if (category.toolList.length > 6) {
          Message.info({
            content:
              '为了您有更好的用户体检,我们强烈建议你最多只保留 6 个工具分类',
            icon: () => h(IconFaceSmileFill),
          });
        } else {
          visibleSetting.value = true;
        }
      };
      return {
        currentEditorCategoryTitle,
        addTool,
        editorTool,
        custom,
        categoryColumns,
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
</style>
