<template>
  <div class="tableWrapper">
    <a-divider :margin="1" />
    <a-scrollbar style="height: 400px; overflow: auto">
      <a-card
        v-for="(w, index) in wps"
        :key="index"
        hoverable
        :style="{ width: '30%', marginBottom: '8px' }"
      >
        <template #cover>
          <div
            :style="{
              height: '204px',
              overflow: 'hidden',
              backgroundSize: 'cover',
              background:
                'url(' +
                'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp' +
                ')',
            }"
          >
          </div>
        </template>
        <a-card-meta :title="w.name">
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
                A
              </a-avatar>
              <a-typography-text>Username</a-typography-text>
            </div>
          </template>
        </a-card-meta>
        <!--        卡片的slot-->
        <template #actions>
          <span class="icon-hover"> <IconThumbUp /> </span>
          <span class="icon-hover"> <IconShareInternal /> </span>
          <span class="icon-hover"> <IconMore /> </span>
        </template>
      </a-card>
    </a-scrollbar>
  </div>
</template>

<script lang="ts">
  // 抽屉工具，支持8个或者是4个
  import { defineComponent } from 'vue';
  import WidgetPlugin from '@/model/WidgetPlugin';

  export default defineComponent({
    name: 'WidgetPluginStore',
    props: {
      onlyRead: {
        type: Boolean,
        default: false,
      },
      wps: Array<WidgetPlugin>,
    },
  });
</script>

<style lang="less" scoped>
  .tableWrapper {
    height: 400px;
  }
  .icon-hover {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    transition: all 0.1s;
  }
  .icon-hover:hover {
    background-color: rgb(var(--gray-2));
  }
</style>
