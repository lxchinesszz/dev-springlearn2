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
        <a-select v-model="shortcutData[rowIndex].openType">
          <a-option v-for="index in openWindowType" :key="index.code">
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

  export default defineComponent({
    name: 'ShortcutTable',
    props: {
      onlyRead: {
        type: Boolean,
        default: false,
      },
      tableData: {
        default: [
          {
            name: '配色',
            hrefs: 'https://coolors.co/78bc61-c0c781-c59b76-e9806e-76bbb0',
            openType: '新的窗口',
          },
        ],
      },
    },
    setup(props) {
      const shortcutData = reactive(props.tableData);
      const openWindowType = [
        {
          name: '新的窗口',
          code: '_target',
        },
        {
          name: '当前窗口',
          code: '_blank',
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
      return { shortcutData, openWindowType, shortcutColumns };
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
