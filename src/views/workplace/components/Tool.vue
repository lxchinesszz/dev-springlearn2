<template>
  <div class="toolCard">
    <div class="toolIcon" style="color: #504f4f">
      <a-trigger
        trigger="hover"
        position="top"
        :popup-offset="25"
        show-arrow
        align-point
      >
        <ELink :href="toolInfo.link">
          <a-avatar v-if="imgVisible" :size="55" shape="circle">
            <img alt="avatar" :src="toolInfo.icon" @error="switchIconText" />
          </a-avatar>
          <a-avatar
            v-else
            :size="55"
            :style="{
              backgroundColor: bgColor,
              color: '#fff',
            }"
          >
            {{ iconText }}</a-avatar
          >
        </ELink>
        <template #content>
          <div
            style="height: 100%; overflow-y: scroll; overflow-x: hidden"
            class="animated fadeIn"
          >
            <a-card
              :style="{ width: '360px' }"
              :title="info.title"
              hoverable
              :bordered="false"
            >
              <iframe :src="toolInfo.link" frameborder="0" scrolling="no">
              </iframe>
            </a-card>
          </div>
        </template>
      </a-trigger>
    </div>
    <div class="toolDescWrapper">
      <div class="toolTitle">
        <div class="title">
          <ELink :href="toolInfo.link">
            {{ toolInfo.title }}
          </ELink>
        </div>
        <div v-if="toolInfo.source === 1" class="locationGw"> 国外 </div>
        <div v-else class="location"> 国内 </div>
      </div>
      <div class="toolDesc">
        <ELink :href="toolInfo.link">
          {{ toolInfo.desc }}
        </ELink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  // 抽屉工具，支持8个或者是4个
  import { defineComponent, reactive, ref } from 'vue';
  import ELink from '@/views/workplace/components/Link.vue';
  import deepClone from '@/api/lodashs';
  import SettingModel from '@/model/SettingModel';
  import CategoryTool from '@/model/CategoryTool';

  export default defineComponent({
    name: 'Tool',
    components: { ELink },
    props: {
      dataSource: SettingModel,
      info: {
        type: CategoryTool,
        default: {
          title: 'Element UI',
          desc: 'Element 一套为开发者Element 一套为开发者Element 一套为开发者',
          link: 'https://blog.springlearn.cn',
          source: 2,
          icon: 'https://element.eleme.cn/favicon.ico',
          type: 'add',
        },
      },
      bgColor: {
        type: String,
      },
    },
    setup(props) {
      // 复制一份
      const toolInfo: CategoryTool = reactive<CategoryTool>(
        deepClone(props.info)
      );
      // 设置精简ICON
      const iconText = ref(props.info.title.substr(0, 2).toUpperCase());
      // 默认背景
      const imgVisible = ref(!props.dataSource?.theme.closeIcon);
      function switchIconText() {
        console.log(toolInfo.title, 'Icon加载失败,已动态生成Icon');
        imgVisible.value = false;
      }

      return {
        toolInfo,
        switchIconText,
        iconText,
        imgVisible,
      };
    },
  });
</script>

<style lang="less" scoped>
  :deep(.arco-avatar) {
    background-color: white;
    color: #9c9c9c;
  }
  .toolCard {
    display: flex;
    flex-direction: row;
    align-items: center;
    background: white;
    padding: 5px 15px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    transition: box-shadow 0.3s ease, transform 0.2s ease;
  }
  .toolDesc {
    margin-top: 5px;
  }
  .toolTitle {
    display: flex;
    flex-direction: row;
    align-items: center;
    .free {
      display: inline-block;
      -webkit-transform: scale(0.8);
      -ms-transform: scale(0.8);
      transform: scale(0.8);
      font-size: 14px;
      color: #9c9c9c;
      padding: 0 4px;
      border-radius: 2px;
      background-color: #f1f1f1;
    }
    .location {
      background-color: #f1f1f1;
      display: inline-block;
      -webkit-transform: scale(0.8);
      -ms-transform: scale(0.8);
      transform: scale(0.8);
      font-size: 14px;
      color: #9c9c9c;
      padding: 0 4px;
      border-radius: 2px;
    }
    .locationGw {
      background-color: #c94f4f;
      display: inline-block;
      -webkit-transform: scale(0.8);
      -ms-transform: scale(0.8);
      transform: scale(0.8);
      font-size: 14px;
      color: #ffffff;
      padding: 0 4px;
      border-radius: 2px;
    }
  }
  @media screen and (min-width: 1440px) {
    .toolDescWrapper {
      text-align: left;
      margin-left: 5px;
      .toolTitle {
        font-weight: bolder;
        font-size: 1.1rem;
      }
      .toolDesc {
        color: #504f4f;
        font-size: 0.5rem;
      }
    }
  }

  @media screen and (max-width: 1440px) {
    .toolDescWrapper {
      text-align: left;
      margin-left: 5px;
      .toolTitle {
        font-weight: bolder;
        font-size: 1.1rem;
      }
      .toolDesc {
        font-size: 0.5rem;
      }
    }
  }

  .toolDesc {
    overflow: hidden;
    line-height: 20px;
    height: 20px;
    font-size: 13px;
    letter-spacing: 1px;
  }

  .toolCard:hover {
    box-shadow: 0 8px 50px #23232333;
  }
</style>
