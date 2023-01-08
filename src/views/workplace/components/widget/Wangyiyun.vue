<template>
  <div id="gsc">
    <h2>{{ msg.content }}</h2>
    <p>{{ msg.origin }} - {{ msg.author }}</p>
  </div>
</template>

<script lang="ts">
  import { reactive, ref } from 'vue';
  import axios from 'axios';

  export default {
    name: 'Wangyiyun',
    setup() {
      const msg = reactive({
        content: '',
        author: '',
        origin: '',
      });
      const type = ref('j');
      axios.get(`https://v1.hitokoto.cn?c=${type.value}`).then((res) => {
        const { data } = res;
        if (data) {
          msg.content = data.hitokoto;
          msg.author = data.from_who;
          msg.origin = data.from;
        }
      });
      return { msg, type };
    },
  };
</script>

<style scoped>
  #gsc {
    color: white;
    text-align: center;
  }
</style>
