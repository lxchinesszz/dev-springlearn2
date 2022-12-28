import { onMounted, onUnmounted } from 'vue';

/**
 * 键盘按键后回调动作
 */
export interface KeydownCallbackAction {
  action(): void;
}
/**
 * 给当前页面绑定键盘事件
 * @param keyCode 要绑定的键盘事件
 * @param callbackAction 绑定的事件函数
 */
export default function keyDownBinder(
  keyCode: number,
  callbackAction: KeydownCallbackAction
) {
  const keyDown = (e: any) => {
    if (e.keyCode === keyCode) {
      callbackAction.action();
    }
  };
  onMounted(() => {
    window.addEventListener('keydown', keyDown);
  });
  onUnmounted(() => {
    window.removeEventListener('keydown', keyDown, false);
  });
}
