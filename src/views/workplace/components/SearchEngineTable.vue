<template>
  <div class="tableWrapper">
    <a-table
      column-resizable
      :bordered="{ cell: true }"
      :columns="columns"
      :data="canEditorTableData"
      :pagination="false"
      :draggable="{}"
      hoverable
      stripe
      table-layout-fixed
      @change="handleChange"
    >
      <template #name="{ rowIndex }">
        <a-input
          v-model="canEditorTableData[rowIndex].name"
          :max-length="6"
          :disabled="!onlyRead"
          show-word-limit
        />
      </template>
      <template #href="{ rowIndex }">
        <a-input
          v-model="canEditorTableData[rowIndex].href"
          :disabled="!onlyRead"
          placeholder="https://json.cn"
        >
          <template #prefix>
            <icon-public />
          </template>
        </a-input>
      </template>
      <template #slogan="{ rowIndex }">
        <a-input
          v-model="canEditorTableData[rowIndex].slogan"
          :max-length="{ length: 50, errorOnly: true }"
          :disabled="!onlyRead"
          allow-clear
          show-word-limit
        ></a-input>
      </template>
    </a-table>
  </div>
</template>

<script lang="ts">
  // 抽屉工具，支持8个或者是4个
  import { defineComponent, reactive, ref } from 'vue';
  import SearchEngineModel from '@/model/SearchEngineModel';
  import deepClone from '@/api/lodashs';
  import { setSearchEngine } from '@/api/toolList';
  import ShortcutModel from '@/model/ShortcutModel';

  export default defineComponent({
    name: 'SearchEngineTable',
    props: {
      onlyRead: {
        type: Boolean,
        default: false,
      },
      tableData: Array<SearchEngineModel>,
    },
    setup(props) {
      // 可编辑数据
      const canEditorTableData: Array<SearchEngineModel> = reactive<
        Array<SearchEngineModel>
      >(deepClone(props.tableData));
      const columns = ref([
        {
          title: '搜索引擎',
          dataIndex: 'name',
          width: '200',
          slotName: 'name',
        },
        {
          title: '搜索地址',
          dataIndex: 'href',
          slotName: 'href',
        },
        {
          title: 'slogan',
          dataIndex: 'slogan',
          slotName: 'slogan',
        },
      ]);
      /**
       * 每个子方法提供一个这样的方法用于父组件调用
       */
      function saveAction(): Array<SearchEngineModel> {
        setSearchEngine(canEditorTableData);
        return canEditorTableData;
      }
      const handleChange = (_data: SearchEngineModel[]) => {
        for (let i = 0; i < canEditorTableData.length; i += 1) {
          canEditorTableData[i] = _data[i];
        }
      };
      return { handleChange, saveAction, canEditorTableData, columns };
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
  :deep(.arco-input[disabled]) {
    -webkit-text-fill-color: #929396;
  }
</style>
