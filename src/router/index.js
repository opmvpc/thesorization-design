import { createRouter, createWebHistory } from "vue-router";
import Brand from "../views/Brand.vue";

const routes = [
  {
    path: "/",
    name: "Brand",
    component: Brand
  },
  {
    path: "/components",
    name: "Components",
    component: () =>
      import(/* webpackChunkName: "components" */ "../views/Components.vue")
  },
  {
    path: "/pages",
    name: "Pages",
    component: () =>
      import(/* webpackChunkName: "pages" */ "../views/Pages.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
