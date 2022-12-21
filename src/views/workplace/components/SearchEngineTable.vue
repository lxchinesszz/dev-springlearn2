<template>
  <div v-if="!onlyRead" class="tableWrapper">
    <a-table
      column-resizable
      :bordered="{ cell: true }"
      :columns="columns"
      :data="tableData"
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
      :columns="columns"
      :data="canEditorTableData"
      :pagination="false"
      hoverable
      stripe
      table-layout-fixed
    >
      <template #name="{ rowIndex }">
        <a-input
          v-model="canEditorTableData[rowIndex].name"
          :max-length="6"
          show-word-limit
        />
      </template>
      <template #href="{ rowIndex }">
        <a-input
          v-model="canEditorTableData[rowIndex].href"
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
      const canEditorTableData = reactive(deepClone(props.tableData));
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
      return { canEditorTableData, columns };
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
