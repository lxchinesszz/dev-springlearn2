<template>
  <div>
    <div><a-divider orientation="left">{{name}}</a-divider></div>
    <div class="toolPanel">
      1
    </div>
  </div>
</template>

<script lang="ts">
  // 抽屉工具，支持8个或者是4个
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'ToolDrawer',
    props:{
      'name':{
        type:String,
        default : '未命名'
      },
      'toolList':{
        default:[
          {
            title: 'Element UI',
            desc: 'Element 一套为开发者、设计师',
            link: 'https://blog.springlearn.cn',
            icon: 'https://element.eleme.cn/favicon.ico'
          }
        ]
      }
    }
  });
</script>

<style scoped>
:deep(.arco-divider-text){
   border-radius: 5px;
   background: #409eff;
  color: white;
 }
.toolPanel{
  background: #504f4f;
  width: 100%;
  height: 100%;
}
</style>
