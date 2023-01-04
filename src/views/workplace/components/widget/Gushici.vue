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
</style>
