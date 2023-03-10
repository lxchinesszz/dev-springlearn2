import { useRouter } from 'vue-router';
import { Message } from '@arco-design/web-vue';
import { useUserStore } from '@/store';
export default function useUser() {
    const router = useRouter();
    const userStore = useUserStore();
    const logout = async (logoutTo) => {
        await userStore.logout();
        const currentRoute = router.currentRoute.value;
        Message.success('η»εΊζε');
        router.push({
            name: logoutTo && typeof logoutTo === 'string' ? logoutTo : 'login',
            query: {
                ...router.currentRoute.value.query,
                redirect: currentRoute.name,
            },
        });
    };
    return {
        logout,
    };
}
//# sourceMappingURL=user.js.map