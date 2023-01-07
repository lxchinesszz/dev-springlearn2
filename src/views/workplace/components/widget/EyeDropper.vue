<template>
  <div class="xgContainer" @click="open">
    <div class="xgWrapper">
      <Icon-Font type="icon-xiguan" size="1.2rem" />
      <div class="xgColorWrapper" :style="{ backgroundColor: sRGBHex }"> </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useEyeDropper, useClipboard } from '@vueuse/core';
  import { watch } from 'vue';
  import { Message } from '@arco-design/web-vue';

  const { open, sRGBHex } = useEyeDropper();
  const { isSupported, copy } = useClipboard();

  watch(sRGBHex, (newValue) => {
    const copyText = `${newValue},已复制到粘贴板`;
    if (isSupported) {
      copy(newValue).then(() => {
        Message.success(copyText);
      });
    } else {
      Message.error('Your browser does not support Clipboard API');
    }
  });
</script>

<style scoped lang="less">
  .xgContainer {
    cursor: crosshair;
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--border-radius-circle);
    background-color: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
    -webkit-box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
    -webkit-border-radius: 12px;
    color: rgba(255, 255, 255, 0.75);
    //&:hover {
    //  background-color: #9c9c9c;
    //}
    .xgWrapper {
      position: absolute;
      .xgColorWrapper {
        position: absolute;
        width: 15px;
        height: 15px;
        top: 0.8em;
        left: 0.6em;
        border-radius: var(--border-radius-small);
        background-color: #3c7cbe;
      }
    }
  }
</style>
