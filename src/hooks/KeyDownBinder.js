import { onMounted, onUnmounted } from 'vue';
/**
 * 给当前页面绑定键盘事件
 * @param keyCode 要绑定的键盘事件
 * @param callbackAction 绑定的事件函数
 */
export default function keyDownBinder(keyCode, callbackAction) {
    const keyDown = (e) => {
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
//# sourceMappingURL=KeyDownBinder.js.map