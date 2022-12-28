<template>
  <div v-show="fuseResultList.length > 0" class="fuseWrapper animated fadeIn">
    <a-scrollbar style="height: 50vh; overflow: auto">
      <ul ref="fuseWindow" class="fuseU">
        <li
          v-for="(fuseResult, index) in fuseResultList"
          :key="index"
          class="fuseL animated fadeIn"
          @click="open(fuseResult.tool.link)"
        >
          <a-breadcrumb>
            <a-breadcrumb-item>
              {{ fuseResult.categoryName }}
            </a-breadcrumb-item>
            <a-breadcrumb-item>
              {{ fuseResult.toolGroupName }}
            </a-breadcrumb-item>
            <a-breadcrumb-item>
              {{ fuseResult.tool.title }}
            </a-breadcrumb-item>
          </a-breadcrumb>
        </li>
      </ul>
    </a-scrollbar>
  </div>
</template>

<script lang="ts">
  //
  import { defineComponent, reactive, watch } from 'vue';
  import FuseToolResult from '@/model/FuseToolResult';
  import { FusePlugin, fusePlugin, openWindow } from '@/api/toolList';
  import { clearArray } from '@/api/lodashs';

  export default defineComponent({
    name: 'FuseToolPanel',
    props: {
      value: {
        type: String,
      },
    },
    setup(props) {
      const fuseResultList: Array<FuseToolResult> = reactive<FuseToolResult[]>(
        []
      );
      // 获取fuse插件
      const fp: FusePlugin = fusePlugin();
      watch(
        () => props.value,
        (newValue) => {
          const result: FuseToolResult[] = fp.fuseSearch(newValue);
          clearArray(fuseResultList);
          fuseResultList.push(...result);
        }
      );
      const open = (url: string) => {
        console.log('跳转链接', url);
        openWindow(url);
      };
      return { fuseResultList, open };
    },
  });
</script>

<style lang="less" scoped>
  .fuseWrapper {
    position: absolute;
    width: 90%;
    margin: 0 20px;
    padding: 0;
    background: linear-gradient(134.76deg, #fff 22.69%, #f8faff 104.23%);
    box-shadow: 0 6px 12px -10px rgb(36 91 219 / 6%),
      0 8px 24px rgb(36 91 219 / 4%), 0 10px 36px 10px rgb(36 91 219 / 4%);
    z-index: 9999;
    &:hover {
      box-shadow: 0 5.18771px 20px rgb(19 60 154 / 16%), inset 0 2px 0 #fff;
    }
    .fuseU {
      margin: 0.5px;
      background: white;
      list-style: none;
      padding: 0px;
      overflow: scroll;
      border-radius: 2px;
    }
    .fuseL {
      height: 3rem;
      text-align: left;
      padding: 0.5rem 1rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      &:hover {
        background-color: var(--color-border-1);
        cursor: pointer;
      }
    }
  }
</style>
