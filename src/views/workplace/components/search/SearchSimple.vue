<template>
  <div class="form">
    <button style="cursor: pointer" @click="search">
      <svg
        width="17"
        height="16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-labelledby="search"
      >
        <path
          d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
          stroke="currentColor"
          stroke-width="1.333"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </button>
    <input
      v-model="value"
      class="input"
      :placeholder="placeholder"
      type="text"
    />
    <button
      class="reset"
      type="reset"
      style="cursor: pointer"
      @click="value = ''"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script lang="ts">
  // 抽屉工具，支持8个或者是4个
  import { defineComponent, ref } from 'vue';
  import keyDownBinder from '@/hooks/KeyDownBinder';

  export default defineComponent({
    name: 'SearchSimple',
    props: {
      placeholder: {
        type: String,
        default: '搜索一切',
      },
    },
    emits: ['doAction'],
    setup(props, ctx) {
      const value = ref('');
      const search = () => {
        if (value.value !== '') {
          ctx.emit('doAction', value.value);
        }
      };

      keyDownBinder(13, {
        action: () => {
          search();
        },
      });

      return { value, search };
    },
  });
</script>

<style lang="less" scoped>
  /* From uiverse.io by @satyamchaudharydev */
  /* removing default style of button */

  .form button {
    border: none;
    background: none;
    color: #8b8ba7;
  }
  /* styling of whole input container */
  .form {
    width: 100%;
    height: 40px;
    --timing: 0.3s;
    --border-height: 2px;
    --input-bg: #fff;
    --border-color: #2f2ee9;
    --border-radius: 30px;
    --after-border-radius: 1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-inline: 0.8em;
    border-radius: var(--border-radius);
    transition: border-radius 0.5s ease;
    background: var(--input-bg, #fff);
  }
  /* styling of Input */
  .input {
    font-size: 0.9rem;
    background-color: transparent;
    width: 100%;
    height: 100%;
    padding-inline: 0.5em;
    padding-block: 0.7em;
    border: none;
  }
  /* styling of animated border */
  .form:before {
    content: '';
    position: absolute;
    background: var(--border-color);
    transform: scaleX(0);
    transform-origin: center;
    width: 100%;
    height: var(--border-height);
    left: 0;
    bottom: 0;
    border-radius: 1px;
    transition: transform var(--timing) ease;
  }
  /* Hover on Input */
  .form:focus-within {
    border-radius: var(--after-border-radius);
  }

  input:focus {
    outline: none;
  }
  /* here is code of animated border */
  .form:focus-within:before {
    transform: scale(1);
  }
  /* styling of close button */
  /* == you can click the close button to remove text == */
  .reset {
    border: none;
    background: none;
    opacity: 0;
    visibility: hidden;
  }
  /* close button shown when typing */
  input:not(:placeholder-shown) ~ .reset {
    opacity: 1;
    visibility: visible;
  }
  /* sizing svg icons */
  .form svg {
    width: 17px;
    margin-top: 3px;
  }
</style>
