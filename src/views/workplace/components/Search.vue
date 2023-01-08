<template>
  <div class="container" :style="style.searchBackgroundCss">
    <div class="frostedGlass" :class="style.frostedGlass ? 'glass' : ''">
      <div
        class="searchGroup animated"
        :style="{ marginTop: inputOffset }"
        :class="style.searchAnimate"
      >
        <div v-if="!style.hideSearchAroundText" id="searchTarget">
          <!--      查询源-->
          <div
            v-for="(scope, index) in categories"
            :key="index"
            :class="
              index === currentCategoryIndex
                ? 'searchTargetCard searchTargetCardHover'
                : 'searchTargetCard'
            "
            :style="style.searchTextCss"
            @click="clickCurrentCategoryIndex(index)"
            >{{ scope.categoryName }}
          </div>
          <!--        <div class="searchTargetCard" @click="handleClick"><icon-edit /></div>-->
        </div>
        <div id="searchBox">
          <div v-if="style.searchStyle === 'search-google'" style="width: 55vw">
            <SearchGoogle
              :placeholder="placeholder"
              @do-action="search"
              @change="changeFuseAction"
              @blur="fuseValue = ''"
            />
          </div>
          <div
            v-else-if="style.searchStyle === 'search-simple'"
            style="width: 55vw"
          >
            <SearchSimple
              :placeholder="placeholder"
              @do-action="search"
              @change="changeFuseAction"
            />
          </div>
          <div
            v-else-if="style.searchStyle === 'supper-search'"
            style="width: 55vw"
          >
            <SupperSearch
              :placeholder="placeholder"
              :theme="style"
              @do-action="search"
            />
          </div>
          <div v-else style="width: 55vw; margin-left: -20px">
            <SearchStandard
              :placeholder="placeholder"
              @do-action="search"
              @change="changeFuseAction"
            />
          </div>
        </div>
        <div v-if="style.fuzzySearch" id="fuseDiv">
          <FuseToolPanel :value="fuseValue"></FuseToolPanel>
        </div>
        <div v-if="!style.hideSearchAroundText" id="searchCard">
          <!--      查询源-->
          <div
            v-for="(scope, index) in searchCardList"
            :key="index"
            class="searchSourceCard"
            @click="clickCurrentSearchIndex(index)"
          >
            <div
              class="searchSource"
              :style="style.searchTextCss"
              :class="
                index === currentSearchCardIndex ? 'searchSourceActive' : ''
              "
              >{{ scope.name }}
            </div>
          </div>
          <!--        <div class="searchSourceCard" @click="handleAddSearch"-->
          <!--          ><icon-edit-->
          <!--        /></div>-->
        </div>
      </div>
      <div
        id="widgetWrapper"
        class="widgetWrapper animated"
        :class="style.searchAnimate"
      >
        <DraggableContainer :adsorb-parent="true">
          <Vue3DraggableResizable
            v-for="(wp, index) in wps"
            :key="index"
            :w="wp.w"
            :h="wp.h"
            :y="calculateY(wp.y)"
            :x="calculateX(wp.x)"
            parent=".widgetWrapper"
            class-name="dragWidgetPlugin"
            :draggable="wp.draggable"
            :lock-aspect-ratio="wp.lockRatio"
            @drag-end="dragEnd(wp, $event)"
            @resize-end="resize(wp, $event)"
          >
            <a-popconfirm
              content="检测到小组件位置发生了变化,请确认是否要保存当前的位置"
              type="info"
              popup-container="widgetCls"
              :disabled="!wp.tip"
              @ok="setWeightAndRef(wp)"
              @cancel="wp.tip = false"
            >
              <template #icon>
                <Icon-Font type="icon-yidong1" />
              </template>
              <component :is="wp.name" class="widgetCls"></component>
            </a-popconfirm>
          </Vue3DraggableResizable>
        </DraggableContainer>
      </div>
    </div>
    <a-modal
      v-model:visible="visible"
      :body-style="{ 'display': 'flex', 'justify-content': 'center' }"
      title="添加分组"
      title-align="start"
      :footer="false"
      draggable
      @cancel="handleCancel"
    >
      <a-input-search
        ref="categoryInputElement"
        v-model="form.name"
        size="large"
        placeholder="分栏不要太长哦"
        button-text="提交"
        search-button
        :max-length="6"
        show-word-limit
      />
    </a-modal>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, reactive } from 'vue';
  import CategoryModel from '@/model/CategoryModel';
  import SearchEngineModel from '@/model/SearchEngineModel';
  import SearchGoogle from '@/views/workplace/components/search/SearchGoogle.vue';
  import SearchStandard from '@/views/workplace/components/search/SearchStandard.vue';
  import SearchSimple from '@/views/workplace/components/search/SearchSimple.vue';
  import SupperSearch from '@/views/workplace/components/search/SupperSearch.vue';
  import ThemeModel from '@/model/ThemeModel';
  import { openWindow, setWeight } from '@/api/toolList';
  import defaultPlaceholder from '@/api/placeholder';
  import FuseToolPanel from '@/views/workplace/components/widget/FuseToolPanel.vue';
  import Vue3DraggableResizable, {
    DraggableContainer,
  } from 'vue3-draggable-resizable';
  import 'vue3-draggable-resizable/dist/Vue3DraggableResizable.css';
  import WidgetPlugin from '@/model/WidgetPlugin';
  import SettingModel from '@/model/SettingModel';
  import Gushici from '@/views/workplace/components/widget/Gushici.vue';
  import EyeDropper from '@/views/workplace/components/widget/EyeDropper.vue';
  import NowTime from '@/views/workplace/components/widget/NowTime.vue';
  import Wangyiyun from '@/views/workplace/components/widget/Wangyiyun.vue';
  import { Device, device } from '@/hooks/device';
  import { useWpsStore } from '@/store';
  import _ from 'lodash';
  import Test2 from '@/views/workplace/components/widget/Test2.vue';

  export default defineComponent({
    name: 'Search',
    components: {
      SearchGoogle,
      SearchStandard,
      SearchSimple,
      SupperSearch,
      FuseToolPanel,
      Vue3DraggableResizable,
      Gushici,
      DraggableContainer,
      EyeDropper,
      NowTime,
      Wangyiyun,
      Test2,
    },
    props: {
      categories: Array<CategoryModel>,
      searchList: Array<SearchEngineModel>,
      style: ThemeModel,
      inputOffset: String,
      dataSource: SettingModel,
    },
    emits: ['changeCategory'],
    setup(props, ctx) {
      const searchCardInfo = reactive({
        name: '',
        tip: '',
        searchUrl: '',
      });
      const categoryInputElement = ref<HTMLElement>();
      const visible = ref(false);
      const searchAddVisible = ref(false);
      const form = reactive({
        name: '',
        post: '',
      });
      const searchInputText = ref('');

      const searchCardList = reactive<Array<SearchEngineModel>>(
        props.searchList
      );
      const currentSearchCardIndex = ref(0);
      const currentCategoryIndex = ref(0);
      const placeholder = ref('请输入你要搜索的关键字');
      defaultPlaceholder()
        .then(({ data }) => {
          placeholder.value = data.hitokoto;
        })
        .catch(console.error);
      function clickCurrentSearchIndex(index: number) {
        currentSearchCardIndex.value = index;
        placeholder.value = searchCardList[index].slogan;
      }
      function clickCurrentCategoryIndex(index: number) {
        currentCategoryIndex.value = index;
        ctx.emit('changeCategory', index);
      }
      function search(value: any) {
        const url = searchCardList[currentSearchCardIndex.value].href + value;
        openWindow(url);
      }
      const handleClick = () => {
        visible.value = true;
        console.log(categoryInputElement);
      };

      const handleCancel = () => {
        visible.value = false;
      };

      const fuseValue = ref('');

      const changeFuseAction = (newValue) => {
        fuseValue.value = newValue;
      };

      const wps: Array<WidgetPlugin> = _.filter(
        useWpsStore().currentUserWps,
        (w) => {
          return w.show;
        }
      );
      for (let i = 0; i < wps.length; i += 1) {
        wps[i].tip = false;
      }

      console.log('当前wps', wps);
      const dragEnd = (wp: WidgetPlugin, e: any) => {
        console.log(`dragEnd`, wp, e);
        const d: Device = device();
        const oldWpx = wp.x;
        const oldWpy = wp.y;
        wp.x = e.x / d.clientWidth;
        wp.y = e.y / d.clientHeight;
        if (oldWpx !== wp.x || oldWpy !== wp.y) {
          wp.tip = true;
        } else {
          wp.tip = false;
        }
        setWeight(wps);
      };

      const resize = (wp: WidgetPlugin, e: any) => {
        console.log(`resize`, wp, e);
        const d: Device = device();
        const oldWpx = wp.x;
        const oldWpy = wp.y;
        const oldW = wp.y;
        const oldH = wp.h;
        wp.x = e.x / d.clientWidth;
        wp.y = e.y / d.clientHeight;
        wp.w = e.w;
        wp.h = e.h;
        if (
          oldWpx !== wp.x ||
          oldWpy !== wp.y ||
          oldW !== wp.w ||
          oldH !== wp.h
        ) {
          wp.tip = true;
        } else {
          wp.tip = false;
        }
        setWeight(wps);
      };

      /**
       * 确认后不再允许变更,只能从配置中重新打开拖动按钮
       * @param w
       */
      const setWeightAndRef = (w: WidgetPlugin) => {
        w.draggable = false;
        w.tip = false;
        setWeight(wps);
        // window.location.reload();
      };

      const calculateX = (x: number) => {
        const d: Device = device();
        return x * d.clientWidth;
      };

      const calculateY = (y: number) => {
        const d: Device = device();
        return y * d.clientHeight;
      };

      return {
        wps,
        setWeightAndRef,
        calculateX,
        calculateY,
        resize,
        dragEnd,
        fuseValue,
        changeFuseAction,
        searchCardList,
        currentSearchCardIndex,
        placeholder,
        currentCategoryIndex,
        search,
        clickCurrentCategoryIndex,
        clickCurrentSearchIndex,
        searchInputText,
        visible,
        form,
        handleClick,
        handleCancel,
        categoryInputElement,
        searchAddVisible,
        searchCardInfo,
      };
    },
  });
</script>

<style lang="less" scoped>
  :deep(.arco-modal-body) {
    display: flex;
    justify-content: center;
    align-content: center;
  }
  :deep(.arco-modal-header) {
    display: none;
  }
  .searchGroup {
    z-index: 2;
  }
  .container {
    //overflow: hidden;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #1d2129;
    background: #3c7cbe;
    //-webkit-animation: gradient 15s ease-in-out infinite;
    //animation: bganimation 15s ease-in-out infinite;
  }

  @keyframes bganimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  #searchBox {
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    #search {
      width: 50vw;
    }
  }

  #searchCard {
    display: flex;
    width: 50%;
    color: white;
    font-size: 16px;
    padding-top: 5px;
    margin-left: 20px;
  }

  .searchSourceCard {
    margin: 0 10px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    //color: #2c3e50;
  }

  #searchTarget {
    display: flex;
    //width: 50%;
    margin-left: 20px;
    color: white;
    font-size: 16px;
    padding: 0;
  }

  .searchTargetCard {
    margin: 0 10px;
    padding: 10px;
    cursor: pointer;
    border-bottom: 2px solid transparent;
  }

  .searchTargetCardHover {
    box-sizing: border-box;
    border-bottom-color: #ffd100;
    border-top-width: 0;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    transition: all 0.4s ease-in-out 0s;
  }

  .searchTargetCard:hover {
    color: #f9cd04;
    box-sizing: border-box;
  }

  .searchSource {
    padding: 1px 5px;
    border-radius: 5px;
  }

  .searchSource:hover {
    background-color: #ffd100;
    padding: 1px 5px;
    border-radius: 5px;
  }

  .searchSourceActive {
    background-color: #ffd100;
    padding: 1px 5px;
    border-radius: 5px;
    color: #504f4f;
  }

  .container {
    font-family: 'Arial', 'Microsoft YaHei', '黑体', '宋体', sans-serif;
  }
  #widgetWrapper {
    position: absolute;
    top: 50px;
    right: 0;
    left: 0;
    bottom: 0;
    //border-radius: 50%;
    overflow: hidden;
    z-index: 1;
    //background: #ffffff;
    //box-shadow: 0 0 10px 10px #9fb1c5;
  }
  #fuseDiv {
    position: absolute;
    width: 50vw;
    //height: 50vh;
    //background: #409eff;
    margin-left: 10px;
    z-index: 30;
  }

  .frostedGlass {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #1d2129;
  }

  /**
   毛玻璃特效
   */
  .glass {
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
  }
</style>
