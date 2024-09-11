import { createRouter, createWebHistory } from "vue-router";

const routes: any = [
  {
    path: "/home",
    name: "home",
    component: () => import("../shared/pages/home/home.page.vue"),
  },
  {
    path: "/about-us",
    name: "about-us",
    component: () => import("../shared/pages/about-us/about-us.page.vue"),
  },
  {
    path: "/store",
    name: "store",
    component: () => import("../modules/store/pages/store.page.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404-page",
    component: () => import("../shared/pages/404-page/not-found.page.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
