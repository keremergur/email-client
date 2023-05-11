import { createRouter, createWebHistory } from 'vue-router';

import InboxPage from './pages/InboxPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/dashboard' },
        { path: '/dashboard', component: null },
        { path: '/auth', component: null },
        { path: '/inbox', component: InboxPage },
        { path: '/important', component: null },
        { path: '/starred', component: null },
        { path: '/sent', component: null },
        { path: '/trash', component: null },
    ]
});

export default router;
