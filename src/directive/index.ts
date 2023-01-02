// 拖拽的指令
const drag = {
  mounted(el: HTMLElement, binding: any) {
    // 自定义属性，判断是否可拖拽
    el.style.cursor = 'grab';
    el.style.position = 'absolute';
    el.onmousedown = (e) => {
      document.onmousemove = (e2) => {
        // 移动时禁用默认事件 否则拖动的时候会有将元素拖动出来的效果
        e2.preventDefault();
        // 计算偏移距离 鼠标x - 元素x
        console.log(`x:${e2.clientX},y:${e2.clientY}`);
        const x = `${e2.clientX - el.offsetLeft + el.offsetLeft}`;
        const y = `${e2.clientY - el.offsetHeight}`;
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
      };

      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };
  },
};
// 挂载，注册
const directives = {
  install(app: any) {
    app.directive('drag', drag);
  },
};
export default directives;
