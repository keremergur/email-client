import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/dashboard' },
        { path: '/dashboard', component: null },
        { path: '/auth', component: null },
        { path: '/inbox', component: null },
        { path: '/important', component: null },
        { path: '/starred', component: null },
        { path: '/sent', component: null },
        { path: '/trash', component: null },
    ]
});

export default router;
