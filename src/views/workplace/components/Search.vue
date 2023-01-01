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
    <div id="widgetWrapper" class="animated" :class="style.searchAnimate">
    </div>
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
  import { openWindow } from '@/api/toolList';
  import defaultPlaceholder from '@/api/placeholder';
  import FuseToolPanel from '@/views/workplace/components/widget/FuseToolPanel.vue';

  export default defineComponent({
    name: 'Search',
    components: {
      SearchGoogle,
      SearchStandard,
      SearchSimple,
      SupperSearch,
      FuseToolPanel,
    },
    props: {
      categories: Array<CategoryModel>,
      searchList: Array<SearchEngineModel>,
      style: ThemeModel,
      inputOffset: String,
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
        console.log(` fuseValue.value `, fuseValue.value);
      };
      return {
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
    width: 20vw;
    height: 40vh;
    position: absolute;
    top: 10px;
    right: 0;
    //border-radius: 50%;
    overflow: hidden;
    //background: #ffffff;
    //box-shadow: 0 0 10px 10px #9fb1c5;
  }
  #fuseDiv {
    position: absolute;
    width: 50vw;
    //height: 50vh;
    //background: #409eff;
    margin-left: 10px;
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
