<template>
  <div class="container">
    <div id="searchTarget">
      <!--      查询源-->
      <div
        v-for="(scope, index) in categories"
        :key="index"
        :class="
          index === currentCategoryIndex
            ? 'searchTargetCard searchTargetCardHover'
            : 'searchTargetCard'
        "
        @click="clickCurrentCategoryIndex(index)"
        >{{ scope.categoryName }}
      </div>
      <div class="searchTargetCard" @click="handleClick"><icon-edit /></div>
    </div>
    <div id="searchBox">
      <input
        id="searchInput"
        ref="searchInputRef"
        v-model="searchInputText"
        type="text"
        :placeholder="placeholder"
      />
      <a-button
        id="searchButton"
        type="primary"
        icon="el-icon-search"
        class="btn-15"
        @click="search"
        >搜索
      </a-button>
    </div>
    <div id="searchCard">
      <!--      查询源-->
      <div
        v-for="(scope, index) in searchCardList"
        :key="index"
        class="searchSourceCard"
        @click="clickCurrentSearchIndex(index)"
      >
        <div
          class="searchSource"
          :class="index === currentSearchCardIndex ? 'searchSourceActive' : ''"
          >{{ scope.name }}
        </div>
      </div>
      <div class="searchSourceCard" @click="handleAddSearch"><icon-edit /></div>
    </div>
    <a-modal
      v-model:visible="visible"
      :body-style="{ 'display': 'flex', 'justify-content': 'center' }"
      title="添加分组"
      title-align="start"
      :footer="false"
      draggable
      @cancel="handleCancel"
      @before-ok="handleBeforeOk"
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
    <a-modal
      v-model:visible="searchAddVisible"
      title="添加搜索引擎"
      title-align="start"
      draggable
      @cancel="handleCancel"
      @ok="handleBeforeOk"
    >
      <a-form
        :style="{ 'display': 'flex', 'justify-content': 'flex-start' }"
        auto-label-width
      >
        <a-row :gutter="1">
          <a-col :span="12">
            <a-form-item field="value1" label="中文名" label-col-flex="50px">
              <a-input
                v-model="searchCardInfo.name"
                placeholder="百度搜索"
                :max-length="6"
                show-word-limit
              />
            </a-form-item>
          </a-col>
          <a-col :span="12"> </a-col>
        </a-row>
        <a-row :gutter="2">
          <a-col :span="24">
            <a-form-item field="value5" label="SLogo" label-col-flex="50px">
              <a-input
                v-model="searchCardInfo.tip"
                placeholder="百度一下你就知道"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="2">
          <a-col :span="24">
            <a-form-item field="value5" label="域名" label-col-flex="50px">
              <a-input
                v-model="searchCardInfo.searchUrl"
                placeholder="https://www.baidu.com/s?ie=UTF-8&wd="
              />
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </a-modal>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, reactive, onMounted, onUnmounted } from 'vue';

  export default defineComponent({
    name: 'Search',
    props: ['categories', 'searchList'],
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
      const searchCardList = reactive(props.searchList);
      const currentSearchCardIndex = ref(0);
      const currentCategoryIndex = ref(0);
      const placeholder = ref('请输入你要搜索的关键字');
      function clickCurrentSearchIndex(index: number) {
        currentSearchCardIndex.value = index;
        if (searchCardList[index].djt === 1) {
          console.log('填充土鸡汤');
        } else {
          placeholder.value = searchCardList[index].tip;
        }
      }
      function clickCurrentCategoryIndex(index: number) {
        currentCategoryIndex.value = index;
        ctx.emit('changeCategory', index);
      }
      function search() {
        const url =
          searchCardList[currentSearchCardIndex.value].searchUrl +
          searchInputText.value;
        window.open(url, '_blank');
      }
      const keyDown = (e) => {
        if (e.keyCode === 13) {
          search();
        }
      };
      onMounted(() => {
        window.addEventListener('keydown', keyDown);
      });
      onUnmounted(() => {
        window.removeEventListener('keydown', keyDown, false);
      });

      const handleClick = () => {
        visible.value = true;
        console.log(categoryInputElement);
      };

      const handleAddSearch = () => {
        searchAddVisible.value = true;
      };
      const handleBeforeOk = () => {
        searchCardList.push(searchCardInfo);
      };
      const handleCancel = () => {
        visible.value = false;
      };

      return {
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
        handleBeforeOk,
        handleCancel,
        categoryInputElement,
        searchAddVisible,
        handleAddSearch,
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
  .container {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #1d2129;
    /*background: #3c7cbe;*/
    background-image: linear-gradient(
      45deg,
      rgb(90, 54, 148) 0%,
      rgb(19, 189, 206) 33%,
      rgb(0, 148, 217) 66%,
      rgb(111, 199, 181) 100%
    );
    background-size: 400%;
    background-position: 0 100%;
    -webkit-animation: gradient 15s ease-in-out infinite;
    animation: bganimation 15s ease-in-out infinite;
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
  }

  #searchInput {
    height: 48px;
    text-indent: 15px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    font-size: 14px;
    border: none;
    width: 50%;
    outline: none;
  }

  #searchButton {
    border-radius: 0 10px 10px 0;
    height: 50px;
  }

  #searchCard {
    display: flex;
    width: 50%;
    color: white;
    font-size: 16px;
    padding-top: 5px;
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
    width: 50%;
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

  .btn-15 {
    border: none;
    z-index: 1;
    background: #3c7cbe;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
  }

  .btn-15:after {
    position: absolute;
    content: '';
    width: 0;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;
    background-color: #409eff;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    transition: all 0.3s ease;
  }

  .btn-15:hover {
    color: #fff;
  }

  .btn-15:hover:after {
    left: 0;
    width: 100%;
  }

  .btn-15:active {
    top: 2px;
  }
</style>
