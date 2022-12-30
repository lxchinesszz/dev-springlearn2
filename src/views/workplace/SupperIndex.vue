<template>
  <div id="supperWrapper">
    <Search />
  </div>
</template>

<script lang="ts">
  // 抽屉工具，支持8个或者是4个
  import { defineComponent } from 'vue';
  import Search from '@/views/workplace/components/Search.vue';

  export default defineComponent({
    name: 'SupperIndex',
    components: { Search },
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
