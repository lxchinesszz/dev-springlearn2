<template>
  <div id="header">
    <div class="navLogo">
      <img src="https://img.springlearn.cn/geek.png" alt="" class="navLogo" />
    </div>
    <div class="menuContainer">
      <div class="menuList">
        <ul class="nav">
          <li class="navItem" @click="$router.push({ path: '/todo/list' })"
            >将军令</li
          >
          <li class="navItem" @click="mousemoveTTL">时钟屏保</li>
          <li
            class="navItem"
            @click="
              openUrl('https://coolors.co/78bc61-c0c781-c59b76-e9806e-76bbb0')
            "
            >配色
          </li>
          <li @click="openUrl('https://www.json.cn/')">杰森</li>
          <li @click="openJson">杰森斯坦森</li>
          <li class="navItem" @click="openCalendar">日历</li>
          <li @click="addFavorite">收藏书签</li>
          <li @click="showSettingView">设置 <icon-code /></li>
        </ul>
      </div>
      <div class="userLogo animated swing"> </div>
    </div>

    <a-modal
      v-model:visible="visibleSetting"
      :closable="false"
      width="60vw"
      @ok="handleOk"
    >
      <a-tabs type="rounded">
        <template #extra>
          <a-space>
            <a-switch v-model="onlyRead">
              <template #checked-icon>
                <icon-pen />
              </template>
              <template #unchecked-icon>
                <icon-eye />
              </template>
              <template #checked> 读写 </template>
              <template #unchecked> 只读 </template>
            </a-switch>
            <a-button shape="round" size="small">导出配置</a-button>
          </a-space>
        </template>
        <a-tab-pane key="1">
          <template #title> <icon-calendar /> 快捷标签 </template>
          <ShortcutTable :only-read="onlyRead" :table-data="shortcutData" />
        </a-tab-pane>
        <a-tab-pane key="2">
          <template #title> <icon-search /> 搜索引擎 </template>
          <SearchEngineTable :only-read="onlyRead" />
        </a-tab-pane>
        <a-tab-pane key="3">
          <template #title> <icon-tool /> 分类工具栏 </template>
          <CategoryToolTable :only-read="onlyRead" />
        </a-tab-pane>
      </a-tabs>
    </a-modal>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, ref } from 'vue';
  import ShortcutTable from '@/views/workplace/components/ShortcutTable.vue';
  import SearchEngineTable from '@/views/workplace/components/SearchEngineTable.vue';
  import CategoryToolTable from '@/views/workplace/components/CategoryToolTable.vue';

  export default defineComponent({
    name: 'WorkerHeader',
    components: { ShortcutTable, SearchEngineTable, CategoryToolTable },
    props: ['dataSource'],
    emits: ['export', 'import'],
    setup() {
      const onlyRead = ref(true);
      const visibleSetting = ref(false);
      const showSettingView = () => {
        visibleSetting.value = true;
      };
      const handleOk = () => {
        visibleSetting.value = false;
      };
      const shortcutData = ref([
        {
          name: '配色',
          hrefs: 'https://coolors.co/78bc61-c0c781-c59b76-e9806e-76bbb0',
          openType: '新的窗口',
        },
        {
          name: '杰森1',
          hrefs: 'https://www.json.cn/',
          openType: '当前窗口',
        },
        {
          name: '配色2',
          hrefs: 'https://coolors.co/78bc61-c0c781-c59b76-e9806e-76bbb0',
          openType: '新的窗口',
        },
        {
          name: '杰森3',
          hrefs: 'https://www.json.cn/',
          openType: '当前窗口',
        },
        {
          name: '配色4',
          hrefs: 'https://coolors.co/78bc61-c0c781-c59b76-e9806e-76bbb0',
          openType: '新窗口',
        },
        {
          name: '杰森5',
          hrefs: 'https://www.json.cn/',
          openType: '当前窗口',
        },
        {
          name: '配色6',
          hrefs: 'https://coolors.co/78bc61-c0c781-c59b76-e9806e-76bbb0',
          openType: '新窗口',
        },
        {
          name: '杰森7',
          hrefs: 'https://www.json.cn/',
          openType: '当前窗口',
        },
      ]);

      return {
        shortcutData,
        visibleSetting,
        showSettingView,
        handleOk,
        onlyRead,
      };
    },
  });
</script>

<style scoped>
  #header {
    padding: 0;
    background: #cae7ef url(https://img.springlearn.cn/cloudtou.svg) repeat-y
      30% 22%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .menuContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .navLogo {
    margin-left: 8%;
    width: 120px;
    height: 3rem;
    background-image: url('https://img.springlearn.cn/geek.png');
  }

  .userLogo {
    margin-right: 25px;
  }

  .nav {
    display: flex;
    font-size: 1.2rem;
  }

  .nav li {
    list-style: none;
    padding: 0;
    margin: 0 15px;
    cursor: pointer;
  }
</style>
