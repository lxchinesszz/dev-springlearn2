<template>
  <div id="header" :style="dataSource.theme.navBarBackgroundCss">
    <div class="headerLeft">
      <img src="https://img.springlearn.cn/geek.png" alt="" class="navLogo" />
    </div>
    <div class="menuContainer">
      <a-menu mode="horizontal" class="menuContainer">
        <a-menu-item
          v-for="(_, index) in dataSource.shortcut"
          :key="index + ''"
          @click="openUrl(_.href, _.openType)"
        >
          {{ _.name }}
        </a-menu-item>
        <a-sub-menu key="2">
          <template #icon>
            <Icon-Font type="icon-kaifa1"></Icon-Font>
          </template>
          <template #title>功能设置</template>
          <a-menu-item-group title="功能">
            <a-menu-item>
              <a-menu-item @click="openCalendarView">日历</a-menu-item>
            </a-menu-item>
          </a-menu-item-group>
          <a-menu-item-group title="主题设置">
            <a-menu-item>
              <a-menu-item disabled> 小组件 </a-menu-item>
            </a-menu-item>
            <a-menu-item>
              <a-menu-item @click="showSettingView"> 设置 </a-menu-item>
            </a-menu-item>
          </a-menu-item-group>
        </a-sub-menu>
      </a-menu>
    </div>
    <!--    主体设置-->
    <a-modal
      v-model:visible="visibleSetting"
      :closable="false"
      width="60vw"
      ok-text="保存并应用"
      body-class="themeSettingModal"
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
              <template #checked> 读写</template>
              <template #unchecked> 只读</template>
            </a-switch>
            <a-button
              shape="circle"
              size="small"
              class="importBtn"
              :disabled="!onlyRead"
              status="warning"
              type="primary"
              @click="copyConfig"
            >
              <a-tooltip content="点击复制配置文件到粘贴板">
                <icon-copy />
              </a-tooltip>
            </a-button>
            <a-button
              shape="circle"
              size="small"
              class="importBtn"
              type="primary"
              :disabled="!onlyRead"
              @click="uploadAction"
            >
              <a-tooltip content="点击导入配置文件">
                <icon-upload />
              </a-tooltip>
            </a-button>
            <a-button
              shape="circle"
              size="small"
              class="importBtn"
              status="danger"
              type="primary"
              :disabled="!onlyRead"
              @click="resetConfig"
            >
              <a-tooltip content="点击恢复到默认配置">
                <IconFont type="icon-shanchu" style="color: white"></IconFont>
              </a-tooltip>
            </a-button>
            <a-button
              shape="circle"
              size="small"
              class="importBtn"
              @click="releaseHistoryVisible = true"
            >
              <a-tooltip content="点击查看发布历史">
                <icon-font type="icon-lishibanben" />
              </a-tooltip>
            </a-button>
            <input
              id="upload"
              ref="uploadElementRef"
              type="file"
              name="upload"
              style="display: none"
              @change="uploadFileAction"
            />
          </a-space>
        </template>
        <a-tab-pane key="1">
          <template #title>
            <icon-calendar />
            快捷标签
          </template>
          <ShortcutTable
            ref="shortcutSetting"
            :only-read="onlyRead"
            :table-data="dataSource.shortcut"
          />
        </a-tab-pane>
        <a-tab-pane key="2">
          <template #title>
            <icon-search />
            搜索引擎
          </template>
          <SearchEngineTable
            ref="searchEngineSetting"
            :only-read="onlyRead"
            :table-data="dataSource.searchEngineList"
          />
        </a-tab-pane>
        <a-tab-pane key="3">
          <template #title>
            <icon-tool />
            分类工具栏
          </template>
          <CategoryToolTable
            ref="categorySetting"
            :only-read="onlyRead"
            :categories="dataSource.categories"
          />
        </a-tab-pane>
        <a-tab-pane key="4">
          <template #title>
            <icon-skin />
            样式动画
          </template>
          <ThemeSetting
            ref="themeSetting"
            :only-read="onlyRead"
            :theme="dataSource.theme"
          ></ThemeSetting>
        </a-tab-pane>
        <a-tab-pane key="5">
          <template #title>
            <!--            <Icon-Font type="icon-shop"></Icon-Font>-->
            <Icon-Font type="icon-chajian1"></Icon-Font>
            小组件
          </template>
          <WidgetPluginStore
            ref="widgetSetting"
            :only-read="onlyRead"
            :wps="dataSource.wps"
          ></WidgetPluginStore>
        </a-tab-pane>
      </a-tabs>
    </a-modal>

    <!--    日历弹窗-->
    <a-modal
      v-model:visible="calendarView"
      :footer="false"
      :closable="false"
      width="50vw"
      draggable
      esc-to-close
    >
      <template #title> 📅 一寸光阴一寸金 寸金难买寸光阴</template>
      <div style="height: auto; overflow: hidden">
        <baidu-calendar />
      </div>
    </a-modal>
    <!--    版本展示-->
    <a-drawer
      popup-container=".themeSettingModal"
      :visible="releaseHistoryVisible"
      hide-cancel
      :footer="false"
      width="50vw"
      @ok="releaseHistoryVisible = false"
      @cancel="releaseHistoryVisible = false"
    >
      <template #header>
        <span>
          <IconFont type="icon-huojian2"></IconFont>
          当前版本: v{{ lastVersion.version }}</span
        >
      </template>
      <a-timeline label-position="relative" reverse>
        <a-timeline-item
          v-for="(version, index) in rhv"
          :key="index"
          :dot-color="version.dotColor"
          :label="version.date"
        >
          v{{ version.version }}
          <a-typography-text
            v-for="(item, itemIndex) in version.items"
            :key="itemIndex"
            type="secondary"
            :style="{ fontSize: '12px', marginTop: '4px' }"
          >
            <br />
            {{ item }}
          </a-typography-text>
        </a-timeline-item>
      </a-timeline>
    </a-drawer>
  </div>
</template>

<script lang="ts">
  import { defineComponent, h, reactive, ref } from 'vue';
  import ShortcutTable from '@/views/workplace/components/ShortcutTable.vue';
  import SearchEngineTable from '@/views/workplace/components/SearchEngineTable.vue';
  import CategoryToolTable from '@/views/workplace/components/CategoryToolTable.vue';
  import ThemeSetting from '@/views/workplace/components/ThemeSetting.vue';
  import SettingModel from '@/model/SettingModel';
  import { Message, Modal } from '@arco-design/web-vue';
  import { IconFaceSmileFill } from '@arco-design/web-vue/es/icon';
  import { copyConfig, saveLocal, restLocalSourceData } from '@/api/toolList';
  import { readerAsync } from '@/api/lodashs';
  import releaseHistoryVersions from '@/api/version';
  import WidgetPluginStore from '@/views/workplace/components/WidgetPluginStore.vue';
  import _ from 'lodash';

  export default defineComponent({
    name: 'WorkerHeader',
    components: {
      ShortcutTable,
      SearchEngineTable,
      CategoryToolTable,
      ThemeSetting,
      WidgetPluginStore,
    },
    props: {
      dataSource: SettingModel,
    },
    emits: ['export', 'import', 'ds'],
    setup(props, ctx) {
      const releaseHistoryVisible = ref(false);
      const searchEngineSetting = ref(null);
      const shortcutSetting = ref(null);
      const themeSetting = ref(null);
      const widgetSetting = ref(null);
      const categorySetting = ref(null);
      const calendarView = ref(false);
      const onlyRead = ref(false);
      const visibleSetting = ref(false);
      const showSettingView = () => {
        visibleSetting.value = true;
      };
      const rhv = reactive(releaseHistoryVersions);
      const lastVersion = ref(
        _.sortBy(releaseHistoryVersions, (s) => s.date).reverse()[0]
      );
      console.log('当前版本 v', lastVersion.value.version);
      const applySetting = () => {
        Message.success({
          content: '你的配置已重新生成,正在应用中!',
        });

        setTimeout(() => {
          // 主题配置保存
          console.log(themeSetting.value?.saveAction());
          console.log(shortcutSetting.value?.saveAction());
          console.log(searchEngineSetting.value?.saveAction());
          console.log(categorySetting.value?.saveAction());
          console.log(widgetSetting.value?.saveAction());
          visibleSetting.value = false;
          window.location.reload();
        }, 100);
      };
      const openUrl = (url: string, openType = '_blank') => {
        console.log('openType', openType);
        console.log('openUrl', url, openType);
        if (url) {
          window.open(url, openType);
        }
      };
      const uploadElementRef = ref(null);
      const uploadAction = () => {
        uploadElementRef.value.dispatchEvent(new MouseEvent('click'));
      };
      const uploadFileAction = () => {
        const settingFile: File = uploadElementRef.value.files[0];
        readerAsync(settingFile, {
          callback(fileContent: any) {
            const sm: SettingModel = JSON.parse(fileContent);
            saveLocal(sm);
            Message.info({
              content: '你的配置已导出成功,正在应用中!',
              icon: () => h(IconFaceSmileFill),
              duration: 1000,
            });
            setTimeout(() => {
              visibleSetting.value = false;
              window.location.reload();
            }, 300);
          },
        });
      };
      const openCalendarView = () => {
        calendarView.value = true;
      };

      const switchDataSourceAction = () => {
        ctx.emit('ds');
      };

      const resetConfig = () => {
        Modal.error({
          title: `请确认你的操作`,
          content: `当前操作会重置数据,并恢复数据到初始化的默认配置,你确定要这么操作吗 ?`,
          okText: '确认删除',
          cancelText: '我在想想',
          titleAlign: 'start',
          escToClose: true,
          onOk: () => {
            restLocalSourceData();
            visibleSetting.value = false;
            window.location.reload();
          },
        });
      };

      // onMounted(() => {
      //   window.WIDGET = {
      //     CONFIG: {
      //       modules: '01234',
      //       background: '5',
      //       tmpColor: 'FFFFFF',
      //       tmpSize: '16',
      //       cityColor: 'FFFFFF',
      //       citySize: '16',
      //       aqiColor: 'FFFFFF',
      //       aqiSize: '16',
      //       weatherIconSize: '24',
      //       alertIconSize: '18',
      //       padding: '20px 10px 20px 10px',
      //       shadow: '0',
      //       language: 'auto',
      //       borderRadius: '5',
      //       fixed: 'false',
      //       vertical: 'top',
      //       horizontal: 'left',
      //       key: '1feda5073a844f6baa5adad4b611e84e',
      //     },
      //   };
      //   const script = document.createElement('script');
      //   script.type = 'text/javascript';
      //   script.src =
      //     'https://widget.qweather.net/simple/static/js/he-simple-common.js?v=2.0';
      //   document.getElementsByTagName('head')[0].appendChild(script);
      // });
      return {
        lastVersion,
        widgetSetting,
        resetConfig,
        switchDataSourceAction,
        categorySetting,
        uploadFileAction,
        uploadElementRef,
        uploadAction,
        copyConfig,
        searchEngineSetting,
        shortcutSetting,
        themeSetting,
        visibleSetting,
        showSettingView,
        handleOk: applySetting,
        releaseHistoryVisible,
        onlyRead,
        openUrl,
        calendarView,
        openCalendarView,
        rhv,
      };
    },
  });
</script>

<style scoped>
  :deep(.arco-menu-selected) {
    color: var(--color-text-2) !important;
  }
  :deep(.arco-menu-selected:active) {
    background-color: rgb(0 0 0 / 5%);
  }
  :deep(.arco-menu-item:hover) {
    background-color: rgb(0 0 0 / 5%);
  }
  :deep(.arco-menu-pop:hover) {
    background-color: rgb(0 0 0 / 5%);
  }
  :deep(.arco-menu-light) {
    background-color: rgb(0 0 0 / 0);
  }
  :deep(.arco-menu-item) {
    background-color: rgb(0 0 0 / 0);
  }
  :deep(.arco-menu-pop) {
    background-color: rgb(0 0 0 / 0);
  }
  :deep(.arco-modal-wrapper) {
    opacity: 0.01;
  }
  :deep(.op-calendar-pc-left) {
    border: none;
    padding: 0;
    box-shadow: none;
    border-radius: 0px;
  }

  :deep(.op-calendar-pc-right) {
    border: none;
    box-shadow: none;
    border-radius: 0px;
  }

  #header {
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-content: center;
    width: 100%;
  }

  .menuContainer {
    flex-grow: 1;
    text-align: right;
  }

  .headerLeft {
    flex-grow: 1;
  }
  .navLogo {
    margin-left: 8%;
    width: 120px;
    height: 3rem;
    /*background-image: url('https://img.springlearn.cn/geek.png');*/
  }

  .importBtn {
    min-width: 24px;
    height: 24px;
    border-radius: 25%;
  }
</style>
