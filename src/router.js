import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

const router = createRouter({
  history: createWebHistory(), // ✅ History mode para URLs limpias (SEO-friendly)
  routes: [
    {
      path: "/",
      name: "home",
      component: App,
      meta: { scrollTo: "inicio" },
    },
    {
      path: "/nosotros",
      name: "about",
      component: App,
      meta: { scrollTo: "nosotros" },
    },
    {
      path: "/productos",
      name: "products",
      component: App,
      meta: { scrollTo: "productos" },
    },
    {
      path: "/contacto",
      name: "contact",
      component: App,
      meta: { scrollTo: "contacto" },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      // Esperar a que el DOM se actualice
      setTimeout(() => {
        if (to.meta.scrollTo) {
          // Scroll suave a la sección específica
          const element = document.getElementById(to.meta.scrollTo);
          if (element) {
            resolve({
              el: element,
              behavior: "smooth",
              top: 80, // Offset para el navbar
            });
          }
        } else if (savedPosition) {
          resolve(savedPosition);
        } else {
          // Scroll al inicio
          resolve({ top: 0, behavior: "smooth" });
        }
      }, 100);
    });
  },
});

export default router;
