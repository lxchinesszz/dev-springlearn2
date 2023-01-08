<template>
  <div class="tableWrapper">
    <a-divider :margin="1" />
    <a-scrollbar style="height: 400px; overflow: auto">
      <a-grid :col-gap="4" :row-gap="4" class="grid-demo-grid">
        <a-grid-item
          v-for="(w, index) in wList"
          :key="index"
          class="demo-item"
          :span="8"
        >
          <a-card hoverable :style="{ marginBottom: '8px' }" :title="w.name">
            <template #cover>
              <div
                class="wImg"
                :style="{
                  background: 'url(' + w.img + ')',
                }"
              >
              </div>
            </template>
            <a-card-meta>
              <template #description>
                {{ w.desc }}
              </template>
              <template #avatar>
                <div
                  :style="{
                    display: 'flex',
                    alignItems: 'center',
                    color: '#1D2129',
                  }"
                >
                  <a-avatar :size="24" :style="{ marginRight: '8px' }">
                    <img
                      src="https://img.springlearn.cn/learn_d98f09cdad8fa38168ec59c15a508490.ico"
                    />
                  </a-avatar>
                  <a-typography-text>{{ w.author }}</a-typography-text>
                </div>
              </template>
            </a-card-meta>
            <template #extra>
              <a-space>
                <a-tooltip content="添加小组件" position="left">
                  <a-switch v-model="w.show" type="line" :disabled="!onlyRead">
                    <template #checked-icon>
                      <icon-check />
                    </template>
                    <template #unchecked-icon>
                      <icon-close />
                    </template>
                  </a-switch>
                </a-tooltip>
              </a-space>
            </template>
            <!--        卡片的slot-->
            <template #actions>
              <a-space>
                <a-typography-text> 允许拖动 </a-typography-text>
                <a-tooltip content="允许拖动" position="left">
                  <a-switch
                    v-model="w.draggable"
                    type="round"
                    size="small"
                    :disabled="!onlyRead"
                  >
                    <template #checked-icon>
                      <Icon-Font type="icon-xianxingtuodong" />
                    </template>
                    <template #unchecked-icon>
                      <Icon-Font type="icon-xingzhuangjiehe"></Icon-Font>
                    </template>
                  </a-switch>
                </a-tooltip>
              </a-space>
            </template>
          </a-card>
        </a-grid-item>
      </a-grid>
    </a-scrollbar>
  </div>
</template>

<script lang="ts">
  // 抽屉工具，支持8个或者是4个
  import { defineComponent, toRaw } from 'vue';
  import WidgetPlugin from '@/model/WidgetPlugin';
  import { useWpsStore } from '@/store';
  import { setWeight } from '@/api/toolList';

  export default defineComponent({
    name: 'WidgetPluginStore',
    props: {
      onlyRead: {
        type: Boolean,
        default: false,
      },
      wps: Array<WidgetPlugin>,
    },
    setup() {
      // 需要添加的
      const addList: Array<WidgetPlugin> = [
        {
          name: 'Gushici',
          x: 0,
          y: 0,
          w: 300,
          h: 100,
          img: 'https://img.springlearn.cn/blog/eb1622ecbf5e0ca7e3e4b51088cda161.png',
          author: '西魏陶渊明',
          desc: '调用古诗词API,每次刷新会获取新的古诗词',
          draggable: true,
          show: false,
        },
        {
          name: 'EyeDropper',
          x: 0.5,
          y: 0.2,
          w: 50,
          h: 50,
          img: 'https://img.springlearn.cn/blog/7fdb3452939b59e7ca8ba1c52d5e1bf1.jpg',
          author: '西魏陶渊明',
          desc: '吸色板,设计师专用',
          draggable: true,
          show: false,
        },
        {
          name: 'NowTime',
          x: 0.1,
          y: 0.2,
          w: 210,
          h: 90,
          img: 'https://img.springlearn.cn/blog/ff0ac4f4a0324992d1f53d912928ee8b.jpg',
          author: '西魏陶渊明',
          desc: '实时时间',
          draggable: true,
          show: false,
          lockRatio: true,
        },
        {
          name: 'Wangyiyun',
          x: 0.1,
          y: 0.2,
          w: 210,
          h: 90,
          img: 'https://img.springlearn.cn/blog/fba5433b189ab715f5f7b08d2e5846c5.jpg',
          author: '西魏陶渊明',
          desc: '网抑云',
          draggable: true,
          show: false,
          lockRatio: false,
        },
      ];

      const wpsStore = useWpsStore();
      // 最终数据
      const wList: Array<WidgetPlugin> = wpsStore.mergeNewWps(addList);

      /**
       * 每个子方法提供一个这样的方法用于父组件调用
       */
      function saveAction(): Array<WidgetPlugin> {
        setWeight(toRaw(wList));
        return wList;
      }

      return {
        wList,
        saveAction,
      };
    },
  });
</script>

<style lang="less" scoped>
  :deep(.arco-link:hover) {
    background-color: rgb(0 0 0 / 0);
  }
  .tableWrapper {
    height: 400px;
  }
  .wImg {
    height: 150px;
    background-position: center center !important;
    background-size: cover !important;
  }
  //.icon-hover {
  //  display: flex;
  //  align-items: center;
  //  justify-content: center;
  //  width: 24px;
  //  height: 24px;
  //  font-size: 24px;
  //  border-radius: 50%;
  //  background-color: #9c9c9c;
  //  transition: all 0.1s;
  //}
  //.icon-hover:hover {
  //  background-color: rgb(var(--gray-2));
  //}
</style>
