<template>
  <div id="mobileWrapper">
    <SearchSimple placeholder="placeholder" @do-action="search" />
  </div>
</template>

<script lang="ts">
  // 抽屉工具，支持8个或者是4个
  import { defineComponent } from 'vue';
  import SearchSimple from '@/views/workplace/components/search/SearchSimple.vue';

  export default defineComponent({
    name: 'MobileIndex',
    components: { SearchSimple },
    setup() {
      function search(value: any) {
        // const url = searchCardList[currentSearchCardIndex.value].href + value;
        // window.open(url, '_blank');
        console.log(value);
      }
      return { search };
    },
  });
</script>

<style lang="less" scoped>
  #mobileWrapper {
    width: 100vw;
    height: 100vh;
    background: #409eff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
