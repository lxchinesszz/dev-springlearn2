<template>
  <div id="supperSearchWrapper" @blur="closeTipAction">
    <div class="supperSearch">
      <div class="searchIcon">
        <icon-search :size="24" :style="{ color: '#3974ff' }" />
      </div>
      <div class="searchInput">
        <input
          v-model="value"
          :placeholder="placeholder"
          @focus="tipVisible = true"
          @keydown.enter="search"
        />
      </div>
    </div>
    <div class="searchBtn" @click="search"> 搜索 </div>
  </div>
  <div
    v-if="
      (tipVisible && fuseResultList.length > 0) ||
      bdFuzzyResultList.length > 0 ||
      kfFuzzyResultList.length > 0 ||
      zhFuzzyResultList.length > 0 ||
      biliFuzzyResultList.length > 0
    "
    id="supperTipWrapper"
    class="animated fadeIn"
  >
    <div v-if="fuseResultList.length > 0" class="tipItemWrapper">
      <div class="tipItemTitle"> 本地搜索 </div>
      <div class="tipItemList">
        <a-space wrap>
          <a-tag
            v-for="(tool, index) in fuseResultList"
            :key="index"
            size="large"
            color="orangered"
            checkable
            class="animated fadeIn"
            @check="open(tool.tool.link)"
          >
            <template #icon>
              <icon-font type="icon-huomiao1" />
            </template>
            <a-tooltip :content="tool.tool.desc">
              {{ tool.categoryName }}/
              {{ tool.tool.title }}
            </a-tooltip>
          </a-tag>
        </a-space>
      </div>
    </div>
    <div v-if="bdFuzzyResultList.length > 0" class="tipItemWrapper">
      <div class="tipItemTitle"> 百度搜索 </div>
      <div class="tipItemList">
        <a-space wrap>
          <a-tag
            v-for="(bdFuzzy, index) in bdFuzzyResultList"
            :key="index"
            color="blue"
            checkable
            size="large"
            class="animated fadeIn"
            @check="open(`https://www.baidu.com/s?ie=UTF-8&wd=${bdFuzzy}`)"
          >
            <template #icon>
              <icon-font type="icon-baidu" />
            </template>
            {{ bdFuzzy }}
          </a-tag>
        </a-space>
      </div>
    </div>
    <div v-if="kfFuzzyResultList.length > 0" class="tipItemWrapper">
      <div class="tipItemTitle"> 开发者搜索 </div>
      <div class="tipItemList">
        <a-space wrap>
          <a-tag
            v-for="(bdFuzzy, index) in kfFuzzyResultList"
            :key="index"
            size="large"
            checkable
            class="animated fadeIn"
            @check="open(`https://kaifa.baidu.com/searchPage?wd=${bdFuzzy}`)"
          >
            <template #icon>
              <icon-font type="icon-biancheng" />
            </template>
            {{ bdFuzzy }}
          </a-tag>
        </a-space>
      </div>
    </div>
    <div v-if="zhFuzzyResultList.length > 0" class="tipItemWrapper">
      <div class="tipItemTitle"> 知乎搜索 </div>
      <div class="tipItemList">
        <a-space wrap>
          <a-tag
            v-for="(zhFuzzy, index) in zhFuzzyResultList"
            :key="index"
            size="large"
            checkable
            class="animated fadeIn"
            @check="
              open(`https://www.zhihu.com/search?type=content&q=${zhFuzzy}`)
            "
          >
            <template #icon>
              <icon-font type="icon-zhihu-circle-fill" />
            </template>
            {{ zhFuzzy }}
          </a-tag>
        </a-space>
      </div>
    </div>
    <div v-if="biliFuzzyResultList.length > 0" class="tipItemWrapper">
      <div class="tipItemTitle"> B站搜索 </div>
      <div class="tipItemList">
        <a-space wrap>
          <a-tag
            v-for="(bzFuzzy, index) in biliFuzzyResultList"
            :key="index"
            size="large"
            checkable
            class="animated fadeIn"
            @check="open(`https://search.bilibili.com/all?keyword=${bzFuzzy}`)"
          >
            <template #icon>
              <icon-font type="icon-bilibili1" />
            </template>
            {{ bzFuzzy }}
          </a-tag>
        </a-space>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { reactive, ref, watch } from 'vue';
  import { Icon } from '@arco-design/web-vue';
  import FuseToolResult from '@/model/FuseToolResult';
  import { fusePlugin, FusePlugin, openWindow } from '@/api/toolList';
  import { clearArray } from '@/api/lodashs';
  import bdFuzzySearch, {
    BdFuzzyResponse,
    kaifaFuzzySearch,
    KaifaResponse,
    zhihuFuzzySearch,
    ZhihuResponse,
    ZhihuFuzzyItem,
    biliFuzzySearch,
    BiliResponse,
  } from '@/api/search';
  import ThemeModel from '@/model/ThemeModel';

  const IconFont = Icon.addFromIconFontCn({
    src: 'https://at.alicdn.com/t/c/font_902793_30zoulb2u7u.js',
  });

  export default {
    name: 'SupperSearch',
    components: {
      IconFont,
    },
    props: {
      placeholder: {
        type: String,
        default: '搜索一切',
      },
      theme: ThemeModel,
    },
    emits: ['doAction', 'blur'],
    setup(props, ctx) {
      const value = ref('');
      const tipVisible = ref(false);
      // 页面点击搜索触发
      const search = () => {
        ctx.emit('doAction', value.value);
      };

      const customSearch = (kw: string) => {
        ctx.emit('doAction', kw);
      };

      const blurAction = () => {
        tipVisible.value = false;
        ctx.emit('blur');
      };

      const fuseResultList: Array<FuseToolResult> = reactive<FuseToolResult[]>(
        []
      );
      const bdFuzzyResultList: Array<string> = reactive([]);

      const kfFuzzyResultList: Array<string> = reactive([]);

      const zhFuzzyResultList: Array<string> = reactive([]);

      const biliFuzzyResultList: Array<string> = reactive([]);

      const closeTipAction = () => {
        clearArray(fuseResultList);
        clearArray(bdFuzzyResultList);
        clearArray(kfFuzzyResultList);
      };
      // 获取fuse插件
      const fp: FusePlugin = fusePlugin();

      const manySearchEngineFuzzy = (newValue) => {
        if (props.theme.supperSearchEngine.lastIndexOf('baidu') > -1) {
          // 百度搜索
          bdFuzzySearch(newValue)
            .then((response) => {
              const bd: BdFuzzyResponse = response.data;
              const { g } = bd;
              clearArray(bdFuzzyResultList);
              for (let i = 0; i < g.length; i += 1) {
                const bdFuzzyItem = g[i];
                bdFuzzyResultList.push(bdFuzzyItem.q);
              }
            })
            .catch((e) => {
              console.log(e);
            });
        }
        if (props.theme.supperSearchEngine.lastIndexOf('kaifa') > -1) {
          kaifaFuzzySearch(newValue).then((response) => {
            const kf: KaifaResponse = response.data;
            const kfKwList = kf.data;
            clearArray(kfFuzzyResultList);
            if (kfKwList && kfKwList?.length > 0) {
              kfFuzzyResultList.push(...kfKwList);
            }
          });
        }
        if (props.theme.supperSearchEngine.lastIndexOf('zhihu') > -1) {
          zhihuFuzzySearch(newValue).then((response) => {
            const zhihu: ZhihuResponse = response.data;
            const zhKwList: Array<ZhihuFuzzyItem> = zhihu.suggest;
            clearArray(zhFuzzyResultList);
            if (zhKwList && zhKwList?.length > 0) {
              for (let i = 0; i < zhKwList.length; i += 1) {
                const zhihuFuzzyItem = zhKwList[i];
                zhFuzzyResultList.push(zhihuFuzzyItem.query);
              }
            }
          });
        }

        if (props.theme.supperSearchEngine.lastIndexOf('bili') > -1) {
          biliFuzzySearch(newValue).then((response) => {
            clearArray(biliFuzzyResultList);
            const biMap: Map<string, BiliResponse> = response.data;
            const values = Object.values(biMap);
            for (let i = 0; i < values.length; i += 1) {
              biliFuzzyResultList.push(values[i].value);
            }
          });
        }
      };
      watch(value, (newValue) => {
        // 工具搜索
        if (props.theme.supperSearchEngine.lastIndexOf('tool') > -1) {
          const result: FuseToolResult[] = fp.fuseSearch(newValue);
          clearArray(fuseResultList);
          fuseResultList.push(...result);
        }
        manySearchEngineFuzzy(newValue);
      });

      const open = (url: string) => {
        openWindow(url);
      };

      return {
        open,
        zhFuzzyResultList,
        biliFuzzyResultList,
        closeTipAction,
        customSearch,
        tipVisible,
        fuseResultList,
        value,
        search,
        bdFuzzyResultList,
        kfFuzzyResultList,
        blurAction,
      };
    },
  };
</script>

<style scoped lang="less">
  #supperSearchWrapper {
    height: 48px;
    display: flex;
    flex-direction: row;
    border-radius: 12px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    //box-shadow: 0 10px 20px rgb(36 91 219 / 8%);
    &:hover {
      box-shadow: 0 20px 40px rgb(36 91 219 / 8%);
    }
    .searchBtn {
      justify-content: center;
      align-items: center;
      display: flex;
      background: linear-gradient(90deg, #4e83fd, #3370ff);
      width: 10%;
      border-bottom-right-radius: 12px;
      border-top-right-radius: 12px;
      color: #fff;
      font-size: 18px;
      font-weight: 500;
      height: 100%;
      line-height: 26px;
      cursor: pointer;
      margin-left: -1px;
      &:hover {
        -webkit-animation: gradient 15s ease-in-out infinite;
        animation: bganimation 15s ease-in-out infinite;
      }
    }
  }
  .supperSearch {
    flex-grow: 1;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    height: 100%;
    text-indent: 15px;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    font-size: 14px;
    width: 90%;
    //box-shadow: 0 20px 40px rgb(36 91 219 / 8%);
    //border: 2px solid white;
    &:hover {
      //border: 1px solid #3974ff;
      transition: border 9s;
    }
    .search-icon {
      background-color: #3974ff;
      width: 10%;
      height: 100%;
      font-size: 14px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #3974ff;
    }
    .searchInput {
      width: 99%;
      height: 100%;
      input {
        font-size: 16px;
        width: 100%;
        height: 100%;
        background: none;
        outline: none;
        border: none;
      }
    }
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

  #supperTipWrapper {
    box-shadow: 0 10px 20px rgb(36 91 219 / 8%);
    margin-top: 4px;
    position: absolute;
    background-color: white;
    width: 90%;
    max-height: 60vh;
    overflow: auto;
    border-radius: 8px;
    text-align: left;
    padding: 0 20px;
    &:hover {
      box-shadow: 0 20px 40px rgb(36 91 219 / 8%);
    }
    .tipItemWrapper {
      display: flex;
      margin: 15px 0;
      flex-direction: column;
      overflow: scroll;
      .tipItemTitle {
        font-weight: bolder;
        font-size: 1.2rem;
      }
      .tipItemList {
        margin-top: 15px;
      }
    }
  }
</style>
