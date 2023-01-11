import { ObjectDirective } from 'vue';

const LongPress: ObjectDirective = {
  mounted(el, binding) {
    if (typeof binding.value.fn !== 'function') {
      // // 将警告传递给控制台
      const warn = `[longpress:] provided expression '${binding.value}' is not afunction, but has to be `;
      console.warn(warn);
    } else {
      // 定义变量
      let pressTimer: ReturnType<typeof setTimeout> | null = null; // 定义空 定时器;
      // 定义函数处理程序
      const handler = () => {
        // 执行传递给指令的方法
        if (binding.value.fn) {
          binding.value.fn(binding.value.arg);
        }
      };
      // 创建计时器（ 1秒后执行函数 ）
      const start = (e: MouseEvent | TouchEvent) => {
        // 下列事件不执行1.不是鼠标左键2.单击事件  (3.没有传入长按时间 ?? 有默认)
        if ((<MouseEvent>e).button !== 0 && e.type === 'click') {
          return;
        }
        if (pressTimer === null) {
          pressTimer = setTimeout(() => {
            // 执行函数
            handler();
          }, 1000);
        }
      };
      // 取消计时器
      const cancel = () => {
        // 检查计时器是否有值
        if (pressTimer !== null) {
          clearTimeout(pressTimer);
          pressTimer = null;
        }
      };

      // 添加事件监听器
      el.addEventListener('mousedown', start);
      el.addEventListener('touchstart', start);
      // 取消计时器
      el.addEventListener('click', cancel);
      el.addEventListener('mouseout', cancel);
      el.addEventListener('touchend', cancel);
      el.addEventListener('touchcancel', cancel);
    }
  },
};

export default LongPress;
