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
  import { defineComponent, reactive, toRaw } from 'vue';
  import WidgetPlugin from '@/model/WidgetPlugin';
  import { setWeight } from '@/api/toolList';
  import deepClone from '@/api/lodashs';
  import _ from 'lodash';
  import { useWpsStore } from '@/store';

  export default defineComponent({
    name: 'WidgetPluginStore',
    props: {
      onlyRead: {
        type: Boolean,
        default: false,
      },
      wps: Array<WidgetPlugin>,
    },
    setup(props) {
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
        },
      ];
      // 用户的小组件
      const userWidgets = deepClone(
        _.filter(props.wps, (w) => {
          return w.show;
        })
      );
      console.log(`us`, userWidgets);
      const userWidgetNameList = _.map(userWidgets, (w) => w.name);

      const newList: Array<WidgetPlugin> = [];
      for (let i = 0; i < addList.length; i += 1) {
        const addElement = addList[i];
        // 用户小组件中不包括新的就直接添加新组件选项
        if (!userWidgetNameList.includes(addElement.name)) {
          newList.push(addElement);
        }
      }
      newList.push(...userWidgets);

      const wpsStore = useWpsStore();
      wpsStore.mergeNewWps(userWidgets,addList)
      // 最终数据
      const wList: Array<WidgetPlugin> = reactive(newList);

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
