import { createRouter, createWebHistory } from 'vue-router';

import InboxPage from './pages/InboxPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/view' },
        { path: '/auth', component: null },
        { path: '/view', component: InboxPage },
        { path: '/inbox', alias: '/view?page=inbox' },
        { path: '/important', alias: '/view?page=important' },
        { path: '/starred', alias: '/view?page=starred' },
        { path: '/sent', alias: '/view?page=sent' },
        { path: '/trash', alias: '/view?page=trash' },
    ],
});

export default router;
