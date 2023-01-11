<template>
  <div id="mobileWrapper">
    <div
      style="position: relative; height: 100vh; width: 100vw"
      :class="glassV ? 'glass' : ''"
      @focus="fuzzy"
    >
      <div class="searchDiv">
        <SearchSimple
          :placeholder="placeholder"
          @do-action="search"
          @change="fuzzy"
          @blur="notFuzzy"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  // 抽屉工具，支持8个或者是4个
  import { defineComponent, ref } from 'vue';
  import SearchSimple from '@/views/workplace/components/search/SearchSimple.vue';
  import defaultPlaceholder from '@/api/placeholder';
  import { openWindow } from '@/api/toolList';

  export default defineComponent({
    name: 'MobileIndex',
    components: { SearchSimple },
    setup() {
      const glassV = ref(false);
      const placeholder = ref();
      defaultPlaceholder()
        .then(({ data }) => {
          placeholder.value = data.hitokoto;
        })
        .catch(console.error);
      function search(value: any) {
        const url = `https://www.baidu.com/s?ie=UTF-8&wd=${value}`;
        openWindow(url);
      }
      function fuzzy(newValue) {
        if (newValue === '') {
          glassV.value = false;
        } else {
          glassV.value = true;
        }
      }

      function notFuzzy() {
        glassV.value = false;
      }
      return { search, placeholder, glassV, fuzzy, notFuzzy };
    },
  });
</script>

<style lang="less" scoped>
  #mobileWrapper {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('https://img.springlearn.cn/blog/83b872730d3ab4a502c2ae5d73db4dee.jpeg');
    background-size: cover;
    background-position: center center;
  }
  .searchDiv {
    position: absolute;
    bottom: 2rem;
    width: 100vw;
  }
  /**
 毛玻璃特效
 */
  .glass {
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
    transition: all 0.5s;
  }
</style>
