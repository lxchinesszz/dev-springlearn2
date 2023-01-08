<template>
  <div class="tableWrapper">
    <a-table
      column-resizable
      :bordered="{ cell: true }"
      :columns="shortcutColumns"
      :data="shortcutData"
      :pagination="false"
      :draggable="{}"
      hoverable
      stripe
      table-layout-fixed
      @change="handleChange"
    >
      <template #name="{ rowIndex }">
        <a-input
          v-model="shortcutData[rowIndex].name"
          :max-length="6"
          show-word-limit
          allow-clear
          :disabled="!onlyRead"
        />
      </template>
      <template #href="{ rowIndex }">
        <a-input
          v-model="shortcutData[rowIndex].href"
          placeholder="https://json.cn"
          :disabled="!onlyRead"
          allow-clear
        >
          <template #prefix>
            <icon-public />
          </template>
        </a-input>
      </template>
      <template #openType="{ rowIndex }">
        <a-select
          v-model="shortcutData[rowIndex].openType"
          :disabled="!onlyRead"
        >
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
      <template #show="{ rowIndex }">
        <a-switch
          v-model="shortcutData[rowIndex].show"
          type="round"
          :disabled="!onlyRead"
        >
          <template #checked> 展示 </template>
          <template #unchecked> 隐藏 </template>
        </a-switch>
      </template>
    </a-table>
  </div>
</template>

<script lang="ts">
  // 抽屉工具，支持8个或者是4个
  import { defineComponent, reactive, ref } from 'vue';
  import ShortcutModel from '@/model/ShortcutModel';
  import deepClone from '@/api/lodashs';
  import { setShortcut } from '@/api/toolList';

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

      const handleChange = (_data: ShortcutModel[]) => {
        for (let i = 0; i < shortcutData.length; i += 1) {
          shortcutData[i] = _data[i];
        }
      };
      const openWindowType = [
        {
          name: '新的窗口',
          code: '_blank',
        },
        {
          name: '当前窗口',
          code: '_self',
        },
      ];
      const shortcutColumns = ref([
        {
          title: '导航栏快捷方式',
          dataIndex: 'name',
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
        {
          title: '操作',
          dataIndex: 'show',
          slotName: 'show',
          width: 100,
        },
      ]);
      /**
       * 每个子方法提供一个这样的方法用于父组件调用
       */
      function saveAction(): Array<ShortcutModel> {
        setShortcut(shortcutData);
        return shortcutData;
      }
      return {
        handleChange,
        saveAction,
        shortcutData,
        openWindowType,
        shortcutColumns,
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
  :deep(.arco-input[disabled]) {
    -webkit-text-fill-color: #929396;
  }
</style>
