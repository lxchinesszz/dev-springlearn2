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
            <a-card-meta>
              <template #avatar>
                <div
                  :style="{
                    display: 'flex',
                    alignItems: 'center',
                    color: '#1D2129',
                  }"
                >
                  <a-typography-text>{{ w.desc }}</a-typography-text>
                </div>
              </template>
            </a-card-meta>

            <!--            <a-card-meta :description="w.desc"> </a-card-meta>-->
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
        "background-color: #f0f4ff;\n   background-size: cover;\n   background-repeat: no-repeat;\n   background-image: url('https://img.springlearn.cn/blog/83b872730d3ab4a502c2ae5d73db4dee.jpeg');",
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
      hideSearchAroundText: true,

      img: 'https://img.springlearn.cn/blog/d1f918c39e4b7750cbe9b2ba5b9e7c2c.jpg',
      author: '西魏陶渊明',
      name: '黑色风暴',
      desc: '黑色风暴',
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
    {
      searchStyle: 'supper-glass-search',
      searchBackgroundCss:
        "background-color: #f0f4ff;\n   background-size: cover;\n   background-repeat: no-repeat;\n   background-image: url('https://img.springlearn.cn/blog/88a7e8a7c9aa804c44f9c0a55b7715a2.jpg');",
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
      hideSearchAroundText: true,

      img: 'https://img.springlearn.cn/blog/6226f7cbe59e99a90b5cef6f94f966fd.jpg',
      author: '西魏陶渊明',
      name: '宫崎骏原野',
      desc: '宫崎骏原野',
      show: false,
    },
    {
      searchStyle: 'supper-glass-search',
      searchBackgroundCss:
        "background-color: #f0f4ff;\n   background-size: cover;\n   background-repeat: no-repeat;\n   background-image: url('https://img.springlearn.cn/blog/f6c760c712097db7099b69a59f26f9e5.jpg');",
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
      hideSearchAroundText: true,

      img: 'https://img.springlearn.cn/blog/4145a87ec0e7a641ccddff79ec42ee6d.jpg',
      author: '西魏陶渊明',
      name: '浪漫午后',
      desc: '浪漫午后',
      show: false,
    },
    {
      searchStyle: 'supper-glass-search',
      searchBackgroundCss:
        "background-color: #f0f4ff;\n   background-size: cover;\n   background-repeat: no-repeat;\n   background-image: url('https://img.springlearn.cn/blog/d351b2f8d107f943ddc50637e304bbb3.jpg');",
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
      hideSearchAroundText: true,

      img: 'https://img.springlearn.cn/blog/de205af6f89c9f6043cd589403eccecc.jpg',
      author: '西魏陶渊明',
      name: '雨天车内',
      desc: '雨天车内',
      show: false,
    },
    {
      searchStyle: 'supper-glass-search',
      searchBackgroundCss:
        "background-color: #f0f4ff;\n   background-size: cover;\n   background-repeat: no-repeat;\n   background-image: url('https://img.springlearn.cn/blog/bf5f3c2fae6d345ce9e2e4e24599fb3d.jpg');",
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
      hideSearchAroundText: true,

      img: 'https://img.springlearn.cn/blog/6e453d094299ca1c9935281e6b250d31.jpg',
      author: '西魏陶渊明',
      name: '杀手',
      desc: '杀手',
      show: false,
    },
    {
      searchStyle: 'supper-glass-search',
      searchBackgroundCss:
        "background-color: #f0f4ff;\n   background-size: cover;\n   background-repeat: no-repeat;\n   background-image: url('https://img.springlearn.cn/blog/d0110864aa91044cad0bdddfcf5ad6c8.jpg');",
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
      hideSearchAroundText: true,

      img: 'https://img.springlearn.cn/blog/5cddb13af10e6ecdd7e726fc91183219.jpg',
      author: '西魏陶渊明',
      name: '雨夜静坐',
      desc: '雨夜静坐',
      show: false,
    },
    {
      searchStyle: 'supper-glass-search',
      searchBackgroundCss:
        "background-color: #f0f4ff;\n   background-size: cover;\n   background-repeat: no-repeat;\n   background-image: url('https://img.springlearn.cn/blog/a8d0fc7c68ce751c1cbb5dcfa5d76aed.jpg');",
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
      hideSearchAroundText: true,

      img: 'https://img.springlearn.cn/blog/b8abf5dbd91b38cf8d776a0c72caaf9b.jpg',
      author: '西魏陶渊明',
      name: '窗内',
      desc: '窗内',
      show: false,
    },
    {
      searchStyle: 'supper-glass-search',
      searchBackgroundCss:
        "background-color: #f0f4ff;\n   background-size: cover;\n   background-repeat: no-repeat;\n   background-image: url('https://img.springlearn.cn/blog/75ccbde9c978870ba0ed0e603388455a.jpg');",
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
      hideSearchAroundText: true,

      img: 'https://img.springlearn.cn/blog/7a456609681010038aa6c556771d8559.jpg',
      author: '西魏陶渊明',
      name: '雨夜花店',
      desc: '雨夜花店',
      show: false,
    },
    {
      searchStyle: 'supper-glass-search',
      searchBackgroundCss:
        "background-color: #f0f4ff;\n   background-size: cover;\n   background-repeat: no-repeat;\n   background-image: url('https://img.springlearn.cn/blog/c263fd316e1528142d0ffae23ce2ef07.jpg');",
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
      hideSearchAroundText: true,

      img: 'https://img.springlearn.cn/blog/7c6b44e5aaf38b886aaf742396c02676.png',
      author: '西魏陶渊明',
      name: '鱿鱼游戏',
      desc: '鱿鱼游戏',
      show: false,
    },
    {
      searchStyle: 'supper-glass-search',
      searchBackgroundCss:
        "background-color: #f0f4ff;\n   background-size: cover;\n   background-repeat: no-repeat;\n   background-image: url('https://static.runoob.com/images/mix/4781442-d6a8c2e5714b4c44.png');",
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
      hideSearchAroundText: true,

      img: 'https://img.springlearn.cn/blog/bfd2cc4c9a1cc8c50b4a598d6e081084.png',
      author: '西魏陶渊明',
      name: '代码没写完',
      desc: '代码没写完',
      show: false,
    },
    {
      searchStyle: 'supper-glass-search',
      searchBackgroundCss:
        "background-color: #f0f4ff;\n   background-size: cover;\n   background-repeat: no-repeat;\n   background-image: url('https://static.runoob.com/images/mix/wallpaper.png');",
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
      hideSearchAroundText: true,

      img: 'https://img.springlearn.cn/blog/bf425af04b58787c72a9769299994da9.png',
      author: '西魏陶渊明',
      name: '代码一生',
      desc: '代码一生',
      show: false,
    },
    {
      searchStyle: 'supper-glass-search',
      searchBackgroundCss:
        "background-color: #f0f4ff;\n   background-size: cover;\n   background-repeat: no-repeat;\n   background-image: url('https://img.springlearn.cn/learn_e8eaa49e60853dcea83e553e43b102d1.svg');",
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
      hideSearchAroundText: true,

      img: 'https://img.springlearn.cn/blog/ba386c93bb4af0b31e05ddd9348e9d02.png',
      author: '西魏陶渊明',
      name: 'Github',
      desc: 'Github',
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
    if (themeList[selectedThemeIndex.value]?.show) {
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
