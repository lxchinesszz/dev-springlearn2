<template>
  <div>
  </div>
</template>

<script lang="ts">
  // 抽屉工具，支持8个或者是4个
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Tool',
    props:{
      'info':{
        type:String,
        default : {
          title: 'Element UI',
          desc: 'Element 一套为开发者、设计师',
          link: 'https://blog.springlearn.cn',
          icon: 'https://element.eleme.cn/favicon.ico'
        }
      }
    }
  });
</script>

<style scoped>
</style>
