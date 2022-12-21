import { onMounted, onUnmounted } from 'vue';

// eslint-disable-next-line func-names
export default function keyDownBinder(
  keyCode: number,
  action = function () {}
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
