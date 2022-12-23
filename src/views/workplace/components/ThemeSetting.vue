<template>
  <div class="tableWrapper">
    <a-divider :margin="1" />
    <a-form
      :model="themeSetting"
      :style="{ width: '600px', marginTop: '5px' }"
      layout="horizontal"
      :disabled="!onlyRead"
    >
      <a-form-item field="radio" label="窗口进场动画">
        <a-radio-group v-model="themeSetting.windowAnimate">
          <a-radio value="fadeInUp">弹出</a-radio>
          <a-radio value="fadeInRight">从左到右</a-radio>
          <a-radio value="none">无</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item label="搜索框进场动画">
        <a-radio-group v-model="themeSetting.searchAnimate">
          <a-radio value="fadeInUp">弹出</a-radio>
          <a-radio value="fadeInRight">从左到右</a-radio>
          <a-radio value="none">无</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item label="工具栏切换动画">
        <a-radio-group v-model="themeSetting.toolGroupAnimate">
          <a-radio value="fadeInUp">弹出</a-radio>
          <a-radio value="fadeInRight">从左到右</a-radio>
          <a-radio value="none">无</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item label="系统ICON">
        <a-switch v-model="themeSetting.closeIcon">
          <template #checked> 打开 </template>
          <template #unchecked> 关闭 </template>
        </a-switch>
      </a-form-item>
      <a-form-item label="搜索框样式">
        <a-radio-group v-model="themeSetting.searchStyle" type="button">
          <a-radio value="search-standard">标准</a-radio>
          <a-radio value="search-google">Google</a-radio>
          <a-radio value="search-simple">简单</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item label="窗口背景样式">
        <a-textarea
          v-model="themeSetting.searchBackgroundCss"
          :placeholder="theme.searchBackgroundCss"
          allow-clear
          show-word-limit
        />
      </a-form-item>
      <a-form-item label="导航栏背景样式">
        <a-textarea
          v-model="themeSetting.navBarBackgroundCss"
          :placeholder="theme.navBarBackgroundCss"
          allow-clear
          show-word-limit
        />
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts">
  // 抽屉工具，支持8个或者是4个
  import { defineComponent, reactive } from 'vue';
  import ThemeModel from '@/model/ThemeModel';
  import deepClone from '@/api/lodashs';
  import { setTheme } from '@/api/toolList';

  export default defineComponent({
    name: 'ThemeSetting',
    props: {
      theme: ThemeModel,
      onlyRead: {
        type: Boolean,
        default: false,
      },
    },
    setup(props) {
      const themeSetting: ThemeModel = reactive<ThemeModel>(
        deepClone(props.theme)
      );

      /**
       * 每个子方法提供一个这样的方法用于父组件调用
       */
      function saveAction(): ThemeModel {
        setTheme(themeSetting);
        return themeSetting;
      }
      return {
        saveAction,
        themeSetting,
      };
    },
  });
</script>

<style lang="less" scoped>
  .tableWrapper {
    height: 400px;
  }
</style>
