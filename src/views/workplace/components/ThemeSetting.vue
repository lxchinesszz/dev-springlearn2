<template>
  <div class="tableWrapper">
    <a-divider :margin="1" />
    <a-scrollbar style="height: 400px; overflow: auto">
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
            <a-radio value="fadeIn">弹出</a-radio>
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
        <a-form-item label="模糊查找工具">
          <a-switch v-model="themeSetting.fuzzySearch">
            <template #checked> 打开 </template>
            <template #unchecked> 关闭 </template>
          </a-switch>
        </a-form-item>
        <a-form-item label="极简模式">
          <a-switch v-model="themeSetting.simplify">
            <template #checked> 打开 </template>
            <template #unchecked> 关闭 </template>
          </a-switch>
        </a-form-item>
        <a-form-item label="搜索框样式">
          <a-radio-group v-model="themeSetting.searchStyle" type="button">
            <a-radio value="search-standard">标准</a-radio>
            <a-radio value="search-google">Google</a-radio>
            <a-radio value="search-simple">简单</a-radio>
            <a-radio value="supper-search">超级搜索</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="窗口背景样式">
          <a-trigger position="top" auto-fit-position :unmount-on-close="false">
            <a-textarea
              v-model="themeSetting.searchBackgroundCss"
              :placeholder="theme.searchBackgroundCss"
              allow-clear
              show-word-limit
            />
            <template #content>
              <div class="cssWrapper">
                <highlightjs
                  language="css"
                  :code="themeSetting.searchBackgroundCss"
                />
              </div>
            </template>
          </a-trigger>
        </a-form-item>
        <a-form-item label="搜索框文本样式">
          <a-trigger position="top" auto-fit-position :unmount-on-close="false">
            <a-textarea
              v-model="themeSetting.searchTextCss"
              :placeholder="theme.searchTextCss"
              allow-clear
              show-word-limit
            />
            <template #content>
              <div class="cssWrapper">
                <highlightjs
                  language="css"
                  :code="themeSetting.searchTextCss"
                />
              </div>
            </template>
          </a-trigger>
        </a-form-item>
        <a-form-item label="导航栏背景样式">
          <a-trigger position="top" auto-fit-position :unmount-on-close="false">
            <a-textarea
              v-model="themeSetting.navBarBackgroundCss"
              :placeholder="theme.navBarBackgroundCss"
              allow-clear
              show-word-limit
            />
            <template #content>
              <div class="cssWrapper">
                <highlightjs
                  language="css"
                  :code="themeSetting.navBarBackgroundCss"
                />
              </div>
            </template>
          </a-trigger>
        </a-form-item>
      </a-form>
    </a-scrollbar>
  </div>
</template>

<script lang="ts">
  // 抽屉工具，支持8个或者是4个
  import { defineComponent, reactive, watch } from 'vue';
  import ThemeModel from '@/model/ThemeModel';
  import deepClone from '@/api/lodashs';
  import { setTheme } from '@/api/toolList';
  import 'highlight.js/lib/common';
  import 'highlight.js/styles/github.css';
  import hljsVuePlugin from '@highlightjs/vue-plugin';

  export default defineComponent({
    name: 'ThemeSetting',
    components: {
      highlightjs: hljsVuePlugin.component,
    },
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
      // 极简模式,关闭工具栏动画,这里先备份一下初始化状态
      let toolGroupAnimateBackup = themeSetting.toolGroupAnimate;
      watch(
        () => themeSetting.simplify,
        (newValue) => {
          // 当关闭时候,获取最新备份。如果最新备份是none则不更新。
          if (themeSetting.toolGroupAnimate !== 'none') {
            toolGroupAnimateBackup = themeSetting.toolGroupAnimate;
          }
          if (newValue) {
            // 修改工具类样式为none
            themeSetting.toolGroupAnimate = 'none';
          } else {
            // 当关闭极简模式,恢复工具栏动画
            themeSetting.toolGroupAnimate = toolGroupAnimateBackup;
          }
        }
      );
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
  .cssWrapper {
    text-align: left;
    background-color: white;
  }
  pre code {
    background-color: white;
  }
</style>
