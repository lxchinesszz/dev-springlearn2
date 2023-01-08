<template>
  <div class="theme">
    <a-scrollbar style="height: 400px; overflow: auto">
      <a-grid :col-gap="4" :row-gap="4" class="grid-demo-grid">
        <a-grid-item
          v-for="(w, index) in themeList"
          :key="index"
          class="demo-item"
          :span="8"
        >
          <a-card hoverable :style="{ marginBottom: '8px' }" :title="w.name">
            <template #cover>
              <a-image
                :preview-visible="previewIndex === index"
                class="wImg"
                width="100%"
                :src="w.img"
                @preview-visible-change="previewIndex = -1"
              />
            </template>
            <a-card-meta :description="w.desc"> </a-card-meta>
            <template #extra>
              <a-space>
                <div></div>
                <a-tooltip content="开启后,点击主题应用后生效" position="left">
                  <a-switch
                    v-model="w.show"
                    type="line"
                    @change="openTheme(index)"
                  >
                    <template #checked-icon>
                      <icon-check />
                    </template>
                    <template #unchecked-icon>
                      <icon-close />
                    </template>
                  </a-switch>
                </a-tooltip>
                <div></div>
              </a-space>
            </template>
            <!--        卡片的slot-->
            <template #actions>
              <a-space>
                <a-button size="small" @click="previewIndex = index"
                  >预览</a-button
                >
              </a-space>
            </template>
          </a-card>
        </a-grid-item>
      </a-grid>
    </a-scrollbar>
  </div>
</template>

<script lang="ts" setup>
  import ExtThemeModel from '@/model/ExtThemeModel';
  import { reactive, ref, defineExpose } from 'vue';
  import { setTheme } from '@/api/toolList';
  import { useWpsStore } from '@/store';

  const previewIndex = ref(-1);

  const themeList: Array<ExtThemeModel> = reactive<Array<ExtThemeModel>>([
    {
      searchStyle: 'supper-search',
      searchBackgroundCss:
        "background-color: #f0f4ff;\n   background-size: cover;\n   background-repeat: no-repeat;\n   background-image: url('https://s1.ax1x.com/2023/01/01/pSCzRu8.jpg');",
      windowAnimate: 'fadeInRightBig',
      searchAnimate: 'fadeInRightBig',
      navBarBackgroundCss: '',
      toolGroupAnimate: 'none',
      closeIcon: false,
      fuzzySearch: true,
      simplify: true,
      searchTextCss: '',
      supperSearchEngine: ['tool', 'baidu'],
      frostedGlass: true,
      hideSearchAroundText: true,

      img: 'https://img.springlearn.cn/blog/446612c65214fe483a8ca71335981c13.png',
      author: '周杰伦',
      name: '二次元',
      desc: '极简模式下二次元风',
      show: false,
    },
    {
      searchStyle: 'supper-search',
      searchBackgroundCss:
        "background-color: #f0f4ff;\n   background-size: cover;\n   background-repeat: no-repeat;\n   background-image: url('https://img.springlearn.cn/blog/5523c88dd347d1b7cc617f632b7efdb7.jpeg');",
      windowAnimate: 'fadeInRightBig',
      searchAnimate: 'fadeInRightBig',
      navBarBackgroundCss: '',
      toolGroupAnimate: 'none',
      closeIcon: false,
      fuzzySearch: true,
      simplify: true,
      searchTextCss: '',
      supperSearchEngine: ['tool'],
      frostedGlass: false,
      hideSearchAroundText: false,

      img: 'https://img.springlearn.cn/blog/c288c8b168bac8e95dbe0bfa5d2b4324.png',
      author: '西魏陶渊明',
      name: '二次元之集原美一',
      desc: '极简模式下二次元风格',
      show: false,
    },
    {
      searchStyle: 'supper-search',
      searchBackgroundCss:
        ' background-image: linear-gradient(\n      45deg,\n      rgb(90, 54, 148) 0%,\n      rgb(19, 189, 206) 33%,\n      rgb(0, 148, 217) 66%,\n      rgb(111, 199, 181) 100%\n    );\n    background-size: 400%;\n    background-position: 0 100%;\n    -webkit-animation: gradient 15s ease-in-out infinite;\n    animation: bganimation-114fda31 15s ease-in-out infinite;\n',
      windowAnimate: 'fadeInRightBig',
      searchAnimate: 'fadeInRightBig',
      navBarBackgroundCss:
        'background-color: rgba(255, 255, 255, 0.25);\nbackdrop-filter: blur(30px);\n-webkit-backdrop-filter: blur(30px);\nborder: 1px solid rgba(255, 255, 255, 0.18);\nbox-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;\n-webkit-box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;\ncolor: rgba(255, 255, 255, 0.75);',
      toolGroupAnimate: 'pulse',
      closeIcon: false,
      fuzzySearch: true,
      simplify: false,
      searchTextCss: '',
      supperSearchEngine: ['tool'],
      frostedGlass: true,
      hideSearchAroundText: false,
      webTitle: '我的工作台',

      img: 'https://img.springlearn.cn/blog/49c60ae4f9781fa983d393b6884fc58d.png',
      author: '周杰伦',
      name: '蓝色简约工作台',
      desc: '蓝色简约工作台',
      show: false,
    },
  ]);

  const store = useWpsStore();
  const { name } = store.theme;
  for (let i = 0; i < themeList.length; i += 1) {
    if (themeList[i].name === name) {
      themeList[i].show = true;
    }
  }
  const selectedThemeIndex = ref(-1);

  const openTheme = (i: number) => {
    if (themeList[i].show) {
      console.log(`选中`, themeList[i].name, themeList[i].show);
      selectedThemeIndex.value = i;
      for (let j = 0; j < themeList.length; j += 1) {
        if (j !== i) {
          themeList[j].show = false;
        }
      }
    }
  };

  function saveAction(): boolean {
    if (themeList[selectedThemeIndex.value].show) {
      setTheme(themeList[selectedThemeIndex.value]);
      return true;
    }
    return false;
  }

  // 暴露给外部
  defineExpose({ saveAction });
</script>

<style scoped>
  .theme {
    width: 100%;
    height: 100%;
  }
  .wImg {
    height: 150px;
    background-position: center center !important;
    background-size: cover !important;
  }
  .demo-item {
  }
</style>
