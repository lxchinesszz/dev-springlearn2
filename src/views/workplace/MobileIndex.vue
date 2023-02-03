<template>
  <div id="mobileWrapper">
    <div style="position: relative; height: 100vh; width: 100vw" class="glass">
      <div></div>
      <h1 style="color: #ffffff; text-align: center">设计狮 🦁,疯狂加班中。</h1>
    </div>
  </div>
</template>

<script lang="ts" setup>
  // 抽屉工具，支持8个或者是4个
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
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card-demo {
    width: 100%;
  }
  .card-demo :deep(.arco-card-header) {
    border: none;
  }
</style>
