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
            <a-radio value="bounce">上下跳动</a-radio>
            <a-radio value="fadeInRightBig">从右滑入</a-radio>
            <a-radio value="pulse">放大</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="搜索框进场动画">
          <a-radio-group v-model="themeSetting.searchAnimate">
            <a-radio value="fadeInUp">弹出</a-radio>
            <a-radio value="bounce">上下跳动</a-radio>
            <a-radio value="fadeInRightBig">从右滑入</a-radio>
            <a-radio value="pulse">放大</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="工具栏切换动画">
          <a-radio-group v-model="themeSetting.toolGroupAnimate">
            <a-radio value="fadeInUp" :disabled="themeSetting.simplify"
              >弹出</a-radio
            >
            <a-radio value="bounce" :disabled="themeSetting.simplify"
              >上下跳动</a-radio
            >
            <a-radio value="fadeInRightBig" :disabled="themeSetting.simplify"
              >从右滑入</a-radio
            >
            <a-radio value="pulse" :disabled="themeSetting.simplify"
              >放大</a-radio
            >
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
          <template #label>
            极简模式
            <a-tooltip
              content="打开极简模式,下侧工具栏会消失。可点击右侧设置按钮重新进行模式选择。"
            >
              <icon-question-circle-fill />
            </a-tooltip>
          </template>
          <a-switch v-model="themeSetting.simplify">
            <template #checked> 打开 </template>
            <template #unchecked> 关闭 </template>
          </a-switch>
        </a-form-item>
        <a-form-item>
          <template #label>
            毛玻璃特效
            <a-tooltip
              content="给主窗口背景添加毛玻璃特效,当你自定义主窗口背景时候,可以根据需要打开,增加画面层次感。"
            >
              <icon-question-circle-fill />
            </a-tooltip>
          </template>
          <a-switch v-model="themeSetting.frostedGlass">
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
            <a-radio value="supper-glass-search">玻璃风</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="favicon">
          <a-input v-model="themeSetting.favicon" />
        </a-form-item>
        <a-form-item label="自定义网站名称">
          <a-input v-model="themeSetting.webTitle" />
        </a-form-item>
        <a-form-item
          v-show="
            themeSetting.searchStyle === 'supper-search' ||
            themeSetting.searchStyle === 'supper-glass-search'
          "
          class="animated fadeIn"
        >
          <template #label>
            超级搜索
            <a-tooltip content="超级搜索依赖浏览器跨域,请按照教程进行操作。">
              <icon-question-circle-fill />
            </a-tooltip>
          </template>
          <a-checkbox-group
            v-model="themeSetting.supperSearchEngine"
            :default-value="themeSetting.supperSearchEngine"
          >
            <a-checkbox value="tool">工具搜索</a-checkbox>
            <a-checkbox value="baidu">百度</a-checkbox>
            <a-checkbox value="kaifa">开发者搜索</a-checkbox>
            <a-checkbox value="zhihu">知乎</a-checkbox>
            <a-checkbox value="bili">B站</a-checkbox>
          </a-checkbox-group>
        </a-form-item>
        <a-form-item
          v-show="
            themeSetting.searchStyle === 'supper-search' ||
            themeSetting.searchStyle === 'supper-glass-search'
          "
          class="animated fadeIn"
        >
          <template #label>
            搜索选项
            <a-tooltip
              content="打开极简模式,下侧工具栏会消失。可点击右侧设置按钮重新进行模式选择。"
            >
              <icon-question-circle-fill />
            </a-tooltip>
          </template>
          <a-switch
            v-model="themeSetting.hideSearchAroundText"
            :default-checked="!themeSetting.hideSearchAroundText"
          >
            <template #checked> 隐藏</template>
            <template #unchecked> 展示 </template>
          </a-switch>
        </a-form-item>
        <a-form-item>
          <template #label>
            主窗口样式
            <a-trigger
              position="top"
              auto-fit-position
              :unmount-on-close="false"
            >
              <icon-eye style="cursor: pointer" />
              <template #content>
                <div class="cssWrapper">
                  <highlightjs
                    language="css"
                    :code="themeSetting.searchBackgroundCss"
                  />
                </div>
              </template>
            </a-trigger>
          </template>
          <a-textarea
            v-model="themeSetting.searchBackgroundCss"
            :placeholder="theme.searchBackgroundCss"
            allow-clear
            show-word-limit
          />
        </a-form-item>
        <a-form-item>
          <template #label> 搜索框文本样式 </template>
          <a-textarea
            v-model="themeSetting.searchTextCss"
            :placeholder="theme.searchTextCss"
            allow-clear
            show-word-limit
          />
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
  import deepClone from '@/api/lodashs';
  import { setTheme } from '@/api/toolList';
  import 'highlight.js/lib/common';
  import 'highlight.js/styles/github.css';
  import hljsVuePlugin from '@highlightjs/vue-plugin';
  import { useFavicon } from '@vueuse/core';
  import ExtThemeModel from '@/model/ExtThemeModel';

  export default defineComponent({
    name: 'ThemeSetting',
    components: {
      highlightjs: hljsVuePlugin.component,
    },
    props: {
      theme: ExtThemeModel,
      onlyRead: {
        type: Boolean,
        default: false,
      },
    },
    setup(props) {
      const themeSetting: ExtThemeModel = reactive<ExtThemeModel>(
        deepClone(props.theme)
      );

      const icon = useFavicon();
      /**
       * 每个子方法提供一个这样的方法用于父组件调用
       */
      function saveAction(): ExtThemeModel {
        setTheme(themeSetting);
        icon.value = themeSetting.favicon;
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
            themeSetting.hideSearchAroundText = true;
          } else {
            // 当关闭极简模式,恢复工具栏动画
            themeSetting.toolGroupAnimate = toolGroupAnimateBackup;
            themeSetting.hideSearchAroundText = false;
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
