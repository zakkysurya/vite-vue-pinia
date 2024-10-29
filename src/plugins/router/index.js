import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: () => import("@components/Dashboard.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@components/Home.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@components/About.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@components/Contact.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
