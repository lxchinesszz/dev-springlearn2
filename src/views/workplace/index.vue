<template>
  <a-layout v-show="!theme.simplify">
    <a-layout-header id="header">
      <WorkerHeader ref="workHeaderRef"></WorkerHeader>
    </a-layout-header>
    <a-layout-content class="animated" :class="theme.windowAnimate">
      <Search
        id="search"
        :style="theme"
        :data-source="sourceData"
        :categories="categories"
        :search-list="searchList"
        @change-category="selectCategory"
      ></Search>
      <!--    工具流-->
      <div v-if="!commonPage" id="tool" class="toolContainerFlow">
        <a-grid
          style="width: 100%"
          :cols="{ xs: 1, sm: 2, md: 2, lg: 2, xl: 2, xxl: 2 }"
        >
          <a-grid-item
            v-for="(tool, index) in toolGroupData.toolList"
            :key="index"
            class="toolList"
          >
            <ToolDrawer
              :data-source="sourceData"
              :name="tool.toolGroupName"
              :tool-list="filterInvalidTool(tool.toolList)"
              :category-index="currentCategoryIndex"
              :group-index="index"
              @refresh="refreshTools"
            ></ToolDrawer>
          </a-grid-item>
        </a-grid>
      </div>
      <div v-else id="tool" class="toolContainerFlow">
        <a-grid
          style="width: 100%"
          v-for="(tool, index) in toolCommonGroupData.toolList"
          :cols="{ xs: 1, sm: 2, md: 6, lg: 6, xl: 6, xxl: 6 }"
          :key="index"
          class="toolList"
        >
          <a-grid-item
            v-for="(tl, index) in tool.toolList"
            :key="tl.link"
            class="tool-card"
            @click="handleToolClick(tl)"
          >
            <div class="tool-card__content">
              <div class="tool-card__icon">
                <img
                  v-if="tl.icon"
                  :src="tl.icon"
                  :alt="tl.title"
                  @error="tl.icon = undefined"
                />
                <a-avatar
                  v-else
                  :size="55"
                  shape="circle"
                  :style="{
                    backgroundColor: '#fbfbfb',
                    color: '#000000',
                    fontSize: '24px',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: 'none',
                  }"
                >
                  {{ tl.title ? tl.title.charAt(0).toUpperCase() : '?' }}
                </a-avatar>
              </div>
              <div class="tool-card__info" style="text-align: left">
                <h3 class="tool-card__title">{{ tl.title }}</h3>
                <p class="tool-card__desc">{{ tl.desc }}</p>
              </div>
              <div class="tool-card__delete" @click.stop="handleDelete(index)">
                <icon-delete />
              </div>
            </div>
          </a-grid-item>
        </a-grid>
      </div>
    </a-layout-content>
  </a-layout>

  <div
    v-if="theme.simplify"
    id="simplifyWrapper"
    class="animated"
    :class="theme.windowAnimate"
  >
    <div class="logoWrapper">
      <img
        src="https://img.springlearn.cn/geek.png"
        alt=""
        class="logoWrapper"
      />
    </div>
    <div class="themeSettingFloatWrapper">
      <a-trigger :trigger="['click', 'hover']" click-to-close position="top">
        <a-button shape="circle" @click="simpleThemeSetting">
          <icon-settings />
        </a-button>
        <template #content>
          <a-menu
            :style="{ marginBottom: '-4px' }"
            mode="popButton"
            :tooltip-props="{ position: 'left' }"
            show-collapse-button
          >
            <a-menu-item key="1" @click="showTheme">
              <template #icon>
                <icon-skin />
              </template>
              主题皮肤
            </a-menu-item>
          </a-menu>
        </template>
      </a-trigger>
      <!--      <a-affix :offset-top="80">-->
      <!--        -->
      <!--      </a-affix>-->
    </div>
    <Search
      id="search"
      :style="theme"
      :data-source="sourceData"
      input-offset="-30vh"
      :categories="categories"
      :search-list="searchList"
      @change-category="selectCategory"
    ></Search>
  </div>
</template>

<script lang="ts" setup>
  import WorkerHeader from '@/views/workplace/components/WorkerHeader.vue';
  import Search from '@/views/workplace/components/Search.vue';
  import ToolDrawer from '@/views/workplace/components/ToolDrawer.vue';
  import { onMounted, reactive, ref, provide } from 'vue';
  import {
    fetchSourceData,
    setCategory,
    isNewUser,
    saveLocal,
    fusePlugin,
    FusePlugin,
  } from '@/api/toolList';
  import deepClone from '@/api/lodashs';
  import CategoryModel from '@/model/CategoryModel';
  import SearchEngineModel from '@/model/SearchEngineModel';
  import SettingModel from '@/model/SettingModel';
  import Driver from 'driver.js'; // import driver.js
  import 'driver.js/dist/driver.min.css'; // import driver.js css
  import setps from '@/api/setps';
  import CategoryTool from '@/model/CategoryTool';
  import { device, Device } from '@/hooks/device';
  import { useRouter } from 'vue-router';
  import { useFavicon, useTitle } from '@vueuse/core';
  import { Message } from '@arco-design/web-vue';

  // 向子组件注入fuse数据
  provide<FusePlugin>('fuse', fusePlugin());
  const workHeaderRef = ref(null);
  // 元数据
  const sourceData: SettingModel = fetchSourceData();
  if (sourceData.theme.favicon) {
    const icon = useFavicon();
    icon.value = sourceData.theme.favicon;
  }
  if (sourceData.theme.webTitle) {
    const title = useTitle();
    title.value = sourceData.theme.webTitle;
  }
  const { theme } = sourceData;
  const categories: Array<CategoryModel> = deepClone(sourceData.categories);
  // 初始化数据
  const toolGroupData: CategoryModel = reactive(deepClone(categories[0]));

  const toolCommonGroupData: CategoryModel = reactive(deepClone(categories[0]));

  const searchList: Array<SearchEngineModel> = deepClone(
    sourceData.searchEngineList
  );

  // 添加当前分类索引的响应式变量
  const currentCategoryIndex = ref(0);

  const commonPage = ref(true);

  // 修改选择分类的方法
  function selectCategory(index: number) {
    currentCategoryIndex.value = index;
    toolGroupData.categoryName = categories[index].categoryName;
    if (toolGroupData.categoryName === '常用') {
      commonPage.value = true;
    } else {
      commonPage.value = false;
    }
    toolGroupData.toolList = categories[index].toolList;
  }

  function filterInvalidTool(tools: Array<CategoryTool>) {
    return tools.filter((t) => {
      if (t.title) {
        return true;
      }
      return false;
    });
  }

  function showTheme() {
    workHeaderRef.value.showThemeSwitch();
  }

  /**
   * 判断是否可以执行引导
   */
  function showTipsIfNeeded() {
    // 如果为空,说明是第一次访问
    if (isNewUser()) {
      const driver = new Driver({
        prevBtnText: '上一步',
        nextBtnText: '下一步',
        doneBtnText: '我知道了',
        closeBtnText: '关闭',
        allowClose: false,
        onReset: () => {
          // 获取默认数据保存到本地
          saveLocal(sourceData);
        },
      });
      driver.defineSteps(setps);
      driver.start();
    }
  }

  const simpleThemeSetting = () => {
    workHeaderRef.value.showSettingView();
  };

  // 刷新工具列表
  const refreshTools = () => {
    const newSourceData = fetchSourceData();
    toolCommonGroupData.toolList = newSourceData.categories[0].toolList;
    toolGroupData.toolList =
      newSourceData.categories[currentCategoryIndex.value].toolList;
  };

  const handleToolClick = (tool: CategoryTool) => {
    if (tool.link) {
      window.open(tool.link, '_blank');
    }
  };

  // 安全地设置精简ICON

  // 修改图片错误处理逻辑
  const imgError = ref(false);

  const handleDelete = (index) => {
    // 这里添加删除逻辑
    sourceData.categories.forEach((cate) => {
      if (cate.categoryName === '常用') {
        // 如果有数据取第一个，没有数据就新建一个
        cate.toolList.forEach((subCate) => {
          subCate.toolList.splice(index, 1);
        });
      }
    });
    setCategory(sourceData.categories);
    refreshTools();
    Message.success('保存成功');
  };

  onMounted(() => {
    const driverInfo: Device = device();
    console.log('当前设备信息:', driverInfo);
    if (driverInfo.mobile) {
      // 跳转手机端
      const router = useRouter();
      router.push('/mobile');
    } else if (!theme.simplify) {
      showTipsIfNeeded();
    }
  });
</script>

<style lang="less" scoped>
  #header {
    padding: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: auto;
    top: 0;
  }

  #search {
    width: 100vw;
    height: 50vh;
    z-index: 100;
  }

  .toolContainerFlow {
    width: 100vw;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    z-index: -1;
    position: relative;
  }

  .toolList {
    position: relative;
    height: auto;
    margin: 0.25vw;
  }

  .kl-mask-load {
    background-color: #373838;
    opacity: 0.4;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    transition: opacity 0.2s ease-in;
    display: grid;
    align-items: center;
    place-items: center;
    pointer-events: none;
  }

  .kl-mask-load.show {
    opacity: 1;
    pointer-events: auto;
    transition: opacity 0.2s ease-in;
  }

  .tipWrapper {
    text-align: left;
  }

  .tipCategoryWrapper {
    text-align: left;
  }

  #simplifyWrapper {
    #search {
      width: 100vw;
      height: 100vh;
      position: absolute;
    }

    width: 100vw;

    .themeSettingFloatWrapper {
      position: absolute;
      right: 10rem;
      top: 10rem;
      z-index: 1000;
    }
  }

  .logoWrapper {
    position: fixed;
    z-index: 10000;
    left: 5vw;
    width: 120px;
    height: 3rem;
  }

  .tool-card {
    background: #fff;
    border-radius: 8px;
    padding: 16px;
    margin: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);

      .tool-card__delete {
        opacity: 1;
      }
    }

    &__content {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    &__icon {
      width: 48px;
      height: 48px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 6px;
      }
    }

    &__info {
      flex: 1;
    }

    &__title {
      margin: 0 0 4px;
      font-size: 16px;
      font-weight: 500;
      color: #1d2129;
    }

    &__desc {
      margin: 0;
      font-size: 14px;
      color: #86909c;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    &__delete {
      position: absolute;
      top: 8px;
      right: 8px;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.05);
      cursor: pointer;
      opacity: 0;
      transition: all 0.3s ease;

      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
        color: #f53f3f;
      }
    }
  }
</style>
