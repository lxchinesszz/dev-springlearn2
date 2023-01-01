<template>
  <div style="width: 100%">
    <input
      id="searchInput"
      ref="searchInputRef"
      v-model="value"
      type="text"
      :placeholder="placeholder"
      @keydown.enter="search"
      @blur="blurAction"
    />
    <a-button id="searchButton" type="primary" class="btn-15" @click="search"
      >搜索
    </a-button>
  </div>
</template>

<script lang="ts">
  // 抽屉工具，支持8个或者是4个
  import { defineComponent, onMounted, ref, watch } from 'vue';

  export default defineComponent({
    name: 'SearchStandard',
    props: {
      placeholder: {
        type: String,
        default: '搜索一切',
      },
    },
    emits: ['doAction', 'change', 'blur'],
    setup(props, ctx) {
      const value = ref('');

      // 页面点击搜索触发
      const search = () => {
        ctx.emit('doAction', value.value);
      };

      const blurAction = () => {
        ctx.emit('blur');
      };

      // 监控数据输入框数据变化,发送change事件
      watch(value, (newValue) => {
        ctx.emit('change', newValue);
      });

      const searchInputRef = ref();

      // onMounted(() => {
      //   if (searchInputRef.value) {
      //     searchInputRef.value.focus();
      //   }
      // });

      return { searchInputRef, value, search, blurAction };
    },
  });
</script>

<style lang="less" scoped>
  #searchInput {
    height: 48px;
    text-indent: 15px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    font-size: 14px;
    border: none;
    width: 90%;
    outline: none;
  }

  #searchButton {
    border-radius: 0 10px 10px 0;
    height: 50px;
  }

  .btn-15 {
    border: none;
    z-index: 1;
    background: #3c7cbe;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
  }

  .btn-15:after {
    position: absolute;
    content: '';
    width: 0;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;
    background-color: #409eff;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    transition: all 0.3s ease;
  }

  .btn-15:hover {
    color: #fff;
  }

  .btn-15:hover:after {
    left: 0;
    width: 100%;
  }

  .btn-15:active {
    //top: 2px;
  }
</style>
