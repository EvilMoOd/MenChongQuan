import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'layout',
    redirect: '/home',
    component: () => import('@/layout/NavHeader.vue'),
    children: [
      {
        path: "/home",
        component: () => import("@/pages/home.vue")
      },
      {
        path: "/person",
        component: () => import("@/pages/person.vue")
      },
      {
        path: "/message",
        component: () => import("@/pages/message.vue"),
      },
      {
        path: "/ReLo",
        component: () => import("@/pages/relo.vue"),
      },
      {
        path: "/detail/:pid",
        component: () => import("@/pages/detail.vue"),
      }
    ]
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('@/pages/home.vue'),
  },
];

export default routes;
