import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css';
NProgress.configure({ showSpinner: false }); // NProgress Configuration
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('@/views/workplace/index.vue'),
        },
        {
            path: '/ts',
            component: () => import('@/views/workplace/components/RoleCards.vue'),
        },
        {
            path: '/test',
            component: () => import('@/views/workplace/components/search/SupperSearch.vue'),
        },
        {
            path: '/mx',
            component: () => import('@/views/workplace/components/widget/Mx.vue'),
        },
        {
            path: '/mobile',
            component: () => import('@/views/workplace/MobileIndex.vue'),
        },
    ],
    scrollBehavior() {
        return { top: 0 };
    },
});
export default router;
//# sourceMappingURL=index.js.map