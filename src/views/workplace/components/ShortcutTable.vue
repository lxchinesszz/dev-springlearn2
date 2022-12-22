<template>
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
          v-if="shortcutData[rowIndex].openType === '_blank'"
          color="#ffb400"
        >
          新的窗口
        </a-tag>
        <a-tag v-else color="#86909c"> 当前窗口 </a-tag>
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
          allow-clear
        />
      </template>
      <template #href="{ rowIndex }">
        <a-input
          v-model="shortcutData[rowIndex].href"
          placeholder="https://json.cn"
          allow-clear
        >
          <template #prefix>
            <icon-public />
          </template>
        </a-input>
      </template>
      <template #openType="{ rowIndex }">
        <a-select v-model="shortcutData[rowIndex].openType">
          <a-option
            v-for="index in openWindowType"
            :key="index.code"
            :label="index.name"
            :value="index.code"
          >
            {{ index.name }}
          </a-option>
        </a-select>
      </template>
    </a-table>
  </div>
</template>

<script lang="ts">
  // 抽屉工具，支持8个或者是4个
  import { defineComponent, reactive, ref } from 'vue';
  import ShortcutModel from '@/model/ShortcutModel';
  import deepClone from '@/api/lodashs';

  export default defineComponent({
    name: 'ShortcutTable',
    props: {
      onlyRead: {
        type: Boolean,
        default: false,
      },
      tableData: Array<ShortcutModel>,
    },
    setup(props) {
      const shortcutData: Array<ShortcutModel> = reactive<Array<ShortcutModel>>(
        deepClone(props.tableData)
      );
      const openWindowType = [
        {
          name: '新的窗口',
          code: '_blank',
        },
        {
          name: '当前窗口',
          code: '_target',
        },
      ];
      const shortcutColumns = ref([
        {
          title: '导航栏快捷方式',
          dataIndex: 'name',
          width: '200',
          slotName: 'name',
        },
        {
          title: '导航地址',
          dataIndex: 'href',
          slotName: 'href',
        },
        {
          title: '打开方式',
          dataIndex: 'openType',
          slotName: 'openType',
        },
      ]);
      /**
       * 每个子方法提供一个这样的方法用于父组件调用
       */
      function saveAction(): Array<ShortcutModel> {
        console.log('shortcutData', shortcutData);
        return shortcutData;
      }
      return { saveAction, shortcutData, openWindowType, shortcutColumns };
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
