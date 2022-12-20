<template>
  <a :href="href" target="_blank">
    <slot></slot>
  </a>
</template>

<script lang="ts">
  // 抽屉工具，支持8个或者是4个
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'ELink',
    props: {
      href: {
        type: String,
        default: 'https://java.springlearn.cn',
      },
    },
    setup() {},
  });
</script>

<style lang="less" scoped>
  a,
  a:active,
  a:visited,
  a:link,
  a:focus {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
    outline: none;
    background: none;
    text-decoration: none;
    color: #5f6266;
  }

  a:hover {
    color: cornflowerblue;
  }
</style>
