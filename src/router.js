import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(), // ✅ History mode para URLs limpias (SEO-friendly)
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./App.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      // Scroll suave a secciones con hash (#about, #products, etc)
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
});

export default router;
