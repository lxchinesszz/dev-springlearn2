import { onMounted, onUnmounted } from 'vue';

/**
 * 给当前页面绑定键盘事件
 * @param keyCode 要绑定的键盘事件
 * @param action 绑定的事件函数
 */
export default function keyDownBinder(
  keyCode: number,
  // eslint-disable-next-line func-names
  action = function ac() {}
) {
  const keyDown = (e: any) => {
    if (e.keyCode === keyCode) {
      action();
    }
  };
  onMounted(() => {
    window.addEventListener('keydown', keyDown);
  });
  onUnmounted(() => {
    window.removeEventListener('keydown', keyDown, false);
  });
}
