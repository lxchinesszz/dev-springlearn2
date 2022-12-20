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
      <template #slogan="{ rowIndex }">
        <a-input
          v-model="shortcutData[rowIndex].slogan"
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
  import SearchEngineModel from '@/views/workplace/components/model/SearchEngineModel';

  export default defineComponent({
    name: 'SearchEngineTable',
    props: {
      onlyRead: {
        type: Boolean,
        default: false,
      },
      tableData: {
        type: Array<SearchEngineModel>,
        default: [
          {
            name: 'Google',
            slogan: '使用谷歌试试手气吧',
            href: 'https://www.google.com/search?q=',
          },
          {
            name: 'Baidu',
            slogan: '百度一下,你就知道',
            href: 'https://www.baidu.com/s?ie=UTF-8&wd=',
          },
          {
            name: 'Github',
            slogan: '全球最大的代码仓库平台',
            href: 'https://github.com/search?q=',
          },
          {
            name: 'Oschina',
            slogan: 'OSCHINA - 中文开源技术交流社区_开源中国',
            href: 'https://www.oschina.net/search?q=',
          },
          {
            name: 'CSDN',
            slogan: 'CSDN - 专业开发者社区',
            href: 'https://so.csdn.net/so/search?q=',
          },
          {
            name: 'Bilibi',
            slogan: '哔哩哔哩 (゜-゜)つロ 干杯~-bilibili',
            href: 'https://search.bilibili.com/all?keyword=',
          },
        ],
      },
    },
    setup(props) {
      const shortcutData = reactive(props.tableData);
      const shortcutColumns = ref([
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
      return { shortcutData, shortcutColumns };
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
