import HomeView from "@/views/HomeView.vue";
import ProductManagementView from "@/views/ProductManagementView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/news",
      name: "news",
      component: () => import("../views/PartnerView.vue"),
    },
    {
      path: "/product",
      name: "product",
      component: ProductManagementView,
    },
  ],
});

export default router;
