<template>
  <div class="container animated bounceInRight">
    <div id="searchTarget">
      <!--      查询源-->
<!--      <div-->
<!--        v-for="(scope, index) in categories"-->
<!--        :class="-->
<!--          index === currentToolIndex-->
<!--            ? 'searchTargetCard searchTargetCardHover'-->
<!--            : 'searchTargetCard'-->
<!--        "-->
<!--        @click="clickCurrentToolIndex(scope.id, index)"-->
<!--        >{{ scope.name }}-->
<!--      </div>-->
    </div>
    <div id="searchBox">
      <input
        id="searchInput"
        ref="searchInputRef"
        type="text"
        :placeholder="placeholder"
      />
      <a-button
        id="searchButton"
        type="primary"
        icon="el-icon-search"
        class="btn-15"
        >搜索
      </a-button>
    </div>
    <div id="searchCard">
      <!--      查询源-->
      <div
        v-for="(scope, index) in searchCardList"
        :key="index"
        class="searchSourceCard"
        @click="clickCurrentSearchCardIndex(index)"
      >
        <div
          class="searchSource"
          :class="index === currentSearchCardIndex ? 'searchSourceActive' : ''"
          >{{ scope.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    name: 'Search',
    setup() {
      const searchCardList = [
        {
          name: 'Google',
          tip: '使用谷歌试试手气吧',
          // djt: 1,
          searchUrl: 'https://www.google.com/search?q=',
        },
        {
          name: 'Baidu',
          tip: '百度一下,你就知道',
          searchUrl: 'https://www.baidu.com/s?ie=UTF-8&wd=',
        },
        {
          name: 'Github',
          tip: '全球最大的代码仓库平台',
          searchUrl: 'https://github.com/search?q=',
        },
        {
          name: 'Oschina',
          tip: 'OSCHINA - 中文开源技术交流社区_开源中国',
          searchUrl: 'https://www.oschina.net/search?q=',
        },
        {
          name: 'CSDN',
          tip: 'CSDN - 专业开发者社区',
          searchUrl: 'https://so.csdn.net/so/search?q=',
        },
        {
          name: 'Bilibi',
          tip: '哔哩哔哩 (゜-゜)つロ 干杯~-bilibili',
          searchUrl: 'https://search.bilibili.com/all?keyword=',
        },
      ];
      const currentSearchCardIndex = ref(0);
      const placeholder = ref('请输入你要搜索的关键字');
      function clickCurrentSearchCardIndex(index: number) {
        currentSearchCardIndex.value = index;
        if (searchCardList[index].djt === 1) {
          console.log('填充土鸡汤');
        } else {
          placeholder.value = searchCardList[index].tip;
        }
      }
      return {
        searchCardList,
        currentSearchCardIndex,
        placeholder,
        clickCurrentSearchCardIndex,
      };
    },
  });
</script>

<style scoped>
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
      45deg, rgb(90, 54, 148) 0%, rgb(19, 189, 206) 33%, rgb(0, 148, 217) 66%, rgb(111, 199, 181) 100%);
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
    color: #2c3e50;
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
