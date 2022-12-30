import { ref } from 'vue';
export default function useVisible(initValue = false) {
    const visible = ref(initValue);
    const setVisible = (value) => {
        visible.value = value;
    };
    const toggle = () => {
        visible.value = !visible.value;
    };
    return {
        visible,
        setVisible,
        toggle,
    };
}
//# sourceMappingURL=visible.js.map