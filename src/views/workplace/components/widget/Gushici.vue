<template>
  <div id="gsc">
    <h2>{{ msg.content }}</h2>
    <p>{{ msg.origin }} - {{ msg.author }}</p>
  </div>
</template>

<script lang="ts">
  import { reactive } from 'vue';
  import axios from 'axios';

  export default {
    name: 'Gushici',
    setup() {
      const msg = reactive({
        content: '',
        author: '',
        origin: '',
      });
      axios.get('https://v1.jinrishici.com/all.json').then((res) => {
        const { data } = res;
        if (data) {
          msg.content = data.content;
          msg.author = data.author;
          msg.origin = data.origin;
        }
      });
      return { msg };
    },
  };
</script>

<style scoped>
  #gsc {
    color: white;
    text-align: center;
  }
  /* CDN 服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
  @font-face {
    font-family: 'Regular';
    font-weight: 400;
    src: url('//at.alicdn.com/wf/webfont/sVLJhvgMufd5/1NbWsR61gXosYu4sKml-V.woff2')
        format('woff2'),
      url('//at.alicdn.com/wf/webfont/sVLJhvgMufd5/evVROIOrg6EEou0CNbu5x.woff')
        format('woff');
    font-display: swap;
  }
  h2 {
    font-family: 'Regular', serif;
  }
</style>
